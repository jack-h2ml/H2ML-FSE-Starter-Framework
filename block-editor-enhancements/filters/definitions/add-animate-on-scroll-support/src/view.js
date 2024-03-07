/**
 * The Code
 */

import { H2mlAnimateOnScroll } from './view_dependencies/AnimateOnScroll';

document.addEventListener('DOMContentLoaded', () => {
	H2mlAnimateOnScroll.track('[data-animate]');
});

document.addEventListener('ready', () => {
	H2mlAnimateOnScroll.track('[data-animate]');
});
