/**
 * WordPress Dependencies
 */

import { addFilter } from '@wordpress/hooks';

import {
	useSelect,
	dispatch
} from '@wordpress/data';

import { __ } from '@wordpress/i18n';

import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Internal Dependencies
 */

import './index.scss';

import {
	store as h2mlFilterStore
} from './../../../store';

import {
	getAnimateCssDefinitions
} from './../../../common/getAnimateCssDefinitions';

import {
	FilterInspectorControls
} from './editor_dependencies/local_components/FilterInspectorControls';

/**
 * External Dependencies
 */

import 'animate.css/animate.min.css';

/*
 * Global
 */

const animateIsAnimatedClass = 'animate__animated';

const defaultAnimateOnScrollValues = {
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
		const {
			h2mlAnimationOnScroll = false
		} = settings.attributes;
		if(h2mlAnimationOnScroll) {
			console.log('Testing');
		}
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
						...defaultAnimateOnScrollValues
					}
				}
			}
		}
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
		const {hasGlobal, getGlobal} = useSelect(h2mlFilterStore);
		const {setGlobal} = dispatch(h2mlFilterStore);
		if(!hasGlobal('ParsedAnimateDotCSS')) setGlobal('ParsedAnimateDotCSS', getAnimateCssDefinitions());
		//
		if (animateIn !== undefined || animateOut !== undefined) {
			return (<>
				<FilterInspectorControls
					existingAttributes={h2mlAnimateOnScrollAttributes}
					defaultAttributes={defaultAnimateOnScrollValues}	
					animationClassNames={getGlobal('ParsedAnimateDotCSS')}
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
				animateInDuration,
				animateOutDuration,
				animateThreshold,
				animateDirection,
			} = {}
		} = attributes;
		//
		if (animateIn || animateOut) {
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
				...(animateInDuration && {'data-animate-in-duration': animateInDuration}),
				...(animateOutDuration && {'data-animate-out-duration': animateOutDuration}),
				...(animateDirection && {'data-animate-direction': animateDirection}),
				...(animateThreshold && {'data-animate-Threshold': animateThreshold}),
			};
		}
		return props;
	}
);


