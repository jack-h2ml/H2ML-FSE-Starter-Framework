/**
 * Local Dependencies
 */

import './HideOnScroll.scss';

import {
	startObserving,
	getTrackerById
} from './../../../../../common/GlobalIntersectionObserver';

/**
 * External Dependencies
 */

import 'animate.css/animate.min.css';

/**
 * 
 */

export class H2mlHideOnScroll {
	
	/** */
	static #scrollPosition = window.scrollY;

	/** */
	static #scrollDirection = false;

	/** */
	static #elements = new Map();
	
	/** */
	static #toggleElement = (elemData, show) => {
		//
		const {
			elem,
			hideOnScrollCustomClasses,
			hideOnScrollAnimateIn,
			hideOnScrollAnimateOut,
			hideOnScrollAnimateInDuration,
			hideOnScrollAnimateOutDuration,
		} = elemData;
		//
		elem.style.setProperty('--animate-duration', show ? hideOnScrollAnimateInDuration : hideOnScrollAnimateOutDuration);
		//
		elem.classList.remove(
			...(!show  
				? (hideOnScrollAnimateIn && [hideOnScrollAnimateIn]) ?? []
				: (hideOnScrollAnimateOut && [hideOnScrollAnimateOut]) ?? []
			),
			...(!show 
				? []
				: (hideOnScrollCustomClasses && [hideOnScrollCustomClasses]) ?? []
			)
		);
		elem.classList.add(
			...(show  
				? (hideOnScrollAnimateIn && [hideOnScrollAnimateIn]) ?? []
				: (hideOnScrollAnimateOut && [hideOnScrollAnimateOut]) ?? []
			),
			...(show 
				? []
				: (hideOnScrollCustomClasses && [hideOnScrollCustomClasses]) ?? []
			)
		);
		//
		elemData.isShown = show;
	}

	/** */
	static #globalTrackerCallback = (Tracker, entry) => {
		//
		const {
			scrollY
		} = window;
		H2mlHideOnScroll.#scrollDirection = scrollY !== H2mlHideOnScroll.#scrollPosition 
			? (scrollY < H2mlHideOnScroll.#scrollPosition)
			: H2mlHideOnScroll.#scrollDirection;
		H2mlHideOnScroll.#scrollPosition = scrollY;
		//
		this.#elements.get(Tracker)?.forEach((elemData) => {
			const {
				hideOnScrollThreshold,
				hideOnScrollBreakpoint,
				isShown
			} = elemData;
			//
			const breakpoint = hideOnScrollBreakpoint ? window.matchMedia(hideOnScrollBreakpoint).matches : true;
			//
			if(!entry.isIntersetcing) {
				entry.target.style.top = `${scrollY}px`;
				if(!isShown && H2mlHideOnScroll.#scrollDirection) {
					H2mlHideOnScroll.#toggleElement(elemData, true);
				} else if(isShown && !H2mlHideOnScroll.#scrollDirection && (scrollY > hideOnScrollThreshold) && breakpoint) {
					H2mlHideOnScroll.#toggleElement(elemData, false);
				}
			}
		})
	}

	/** */
	static #localTrackerCallback = (Tracker, entry) => {
		this.#elements.get(Tracker).forEach((elemData) => {
			//
			const {
				hideOnScrollBreakpoint,
				isShown,
			} = elemData;
			//
			const breakpoint = hideOnScrollBreakpoint ? window.matchMedia(hideOnScrollBreakpoint).matches : true;
			//
			if(entry.isIntersecting && !isShown) {
				H2mlHideOnScroll.#toggleElement(elemData, true);
			} else if(!entry.isIntersecting && isShown && breakpoint) {
				H2mlHideOnScroll.#toggleElement(elemData, false);
			}
		});
	}

	/** */
	static #maybeCreateGlobalTracker = (ownerDocument) => {
		//
		const globalTracker = getTrackerById('H2mlHideOnScrollGlobalTracker');
		//
		if(!globalTracker) {
			const {
				body,
				body: {
					firstElementChild
				}
			} = ownerDocument;
			//
			const newGlobalTracker = document.createElement('div');
			window.addEventListener('resize', (e) => {
				globalTracker.style.top = ownerDocument.scrollHeight - window.innerHeight;
			});
			newGlobalTracker.classList.add('hideOnScrollGlobalTracker');
			body.insertBefore(newGlobalTracker, firstElementChild);
			//
			return startObserving(newGlobalTracker, H2mlHideOnScroll.#globalTrackerCallback, 'H2mlHideOnScrollGlobalTracker').last();
		}
		//
		return globalTracker;
	}

	/** */
	static #maybeCreateLocalTracker = (ownerDocument, hideOnScrollThreshold) => {
		//
		const tracker = getTrackerById(hideOnScrollThreshold);
		//
		if(!tracker) {
			const {
				body,
				body: {
					firstElementChild
				}
			} = ownerDocument;
			//
			const newLocalTracker = document.createElement('div');
			newLocalTracker.classList.add('hideOnScrollTracker');
			newLocalTracker.style.height = `${hideOnScrollThreshold}px`;
			body.insertBefore(newLocalTracker, firstElementChild);
			//
			return startObserving(newLocalTracker, H2mlHideOnScroll.#localTrackerCallback, hideOnScrollThreshold).last();
		}
		//
		return tracker;
	}
	
	/** */
	static #doTrack = (elemData) => {
		//
		const {
			elem: {
				ownerDocument
			},
			hideOnScrollThreshold,
			hideOnScrollShowOnScrollUp
		} = elemData;
		//
		const globalTracker = this.#maybeCreateGlobalTracker(ownerDocument);
		if(hideOnScrollShowOnScrollUp) {
			if(!this.#elements.has(globalTracker)) {
				this.#elements.set(globalTracker, []);
			}
			this.#elements.get(globalTracker).push(elemData);
		}
		//
		const localTracker = this.#maybeCreateLocalTracker(ownerDocument, hideOnScrollThreshold);
		if(!this.#elements.has(localTracker)) {
			this.#elements.set(localTracker, []);
		}
		this.#elements.get(localTracker).push(elemData);
	}

	/** */
	static #maybeDecodeValue(key, value) {
		switch(key) {
			case 'hideOnScrollBreakpoint': {
				return decodeURIComponent(value).trim();
			}
			case 'hideOnScrollCustomClasses': {
				return decodeURIComponent(value).trim().split(' ');
			}
		}
		return value;
	}

	/** */
	static #prepare = (selector) => {
		document.querySelectorAll(selector).forEach(elem => {
			//
			H2mlHideOnScroll.#doTrack({
				elem,
				...[...Object.entries(elem.dataset)].reduce((res, [key, value]) => ({
					...res,
					...(key.includes('hideOnScroll') && ({[key]: H2mlHideOnScroll.#maybeDecodeValue(key, value)}))
				}), {}),
				isShown: true,
				prevY: 0,
				prevRatio: 0
			});
		});
	}

	/** */
	static track = (...selectors) => {
		selectors.forEach(selector => H2mlHideOnScroll.#prepare(selector));
	}
}