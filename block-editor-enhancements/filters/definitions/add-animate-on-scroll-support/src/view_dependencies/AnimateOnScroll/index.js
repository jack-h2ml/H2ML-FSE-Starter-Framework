/**
 * Local Dependencies
 */

import './AnimateOnScroll.scss';

import {
	startObserving,
	requireDebouncing
} from './../../../../../common/GlobalIntersectionObserver';

/**
 * External Dependencies
 */

import 'animate.css/animate.min.css';

/**
 * 
 */

export class H2mlAnimateOnScroll {

	/** */
	static #elements = new Map();

	/** */
	static #debouncerStore;

	/** */
	static #toggleElement = (elemData, show) => {
		//
		const {
			elem,
			wrapper,
			animateIn,
			animateOut,
			animateCustomClasses,
			animateInDuration,
			animateOutDuration,
		} = elemData;
		//
		elem.style.setProperty('--animate-duration', show ? animateInDuration : animateOutDuration);
		elem.classList.remove(
			...(!show  
				? (animateIn && [animateIn]) ?? []
				: (animateOut && [animateOut]) ?? []
			),
			...(show 
				? []
				: (animateCustomClasses && [animateCustomClasses]) ?? []
			)
		);
		elem.classList.add(
			...(show  
				? (animateIn && [animateIn]) ?? []
				: (animateOut && [animateOut]) ?? []
			),
			...(!show 
				? []
				: (animateCustomClasses && [animateCustomClasses]) ?? []
			)
		);
		//
		elemData.isShown = show;
	}

	/** */
	static #debouncerCallback() {
		const minId = H2mlAnimateOnScroll.#debouncerStore.get('minId');
		const maxId = H2mlAnimateOnScroll.#debouncerStore.get('maxId');
		const scrollingDirection = this.prevScrollPosition < this.currScrollPosition; // False = scrolling towards bottom (forwards), True = scrolling towards top (backwards)
		//
		H2mlAnimateOnScroll.#elements.forEach((elemData, key) => {
			if ((key >= minId) && (key <= maxId + 1)) {
				//
				const {
					elem,
					wrapper,
					animateThreshold,
					animateDirection,
					isShown,
				} = elemData;
				//
				const {
					y: currY,
					height,
				} = wrapper.getBoundingClientRect();
				//
				const currRatio = currY <= 0
					? (height + currY) / height
					: (window.innerHeight - currY) / height
				//
				const thresholdHide = currRatio < animateThreshold;

				//
				let doShow;
				let doHide;
				//
				switch(animateDirection) {
					case ('forwards'): {
						doShow = !isShown && !thresholdHide;
						doHide = !doShow && isShown && !scrollingDirection && thresholdHide && (currY > 0);
						break;
					}
					case ('backwards'): {
						//doShow = !isShown && !scrollingDirection && !thresholdHide && (currY < 0);
						//doHide = isShown && scrollingDirection && thresholdHide && (currY < 0);
						doShow = !isShown && !thresholdHide;
						doHide = !doShow && isShown && scrollingDirection && thresholdHide && (currY < 0);
						break;
					}
					case ('both'): {
						doShow = !isShown && !thresholdHide
						doHide = isShown && thresholdHide;
					}
				}
				if (doShow) {
					H2mlAnimateOnScroll.#toggleElement(elemData, true);
				} else if (doHide) {
					H2mlAnimateOnScroll.#toggleElement(elemData, false);
				}
			}
		});
		H2mlAnimateOnScroll.#debouncerStore.set('minId', null);
		H2mlAnimateOnScroll.#debouncerStore.set('maxId', null);
	}

	/** */
	static #trackerCallback = (Tracker, entry, { isFirstRun, prevScrollPosition, currScrollPosition, scrollDelta }) => {
		const key = Number(Tracker.target.dataset.animateOnScrollKey);
		if (isFirstRun) {
			const {
				intersectionRatio: currRatio,
				boundingClientRect: {
					y: currY
				}
			} = entry;

			//
			const elemData = H2mlAnimateOnScroll.#elements.get(key);
			const {
				animateThreshold,
				animateDirection
			} = elemData;
			//
			const offScreenUp = currRatio < animateThreshold && currY < 0;
			const offScreenDown = currRatio < animateThreshold && currY > window.innerHeight;
			//
			switch (animateDirection) {
				case ('forwards'): {
					if (offScreenDown) H2mlAnimateOnScroll.#toggleElement(elemData, false);
					break;
				}
				case ('backwards'): {
					if (offScreenUp) H2mlAnimateOnScroll.#toggleElement(elemData, false);
					break;
				}
				case ('both'): {
					if (offScreenUp || offScreenDown) H2mlAnimateOnScroll.#toggleElement(elemData, false);
				}
			}
		} else {
			if (entry.isIntersecting) {
				//
				const minId = H2mlAnimateOnScroll.#debouncerStore.get('minId');
				const maxId = H2mlAnimateOnScroll.#debouncerStore.get('maxId');
				//
				if (minId === null || maxId === null) {
					H2mlAnimateOnScroll.#debouncerStore.set('minId', key);
					H2mlAnimateOnScroll.#debouncerStore.set('maxId', key);
				} else {
					H2mlAnimateOnScroll.#debouncerStore.set('minId', Math.min(minId, key));
					H2mlAnimateOnScroll.#debouncerStore.set('maxId', Math.max(maxId, key));
				}
			}
		}
	}

	/** */
	static #wrap = (elemData) => {
		//
		const {
			elem,
			index: key
		} = elemData;
		//
		const wrapper = document.createElement('div');
		wrapper.classList.add('animateOnScrollWrapper', 'alignfull');
		wrapper.dataset.animateOnScrollKey = key;
		elem.replaceWith(wrapper);
		wrapper.appendChild(elem);
		//
		this.#elements.set(key, {...elemData, wrapper});
		//
		return wrapper;
	}

	/** */
	static #prepare = (selector) => {
		//
		H2mlAnimateOnScroll.#debouncerStore = requireDebouncing('animateOnScroll', H2mlAnimateOnScroll.#debouncerCallback, 30);
		//
		document.querySelectorAll(selector).forEach((elem, index) => {
			const {
				animateIn = null,
				animateOut = null,
				animateCustomClasses,
				animateOnLoadVisible = false,
				animateInDuration,
				animateOutDuration,
				animateThreshold,
				animateDirection
			} = elem.dataset;
			
			startObserving(
				H2mlAnimateOnScroll.#wrap({
					elem,
					index,
					key: Symbol(),
					animateIn,
					animateOut,
					animateCustomClasses,
					animateOnLoadVisible,
					animateInDuration,
					animateOutDuration,
					animateThreshold,
					animateDirection,
					isShown: true,
				}),
				H2mlAnimateOnScroll.#trackerCallback,
				index
			);
		});
	}

	/** */
	static track = (...selectors) => {
		// Begin observing based on the passed querySelectors.
		selectors.forEach(selector => H2mlAnimateOnScroll.#prepare(selector));
	}
}