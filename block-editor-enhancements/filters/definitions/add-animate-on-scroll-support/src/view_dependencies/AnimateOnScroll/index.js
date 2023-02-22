import { switchExp } from '@h2ml/switchexpression';
import { Timeout } from '@h2ml/bettertimeout';

import 'animate.css/animate.min.css';
import './AnimateOnScroll.scss';

//

export class H2mlAnimateOnScroll {
	//
	static #observer = null;
	static #elements = new Map();
	static #isFirstRun = true;
	//
	static #thresholdArray = steps => Array.from(Array(steps + 1)).reduce((cur, _, index) => [...cur, index / steps || 0], []);
	//
	static #debounceTimeout;
	static #minId = null;
	static #maxId = null;
	//
	static #scrollPosition = window.scrollY;
	//
	static #toggleElement = (elemData, show) => {
		//
		const {
			elem,
			animateIn,
			animateOut,
			animateInDuration,
			animateOutDuration,
		} = elemData;
		//
		const animateDuration = show ? animateInDuration : animateOutDuration;
		const classToRemove = show ? animateOut : animateIn;
		const classToAdd = !show ? animateOut : animateIn;
		//
		elem.style.setProperty('--animate-duration', animateDuration);
		elem.classList.remove(classToRemove);
		elem.classList.add(classToAdd);
		//
		elemData.isShown = show;
	}
	//
	static #applyChanges() {
		const minId = H2mlAnimateOnScroll.#minId;
		const maxId = H2mlAnimateOnScroll.#maxId;
		// perform action on elements with Id between min and max
		if (minId !== null && maxId !== null) {
			const elements = [...H2mlAnimateOnScroll.#elements.entries()].slice(minId, maxId + 1);
			//
			const prevScrollPosition = H2mlAnimateOnScroll.#scrollPosition;
			const currScrollPosition = window.scrollY;
			const scrollingDirection = prevScrollPosition > currScrollPosition; // False = scrolling towards bottom (forwards), True = scrolling towards top (backwards)
			//
			elements.forEach(([key, elemData]) => {
				const {
					animateOnLoadVisible,
					animateThreshold,
					animateDirection,
					isShown,
					prevY,
					prevRatio,
				} = elemData;
				//
				const wrapperElem = document.querySelector(`[data-animate-key="${key}"]`);
				const {
					y: currY,
					height,
				} = wrapperElem.getBoundingClientRect();
				//
				const currRatio = currY <= 0
					? (Math.abs(currY) / height)
					: (Math.abs(currY - window.innerHeight) / height)
				//
				const isRamping = prevRatio < currRatio;
				//
				const animateDirectionFilter = !!switchExp([
					['forwards', !scrollingDirection || (currY < 0)],
					['backwards', scrollingDirection || (currY > 0)],
					['both', isRamping]
				]).eval(animateDirection).find(res => res === true);
				//
				if (
					animateDirectionFilter 
					&& isRamping 
					&& !isShown 
					&& (currRatio >= animateThreshold)
				) {
					H2mlAnimateOnScroll.#toggleElement(elemData, true);
				} else if (
					!animateDirectionFilter 
					&& !isRamping 
					&& isShown 
					&& (currRatio <= animateThreshold)
				) {
					H2mlAnimateOnScroll.#toggleElement(elemData, false);
				}
				//
				H2mlAnimateOnScroll.#elements.set(key, {
					...elemData,
					prevY: currY,
					prevRatio: currRatio
				});
				//
			});
			//
			H2mlAnimateOnScroll.#scrollPosition = currScrollPosition;
			H2mlAnimateOnScroll.#minId = null;
			H2mlAnimateOnScroll.#maxId = null;
		}
	}
	//
	static #observerCallback = (entries) => {
		if (H2mlAnimateOnScroll.#isFirstRun) {
			//
			H2mlAnimateOnScroll.#scrollPosition = window.scrollY;
			//
			entries.forEach(entry => {
				//
				const key = Number(entry.target.dataset.animateKey);
				const elemData = H2mlAnimateOnScroll.#elements.get(key);
				//
				if (!entry.isIntersecting) {
					// If element is offscreen, add the animateOut class.
					H2mlAnimateOnScroll.#toggleElement(elemData, false);
				} else {
					// 
					elemData.isShown = true;
				}
			});
			H2mlAnimateOnScroll.#isFirstRun = false;
		} else if(H2mlAnimateOnScroll.#scrollPosition !== window.scrollY) {
			H2mlAnimateOnScroll.#debounceTimeout?.clear();
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					//
					const elemId = Number(entry.target.dataset.animateKey);
					if (H2mlAnimateOnScroll.#minId === null || H2mlAnimateOnScroll.#maxId === null) {
						H2mlAnimateOnScroll.#minId = H2mlAnimateOnScroll.#maxId = elemId;
					} else {
						H2mlAnimateOnScroll.#minId = Math.min(H2mlAnimateOnScroll.#minId, elemId);
						H2mlAnimateOnScroll.#maxId = Math.max(H2mlAnimateOnScroll.#maxId, elemId);
					}
				}
			});
			H2mlAnimateOnScroll.#debounceTimeout = new Timeout(H2mlAnimateOnScroll.#applyChanges, 5);
		}
	};
	//
	static #observerOptions = {
		threshold: H2mlAnimateOnScroll.#thresholdArray(20),
		//rootMargin: '100% 0px 100% 0px'
	}
	//
	static #wrap = (elem, key) => {
		const wrapper = document.createElement('div');
		wrapper.classList.add('animateOnScrollWrapper', 'alignfull');
		wrapper.dataset.animateKey = key;
		elem.replaceWith(wrapper);
		wrapper.appendChild(elem)
		return wrapper;
	}
	//
	static #prepare = (selector) => {
		document.querySelectorAll(selector).forEach((elem, index) => {
			const {
				animateIn = null,
				animateOut = null,
				animateOnLoadVisible = false,
				animateInDuration,
				animateOutDuration,
				animateThreshold,
				animateDirection
			} = elem.dataset;
			//
			const wrapperElem = H2mlAnimateOnScroll.#wrap(elem, index);
			//
			H2mlAnimateOnScroll.#elements.set(index, {
				elem,
				animateIn,
				animateOut,
				animateOnLoadVisible,
				animateInDuration,
				animateOutDuration,
				animateThreshold,
				animateDirection,
				isShown: undefined,
				prevY: 0,
				prevRatio: 0,
			});
			H2mlAnimateOnScroll.#observer.observe(wrapperElem);
		});
	}
	//
	static #initObserver = () => {
		H2mlAnimateOnScroll.#observer = new IntersectionObserver(
			H2mlAnimateOnScroll.#observerCallback,
			H2mlAnimateOnScroll.#observerOptions
		);
	}
	//
	static animate = (...selectors) => {
		// If the observer has not yet been initialised, initialise it. 
		if (!H2mlAnimateOnScroll.#observer) H2mlAnimateOnScroll.#initObserver();
		// Begin observing based on the passed querySelectors.
		selectors.forEach(selector => H2mlAnimateOnScroll.#prepare(selector));
	}
}