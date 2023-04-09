/**
 * The Code
 */

import {sprintf, __} from '@wordpress/i18n';

import { H2mlCarousel } from './view_dependencies/H2mlCarousel';

document.addEventListener('DOMContentLoaded', () => document.querySelectorAll('.h2mlGalleryCarousel').forEach((carouselElem) => {
	const slides = [...carouselElem.querySelectorAll('.wp-block-image')];
	carouselElem.querySelector('.carouselNav').append(...slides.map((_, index) => Object.assign(document.createElement('button'), {
		ariaLabel: sprintf(__('Go to slide %d of %d'), index + 1, slides.length)
	})));
	//
	new H2mlCarousel(carouselElem, '.wp-block-image', '.carouselNav > button');
}));

