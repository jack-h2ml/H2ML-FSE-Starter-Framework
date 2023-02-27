/**
 * Wordpress Dependencies
 */

import {
	useSelect,
	dispatch
} from '@wordpress/data';

/**
 * Internal Dependencies
 */

import {
	store as h2mlFilterStore
} from '../../store';

/**
 * External Dependencies
 */

import 'animate.css/animate.min.css';

/**
 * Parse the animate.css styles
 */

const parseAnimateCssDefinitions = () => [...document.styleSheets].reduce((res, styleSheet) => {
	if(styleSheet.href && styleSheet.href.includes('add-animate-on-scroll-support')) {
		console.debug('Generating Animate.css Definitions')
		return [...styleSheet.cssRules].reduce((res, rule) => ({
			...res,
			...((
				Object.getPrototypeOf(rule).constructor === CSSStyleRule
				&& rule.selectorText.includes('.animate__')
				&& !rule.selectorText.includes('.animate__animated')
				&& (rule.selectorText.includes('In') || rule.selectorText.includes('Out')) 
				&& rule.selectorText !== '.animate__jackInTheBox'
			) && (rule.selectorText.includes('In') 
				? {animateIn: [
					...res.animateIn,
					{
						label: [...rule.style.animationName.replace(/([A-Z])/g, " $1")].reduce((res, cur, ind) => (
							`${res}${!ind ? cur.toUpperCase() : cur}`
						), ''),
						value: rule.selectorText.replace(/[.,\s]/g, '')
					}
				]} : {animateOut: [
					...res.animateOut,
					{
						label: [...rule.style.animationName.replace(/([A-Z])/g, " $1")].reduce((res, cur, ind) => (
							`${res}${!ind ? cur.toUpperCase() : cur}`
						), ''),
						value: rule.selectorText.replace(/[.,\s]/g, '')
					}
				]})
			)
		}), {
			animateIn: [{
				label: 'None',
				value: ''
			}],
			animateOut: [{
				label: 'None',
				value: ''
			}]
		});
	} else {
		return res;
	}
}, []);

/**
 * Store the 
 */

export const AnimateDotCssDefinitions = () => {
	const {hasGlobal, getGlobal} = useSelect(h2mlFilterStore);
	const {setGlobal} = dispatch(h2mlFilterStore);
	if(!hasGlobal('ParsedAnimateDotCSS')) {
		console.debug('Setting Animate.css Definitions');
		setGlobal('ParsedAnimateDotCSS', parseAnimateCssDefinitions());
	};
	return getGlobal('ParsedAnimateDotCSS');
}