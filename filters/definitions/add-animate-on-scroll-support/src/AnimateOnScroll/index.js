import 'animate.css/animate.min.css';
import './AnimateOnScroll.scss';

export class AnimateOnScroll {
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
		const elemData = AnimateOnScroll.#currElemData
		const {
			elem,
			animateIn,
			animateOut
		} = elemData;
		//
		const classToRemove = show ? animateOut : animateIn;
		const classToAdd = !show ? animateOut : animateIn;
		//
		elem.classList.remove(classToRemove);
		elem.classList.add(classToAdd);
	}
	//
	static #observerCallback = (entries) => {
		entries.forEach(entry => {
			window.requestIdleCallback(() => {
				// Element Store
				const elements = AnimateOnScroll.#elements;
				// Get Element's & state.
				const wrapperElem = AnimateOnScroll.#currElem = entry.target;
				const elemData = AnimateOnScroll.#currElemData = elements.get(wrapperElem);
				const {
					animateOnLoadVisible,
					isShown,
					prevY,
					prevRatio,
				} = elemData;
				//
				const currY = entry.boundingClientRect.y;
				const currRatio = entry.intersectionRatio;
				const isIntersecting = currRatio > 0.5;
				//
				const scrollingDirection = prevY > currY; // True = down, False = up
				const doAnimateIn = prevRatio < currRatio;
				//
				if(isShown !== !!isShown) {
					// Fires the first time an element is added.
					if(!isIntersecting) {
						// If element is offscreen, add the animateOut class.
						AnimateOnScroll.#toggleCurrentElement(false);
					} else if(animateOnLoadVisible) {
						// If element is onscreen, and is animateOnLoadVisible is true, add the animateIn class.
						AnimateOnScroll.#toggleCurrentElement(true);
					}
				} else if(isShown !== isIntersecting) {
					// Only fires once the elements initial state has been set, 
					// the element is above / below the intersection threshold,
					// and the element is not already in an animation cycle. 
					if(doAnimateIn) {
						// Add the animateIn class.
						AnimateOnScroll.#toggleCurrentElement(true);
					} else {
						// Add the animateOut class.
						AnimateOnScroll.#toggleCurrentElement(false);
					}
				} 
				// Update element state
				elements.set(wrapperElem, {
					...elemData,
					isShown: isIntersecting,
					prevY: currY,
					prevRatio: currRatio
				});
			});
		});
	};
	//
	static #observerOptions = {
		threshold: AnimateOnScroll.#thresholdArray(20),
		rootMargin: '0px 200%'
	}
	//
	//
	//
	/*
	static #wrap = (elem) => {
		const wrapper = document.createElement('div');
		wrapper.classList.add('animateOnScrollWrapper', 'alignfull');
		elem.replaceWith(wrapper);
		wrapper.appendChild(elem)
		return wrapper;
	}
	*/
	static #wrap = (elem) => {
		const outerWrapper = document.createElement('div');
		outerWrapper.classList.add('animateOnScrollOuterWrapper', 'alignfull');

		const innerWrapper = document.createElement('div');
		innerWrapper.classList.add('animateOnScrollInnerWrapper', 'alignfull');
		
		elem.replaceWith(outerWrapper);
		
		innerWrapper.appendChild(elem);
		outerWrapper.appendChild(innerWrapper);
		
		return outerWrapper;
	}
	
	//
	static #prepare = (selector) => {
		document.querySelectorAll(selector).forEach(elem => {
			const {
				animateIn = null,
				animateOut = null,
				animateOnLoadVisible = false,
				animateDuration = '0.6s',
			} = elem.dataset;
			//
			const wrapperElem = AnimateOnScroll.#wrap(elem);
			elem.style.setProperty('--animate-duration', animateDuration);
			//
			AnimateOnScroll.#elements.set(wrapperElem, {
				elem,
				animateIn,
				animateOut,
				animateOnLoadVisible,
				animateDuration,
				isShown: undefined,
				prevY: 0,
				prevRatio: 0,
			});
			AnimateOnScroll.#observer.observe(wrapperElem);
		});
	}
	//
	static #initObserver = () => {
		AnimateOnScroll.#observer = new IntersectionObserver(
			AnimateOnScroll.#observerCallback, 
			AnimateOnScroll.#observerOptions
		);
	}
	//
	static animate = (...selectors) => {
		// If the observer has not yet been initialised, initialise it. 
		if(!AnimateOnScroll.#observer) AnimateOnScroll.#initObserver();
		// Begin observing based on the passed querySelectors.
		selectors.forEach(selector => AnimateOnScroll.#prepare(selector));
	}
}