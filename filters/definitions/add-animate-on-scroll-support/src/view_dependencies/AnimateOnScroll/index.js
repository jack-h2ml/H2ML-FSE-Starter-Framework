import 'requestidlecallback-polyfill';

import { switchExp } from '@h2mlagency/switchexpression';

import 'animate.css/animate.min.css';
import './AnimateOnScroll.scss';

//

export class H2mlAnimateOnScroll {
	//
	static #observer = null;
	static #elements = new Map();
	//
	static #currElem = null;
	static #currElemData = null
	//
	static #thresholdArray = steps => Array.from(Array(steps + 1)).reduce((cur, _, index) => [...cur, index / steps || 0], []);
	//
	static #toggleCurrentElement = (show) => { 
		const elemData = H2mlAnimateOnScroll.#currElemData
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
	static #observerCallback = (entries) => {
		entries.forEach(entry => {
			window.requestIdleCallback(() => {
				// Element Store
				const elements = H2mlAnimateOnScroll.#elements;
				// Get Element's & state.
				const anchor = H2mlAnimateOnScroll.#currElem = entry.target;
				const elemData = H2mlAnimateOnScroll.#currElemData = elements.get(anchor);
				const {
					animateOnLoadVisible,
					animateThreshold,
					animateDirection,
					isShown,
					prevY,
					prevRatio,
				} = elemData;
				//
				const currY = entry.boundingClientRect.y;
				const currRatio = entry.intersectionRatio;
				//
				const scrollingDirection = prevY >= currY; // True = up, False = down
				const isRamping = prevRatio < currRatio;
				//
				const animateDirectionFilter = !!switchExp([
					['forwards', (scrollingDirection && isRamping) === (scrollingDirection || isRamping)],
					['backwards', (!scrollingDirection && isRamping) === (!scrollingDirection || isRamping)],
					['both', true]
				]).eval(animateDirection).find(res => res === true);
				//
				if(isShown !== !!isShown) {
					// Fires the first time an element is added.
					if(!isRamping) {
						// If element is offscreen, add the animateOut class.
						H2mlAnimateOnScroll.#toggleCurrentElement(!animateDirectionFilter);
					} else if(animateOnLoadVisible) {
						// If element is onscreen, and is animateOnLoadVisible is true, add the animateIn class.
						H2mlAnimateOnScroll.#toggleCurrentElement(true);
					}
				} else {
					if(animateDirectionFilter) {
						if(!isShown && (currRatio >= animateThreshold)) {
							H2mlAnimateOnScroll.#toggleCurrentElement(true);
						} else if(isShown && (currRatio <= animateThreshold)) {
							H2mlAnimateOnScroll.#toggleCurrentElement(false);
						}
					}
				}
				// Update element state
				elements.set(anchor, {
					...elemData,
					prevY: currY,
					prevRatio: currRatio
				});
			}, {timeout: 300});
		});
	};
	//
	static #observerOptions = {
		threshold: H2mlAnimateOnScroll.#thresholdArray(20),
		rootMargin: '0px 200%'
	}
	//
	static #wrap = (elem) => {
		const wrapper = document.createElement('div');
		wrapper.classList.add('animateOnScrollWrapper', 'alignfull');
		elem.replaceWith(wrapper);
		wrapper.appendChild(elem)
		return wrapper;
	}
	//
	static #handleResize = () => [...H2mlAnimateOnScroll.#elements.entries()].forEach(([anchor, value]) => {
		const {
			y: elemYOffset,
			x: elemXOffset,
			width,
			height
		} = value.elem.getBoundingClientRect();
		//
		const {
			pageYOffset,
			pageXOffset
		} = window;
		//
		Object.assign(anchor.style, {
			top: `${pageYOffset + elemYOffset}px`,
			left: `${pageXOffset + elemXOffset}px`,
			width: `${width}px`,
			height: `${height}px`
		});
	});
	
	//
	static #anchor = () => {
		const anchor = document.createElement('div');
		anchor.classList.add('animateOnScrollAnchor');
		return document.body.appendChild(anchor);
	}
	//
	static #prepare = (selector) => {
		//
		document.querySelectorAll(selector).forEach(elem => {
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
			const anchor = H2mlAnimateOnScroll.#anchor();
			//
			H2mlAnimateOnScroll.#elements.set(anchor, {
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
			//
			H2mlAnimateOnScroll.#observer.observe(anchor);
		});
		//
		H2mlAnimateOnScroll.#handleResize();
		window.addEventListener('resize', H2mlAnimateOnScroll.#handleResize());
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
		if(!H2mlAnimateOnScroll.#observer) H2mlAnimateOnScroll.#initObserver();
		// Begin observing based on the passed querySelectors.
		selectors.forEach(selector => H2mlAnimateOnScroll.#prepare(selector));
	}
}