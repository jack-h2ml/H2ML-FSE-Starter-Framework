/**
 * Testing
 */

import "animate.css/animate.min.css";

const scrollObserver = class {
	//
	#observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			window.requestIdleCallback(() => {
				if (entry.target.dataset.animateOnce) {
					if (!entry.target.classList.has(entry.target.dataset.animatein)) {
						entry.target.classList.add(entry.target.dataset.animatein)
						option.onshow ? option.onshow(entry) : false
						showCount++
					}
				} else {
					if (entry.isIntersecting) {
						if(entry.target.dataset.animatein) {
							entry.target.classList.remove(entry.target.dataset.animateout);
							entry.target.classList.add(entry.target.dataset.animatein);
						}
					}
					else {
						if(entry.target.dataset.animatein) {
							entry.target.classList.remove(entry.target.dataset.animatein);
							entry.target.classList.add(entry.target.dataset.animateout);
						}
					}
				}
			});
		});
	}, {
		threshold: 0.25
	});
	//
	#observe = (selector) => {
		document.querySelectorAll(selector).forEach(elem => this.#observer.observe(elem))
	}
	//
	constructor(selector, option) {
		if(Array.isArray(selector)) {
			selector.forEach(this.#observe)
		} else {
			this.#observe(selector)
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new scrollObserver('[data-animate]');
});
