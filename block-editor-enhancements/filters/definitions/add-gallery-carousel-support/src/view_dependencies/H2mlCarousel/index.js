/**
 * Local Dependencies
 */

import './H2mlCarousel.scss';

/**
 * 
 */

class H2mlDomBase {

	/** Methods */

	// 
	setAttributes = (elem, attributes) => Object.assign(elem, attributes);

	//
	setStyleProperties = (elem, properties) => Object.assign(elem.style, properties);

	//
	addEventListeners = (elem, events) => events.forEach(({type, callback, options = {}}) => elem.addEventListener(type, callback, options));

	//
	removeEventListeners = (elem, events) => events.forEach(({type, callback, options = {}}) => elem.removeEventListener(type, callback, options));
}

/**
 * 
 */
		
class H2mlSlide extends H2mlDomBase {
	
	/** Properties */

	//
	#dom = {
		elem: null,
		button: null
	};

	//
	#isCurrent = false;
	set isCurrent(isCurrent) {
		this.#isCurrent = isCurrent;
		this.setAttributes(this.#dom.elem, {ariaHidden: `${!this.#isCurrent}`});
		if(this.#dom.button) this.setAttributes(this.#dom.button, {ariaCurrent: `${this.#isCurrent}`});
	}
	get isCurrent() {
		return this.#isCurrent;
	}

	//
	#offsetX_static = 0;
	set offsetX_static(offset) {
		this.setStyleProperties(this.#dom.elem, {
			transition: 'transform 0.2s ease-in',
			transform: `translateX(${offset}px)`
		});
		this.#offsetX_static = offset;
		this.#offsetX_live = offset;
	}
	get offsetX_static() {
		return this.#offsetX_static;
	}

	//
	#offsetX_live = 0;
	set offsetX_live(offset) {
		this.setStyleProperties(this.#dom.elem, {
			transform: `translateX(${offset}px)`,
			transition: ''
		});
		this.#offsetX_live = offset;
	}
	get offsetX_live() {
		return this.#offsetX_live;
	}

	/** Methods */

	// Reset the slides state
	reset = () => {
		this.isCurrent = false;
		this.setStyleProperties(this.#dom.elem, {
			transition: '',
			transform: ''
		});
	};

	// Calculate the bounding area of the slide
	setBounds = () => this.bounds = {
		...(({offsetLeft, offsetTop}) => ({
			x: offsetLeft, 
			y: offsetTop
		}))(this.#dom.elem),
		...(({width, height}) => ({
			width: parseFloat(width), 
			height: parseFloat(height)
		}))(window.getComputedStyle(this.#dom.elem))
	};

	// Attach an event to the slide's button
	attachButtonEvent = (event) => this.#dom.button && this.#dom.button.addEventListener('click', (e) => (event(this, e)));

	/** Constructor */

	constructor(slideElem, buttonElem, buttonEvent) {
		super();
		this.#dom.elem = slideElem;
		this.#dom.button = buttonElem;
		if(buttonEvent) this.attachButtonEvent(buttonEvent);
		this.setBounds();
	}
}

/**
 * 
 */

class H2mlSlides extends Array {	

	/** Properties */

	// Default Iterator
	[Symbol.iterator] = function* () {
		for(let i = 0; i < this.length; i++) {
			yield this[i];
		}
	}

	// Generator
	#generator = function* (direction) {
		const atBoundary = (direction > 0) ? this.atLast() : this.atFirst();
		while(!atBoundary) {
			yield(this[this.indexOf(this.current) + direction]);
		}
	}

	// Iterate forwards
	#next = this.#generator(1);
	get next() {
		return this.#next.next().value;
	}

	// Iterate backwards
	#prev = this.#generator(-1);
	get prev() {
		return this.#prev.next().value;
	}

	// Handles setting and getting the current slide
	#current = null;
	set current(target) {
		const offset = 0 - target.bounds.x;
		this.forEach((slide) => {
			slide.offsetX_static = offset;
			slide.isCurrent = slide === target;
		});
		this.#current = target;
	}
	get current() {
		return this.#current;
	}

	// Returns the first slide
	get first() {
		return this[0];
	}

	// Returns the last slide
	get last() {
		return this[this.length - 1];
	}

	/** Methods */

	//
	atFirst = () => this.current === this.first;

	//
	atLast = () => this.current === this.last;

	/** Constructor */

	constructor(slideElems, slideButtons = Array.from(Array(slideElems.length)), buttonEvent = false) {
		super(...slideElems.map((slideElem, index) => new H2mlSlide(slideElem, slideButtons[index], buttonEvent)));
		this.current = this.first;
	}
}

/**
 *
 */

export class H2mlCarousel extends H2mlDomBase {

	/** Properties */

	//
	#elem = null;
	#slides = null;

	//
	#enabled = false;
	set enabled(value) {
		this.#enabled = (value ? this.#enableCarousel : this.#disableCarousel)();
	}

	//
	#touchData = {
		start: null,
		current: null,
		end: null
	}

	//
	#previousWidth = null;

	/** Methods */

	// 
	#touchStart = (e) => {
		if(e.changedTouches.length === 1) {
			this.#touchData.start = e.changedTouches[0].clientX;
		}
	}

	//
	#touchMove = (e) => {
		if(this.#touchData.start && e.changedTouches.length === 1) {
			//
			const slides = this.#slides;
			const current = slides.current;
			//
			const touchDelta = this.#touchData.start - e.changedTouches[0].clientX;
			const offset = current.offsetX_static - touchDelta;
			//
			slides.forEach((slide) => {
				slide.offsetX_live = offset;
			});
		}
	}

	//
	#touchEnd = (e) => {
		//
		const totalTouchDelta = this.#touchData.start - e.changedTouches[0].clientX;
		//
		const slides = this.#slides;
		//
		if(totalTouchDelta > 80 && !slides.atLast()) {
			slides.current = slides.next;
		} else if(totalTouchDelta < -80 && !slides.atFirst()) {
			slides.current = slides.prev;
		} else {
			slides.current = slides.current;
		}
		//
		this.#touchData.start = null;
	};

	//
	#disableCarousel = () => {
		// Reset the slides
		this.#slides.forEach((slide) => slide.reset());	
		// Remove the wrapper class
		this.#elem.classList.remove('carouselEnabled');
		// Remove Touch Events
		this.removeEventListeners(this.#elem, [{
			type: 'touchstart',
			callback: this.#touchStart,
			options: {passive: true}
		}, {
			type: 'touchmove',
			callback: this.#touchMove,
			options: {passive: true}
		}, {
			type: 'touchend',
			callback: this.#touchEnd,
			options: {passive: true}
		}]);
		return false;
	};

	//
	#enableCarousel = () => {	
		const elem = this.#elem;
		// Add the wrapper class
		elem.classList.add('carouselEnabled');
		//
		const slides = this.#slides ?? (this.#slides = new H2mlSlides(
			[...elem.querySelectorAll(this.slidesQuerySelector)],
			elem.querySelectorAll(this.buttonsQuerySelector),
			this.#buttonEvent
		));
		// Recalculate bounds if window resized
		const currentWidth = window.innerWidth;
		const previousWidth = this.#previousWidth;
		if(previousWidth !== currentWidth) {
			slides.forEach(slide => slide.setBounds());
			this.#previousWidth = currentWidth;
		}
		//
		slides.current = slides.current;
		// Add Touch Events
		this.addEventListeners(elem, [{
			type: 'touchstart',
			callback: this.#touchStart,
			options: {passive: true}
		}, {
			type: 'touchmove',
			callback: this.#touchMove,
			options: {passive: true}
		}, {
			type: 'touchend',
			callback: this.#touchEnd,
			options: {passive: true}
		}]);
		// 
		return true;
	};

	//
	#buttonEvent = (slide, e) => this.#slides.current = slide;

	//
	#matchMedia = (e) => window.matchMedia(this.mediaQuery).matches;

	//
	#init = () => {
		// 
		const elem = this.#elem;
		//
		this.#previousWidth = window.innerWidth;
		//
		this.enabled = this.#matchMedia();
		window.addEventListener('resize', () => this.enabled = this.#matchMedia());
	}

	/** Constructor */

	constructor(rootElem, slidesQuerySelector, buttonsQuerySelector, mediaQuery = '(min-width: 0px)') {
		super();
		//
		this.#elem = rootElem;
		this.slidesQuerySelector = slidesQuerySelector;
		this.buttonsQuerySelector = buttonsQuerySelector;
		this.mediaQuery = mediaQuery;
		//
		this.#init();
	}
}