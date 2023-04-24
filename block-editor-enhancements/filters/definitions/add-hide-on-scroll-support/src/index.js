/**
 * WordPress Dependencies
 */

import { addFilter } from '@wordpress/hooks';

import {
	store as blockEditorStore
} from '@wordpress/block-editor';

import {
	useSelect,
	dispatch
} from '@wordpress/data';

import { __ } from '@wordpress/i18n';

import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Local Dependencies
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

const elemWillHideClass = 'animate__animated';

const optionalHideOnScrollValuesDefaults = {
	breakpoint: '',
	animateInDuration: '500ms',
	animateOutDuration: '500ms',
}

/** 
 * The Filter
 */

addFilter(
	'blocks.registerBlockType',
	'h2ml/add-hide-on-scroll-attribute',
	(settings) => {
		if(settings?.attributes) {
			return {
				...settings,
				attributes: {
					...settings.attributes,
					h2mlHideOnScroll: {
						type: 'object',
						default: {
							animateIn: '',
							animateOut: '',
							customClasses: [],
							triggerThreshold: 100,
							showOnScrollUp: false,
							...optionalHideOnScrollValuesDefaults
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
	'h2ml/add-hide-on-scroll-insepctor-controls-edit',
	createHigherOrderComponent(BlockEdit => props => {
		const {
			attributes: {
				h2mlHideOnScroll: h2mlHideOnScrollAttributes,
			},
			clientId,
			setAttributes
		} = props;
		//
		const {getBlockParents, getBlockAttributes} = useSelect(blockEditorStore);
		const hasFixedPositionParent = getBlockParents(clientId).find(parentClientId => !!getBlockAttributes(parentClientId).h2mlPositioning?.type);
		//
		if(hasFixedPositionParent) {
			return (<>
				<FilterInspectorControls
					existingAttributes={h2mlHideOnScrollAttributes}
					optionalAttributesDefaults={optionalHideOnScrollValuesDefaults}	
					animationClassNames={AnimateDotCssDefinitions()}
					setAttributes={setAttributes}
				/>
				<BlockEdit {...props}/>
			</>);
		}
		return <BlockEdit {...props} />;
	}, 'addHideOnScrollInspectorControlsEdit')
);

/**
 * 
 */

addFilter(
	'blocks.getSaveContent.extraProps',
	'h2ml/add-hide-on-scroll-styles-save',
	(props, type, attributes) => {
		//
		const {className: oldClassName} = props;
		const {
			h2mlHideOnScroll: {
				animateIn,
				animateOut,
				customClasses,
				triggerThreshold,
				showOnScrollUp,
				breakpoint,
				animateInDuration,
				animateOutDuration
			} = {}
		} = attributes;
		//
		if (animateIn || animateOut || customClasses?.length) {
			//
			const className = (oldClassName ? oldClassName.split(' ') : []).reduce((res, cur) => {
				return (cur !== elemWillHideClass) ? `${res} ${cur}` : `${res}`
			}, (elemWillHideClass));
			//
			const encode = (html) => {
				let doc = new DOMParser().parseFromString(html, 'text/html');
				return encodeURIComponent(doc.body.textContent) || "";
			}
			//
			return {
				...props,
				className,
				'data-hide-on-scroll': '',
				...(animateIn && {'data-hide-on-scroll-animate-in': animateIn}),
				...(animateOut && {'data-hide-on-scroll-animate-out': animateOut}),
				...(customClasses.length && {'data-hide-on-scroll-custom-classes': encode(customClasses.join(' '))}),
				...(triggerThreshold && {'data-hide-on-scroll-threshold': triggerThreshold}),
				...(showOnScrollUp && {'data-hide-on-scroll-show-on-scroll-up': showOnScrollUp}),
				...(breakpoint && {'data-hide-on-scroll-breakpoint': encode(breakpoint)}),
				...(animateInDuration && {'data-hide-on-scroll-animate-in-duration': animateInDuration}),
				...(animateOutDuration && {'data-hide-on-scroll-animate-out-duration': animateOutDuration})
			};
		}
		return props;
	}
);

