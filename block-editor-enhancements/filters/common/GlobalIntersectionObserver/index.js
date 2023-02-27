/**
 * Internal Dependencies
 */

import { Timeout } from '@h2ml/bettertimeout';

/**
 * 
 */

class _H2ml_BetterArray extends Array {
	/** */
	static get [Symbol.species]() {
    	return Array;
  	}

	/** */
	*entries() {
		let i = 0
		while(i < this.length) {
			yield this[i++];
		}
		return;
	}

	/** */
	*withEntries(callback) {
		let i = 0;
		while(i < this.length) {
			yield callback(this[i], i++, this);
		}
		return;
	}

	/** */
	last() {
		return this[this.length - 1];
	}

	/** */
	constructor(...vals) {
		super(...vals);
	}
}

/**
 * 
 */

class _H2ml_GlobalIntersection_Trackers extends _H2ml_BetterArray {

	/** */
	getById(TrackerId) {
		const entries = this.withEntries(Tracker => Tracker.id === TrackerId ? Tracker : false);
		let value;
		while((value = entries.next()).value === false);
		return value.value;
	}

	/** */
	get(TrackerElem) {
		const entries = this.withEntries(Tracker => Tracker.target === TrackerElem ? Tracker : false);
		let value;
		while((value = entries.next()).value === false);
		return value.value;
	}

	/** */
	track(Tracker) {
		if(Tracker.constructor !== _H2ml_GlobalIntersection_Tracker) {
			console.error(Error(
				`H2ml_GlobalIntersection_Observer: attempted to track a '${typeof Tracker}' with '_H2ml_GlobalIntersection_Tracker'.`
			));
		} else {	
			this.push(Tracker);
		}
	}

	/** */
	constructor(observer, ...Trackers) {
		if(observer.constructor !== IntersectionObserver) {
			throw Error(
				`H2ml_GlobalIntersection_Observer: attempt to inititalise '_H2ml_GlobalIntersection_Trackers' without an 'IntersectionObserver' as its first parameter.`
			);
		}
		Trackers.forEach(Tracker => {
			if(Tracker.constructor !== _H2ml_GlobalIntersection_Tracker) {
				throw Error(
					`H2ml_GlobalIntersection_Observer: attempted to initialise '_H2ml_GlobalIntersection_Trackers' with non '_H2ml_GlobalIntersection_Tracker' value.`
				);
			}
		});
		super(...Trackers);
	}
}

/**
 *
 */

class _H2ml_GlobalIntersection_Tracker {
	
	/** */
	#target;
	#callback;
	#id;

	/** */
	*[Symbol.iterator]() {
    	yield this.#target;
    	yield this.#callback;
		yield this.#id;
  	}
	
	/** */
	get target() {
		return this.#target;
	}
	
	/** */
	get callback() {
		return this.#callback;
	}

	/** */
	get id() {
		return this.#id;
	}
	
	/** */
	constructor(target, callback, id = null) {
		const {
			ownerDocument: {
				defaultView: {
					Element = false
				} = false
			} = false
		} = target;
		const elemIsElement = Element && target instanceof Element;
		//
		const callbackIsFunction = typeof callback === 'function';
		//
		if(elemIsElement && callbackIsFunction) {
			this.#target = target;
			this.#callback = callback;
			this.#id = id;
		} else {
			const errorValues = !elemIsElement 
				? ['target', 'Node', typeof target]
				: ['second', 'Function', typeof callback];
			throw Error(
				`H2ml_GlobalIntersection_Observer: '_H2ml_GlobalIntersection_Tracker' expects the '${errorValues[0]}' parameter to be a '${errorValues[1]}', '${errorValues[2]}' passed.`
			);
		}
	}
}

/**
 *
 */

class H2ml_GlobalIntersection_Observer {

	/** */
	static #isFirstRun = true;

	/** */
	static #scrollPosition;

	/** */
	static #debouncerStores = new Map();

	/** */
	static #thresholdArray = steps => Array.from(Array(steps + 1)).reduce((cur, _, index) => [...cur, index / steps || 0], []);
	
	/** */
	static #observerCallback = (entries) => {
		//
		H2ml_GlobalIntersection_Observer.#debouncerStores.forEach(({debouncer}) => {
			debouncer?.clear();
		});
		//
		entries.forEach(entry => {
			const Tracker = this.#trackers.get(entry.target);
			Tracker.callback(Tracker, entry, {
				isFirstRun: H2ml_GlobalIntersection_Observer.#isFirstRun,
				prevScrollPosition: H2ml_GlobalIntersection_Observer.#scrollPosition,
				currScrollPosition: window.scrollY,
				scrollDelta: window.scrollY - H2ml_GlobalIntersection_Observer.#scrollPosition
			});
		});

		//
		H2ml_GlobalIntersection_Observer.#debouncerStores.forEach(({debouncer, callback, duration}) => {
			debouncer = new Timeout(callback.bind({
				isFirstRun: H2ml_GlobalIntersection_Observer.#isFirstRun,
				prevScrollPosition: H2ml_GlobalIntersection_Observer.#scrollPosition,
				currScrollPosition: window.scrollY,
				scrollDelta: window.scrollY - H2ml_GlobalIntersection_Observer.#scrollPosition
			}), duration);
		});

		//
		H2ml_GlobalIntersection_Observer.#isFirstRun = false;
		H2ml_GlobalIntersection_Observer.#scrollPosition = window.scrollY;
	};

	/** */
	static #observerOptions = {
		threshold: H2ml_GlobalIntersection_Observer.#thresholdArray(20),
	}

	/** */
	static #observer = new IntersectionObserver(
		H2ml_GlobalIntersection_Observer.#observerCallback,
		H2ml_GlobalIntersection_Observer.#observerOptions
	);

	/** */
	static #trackers = new _H2ml_GlobalIntersection_Trackers(H2ml_GlobalIntersection_Observer.#observer);

	/** */
	static getTrackerById = (id) => {
		return this.#trackers.getById(id);
	}

	/** */
	static getTracker = (elem) => {
		return this.#trackers.get(elem);
	}

	/** */
	static observe = (elem, callback, id) => {
		this.#trackers.track(new _H2ml_GlobalIntersection_Tracker(elem, callback, id));
		this.#observer.observe(elem);
		return this.#trackers;
	}

	/** */
	static requireDebouncing = (name, callback, duration = 100) => {
		return H2ml_GlobalIntersection_Observer.#debouncerStores.set(name, {
			callback,
			debouncer: null,
			duration,
			store: new Map()
		}).get(name).store;
	}
}

export const startObserving = (elem, callback, id) => H2ml_GlobalIntersection_Observer.observe(elem, callback, id);

export const requireDebouncing = (name, callback, duration) => H2ml_GlobalIntersection_Observer.requireDebouncing(name, callback, duration);

export const getTrackerById = (id) => H2ml_GlobalIntersection_Observer.getTrackerById(id);

export const getTracker = (elem) => H2ml_GlobalIntersection_Observer.getTracker(elem);