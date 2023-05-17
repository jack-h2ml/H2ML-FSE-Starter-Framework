/**
 * WordPress Dependencies
 */

import { addFilter } from '@wordpress/hooks';

import { __ } from '@wordpress/i18n';

import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Internal Dependencies
 */

import './index.scss';

import {
	AnimateDotCssDefinitions
} from '../../../common/AnimateDotCssDefinitions';

import {
	FilterInspectorControls
} from './editor_dependencies/local_components/FilterInspectorControls';

/*
 * Global
 */

const animateIsAnimatedClass = 'animate__animated';

const optionalAnimateOnScrollValuesDefaults = {
	animateInDuration: '500ms',
	animateOutDuration: '500ms',
	animateThreshold: 0.3,
	animateDirection: 'forwards'
}

/** 
 * The Filter
 */

addFilter(
	'blocks.registerBlockType',
	'h2ml/add-animate-on-scroll-attribute',
	(settings) => {
		//
		if(settings?.attributes) {
			//
			const {
				h2mlAnimationOnScroll = false
			} = settings.attributes;
			//
			if(!settings.name?.includes('gravityforms')) {
				//
				return {
					...settings,
					attributes: {
						...settings.attributes,
						h2mlAnimateOnScroll: {
							type: 'object',
							default: {
								animateIn: '',
								animateOut: '',
								customClasses: [],
								...optionalAnimateOnScrollValuesDefaults
							}
						}
					}
				}
			}
		}	
		return settings;
	}
);

/*
 * 
 */

addFilter(
	'editor.BlockEdit',
	'h2ml/add-animate-on-scroll-insepctor-controls-edit',
	createHigherOrderComponent(BlockEdit => props => {
		const {
			attributes: {
				h2mlAnimateOnScroll: h2mlAnimateOnScrollAttributes,
				h2mlAnimateOnScroll: {
					animateIn,
					animateOut,
				} = {}
			},
			setAttributes
		} = props;
		//
		if (animateIn !== undefined || animateOut !== undefined) {
			return (<>
				<FilterInspectorControls
					existingAttributes={h2mlAnimateOnScrollAttributes}
					optionalAttributesDefaults={optionalAnimateOnScrollValuesDefaults}	
					animationClassNames={AnimateDotCssDefinitions()}
					setAttributes={setAttributes}
				/>
				<BlockEdit {...props} />
			</>);
		}
		return <BlockEdit {...props} />;
	}, 'addAnimateOnScrollInspectorControlsEdit')
);

/**
 * 
 */

addFilter(
	'blocks.getSaveContent.extraProps',
	'h2ml/add-animate-on-scroll-styles-save',
	(props, type, attributes) => {
		//
		const {className: oldClassName} = props;
		const {
			h2mlAnimateOnScroll: {
				animateIn,
				animateOut,
				customClasses,
				animateInDuration,
				animateOutDuration,
				animateThreshold,
				animateDirection
			} = {}
		} = attributes;
		//
		if (animateIn || animateOut || customClasses?.length) {
			//
			const className = (oldClassName ? oldClassName.split(' ') : []).reduce((res, cur) => {
				return (cur !== animateIsAnimatedClass) ? `${res} ${cur}` : `${res}`
			}, (animateIsAnimatedClass));
			//
			return {
				...props,
				className,
				'data-animate': '',
				...(animateIn && {'data-animate-in': animateIn}),
				...(animateOut && {'data-animate-out': animateOut}),
				...(customClasses?.length && {'data-hide-on-scroll-custom-classes': encode(customClasses.join(' '))}),
				...(animateInDuration && {'data-animate-in-duration': animateInDuration}),
				...(animateOutDuration && {'data-animate-out-duration': animateOutDuration}),
				...(animateDirection && {'data-animate-direction': animateDirection}),
				...(animateThreshold && {'data-animate-Threshold': animateThreshold}),
				...(animateThreshold && {'data-animate-Threshold': animateThreshold}),
			};
		}
		return props;
	}
);


