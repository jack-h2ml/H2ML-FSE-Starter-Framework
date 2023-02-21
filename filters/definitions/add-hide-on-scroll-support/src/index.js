/**
 * WordPress Dependencies
 */

import { addFilter } from '@wordpress/hooks';

import {
	InspectorControls,
	store as blockEditorStore
} from '@wordpress/block-editor';

import {
	useSelect,
	dispatch
} from '@wordpress/data';

import {
	Panel,
	PanelBody,
	SelectControl,
	TextControl,
	ExternalLink,
	Notice,
	__experimentalVStack as VStack,
	__experimentalText as Text,
	__experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Internal Dependencies
 */

import './index.scss';

import {
	HideAnimateInHelpText,
	HideAnimateOutHelpText,
	HideTriggerThresholdHelpText,
	HideAnimateInDurationHelpText,
	HideAnimateOutDurationHelpText,
} from './editor_dependencies/local_components/HelpText';

import {
	store as h2mlFilterStore
} from './../../../store';

import {
	getAnimateCssDefinitions
} from './../../../common/getAnimateCssDefinitions';

/**
 * External Dependencies
 */

import 'animate.css/animate.min.css';
import { FilterInspectorControls } from './editor_dependencies/local_components/FilterInspectorControls';

/*
 * Global
 */

const elemWillHideClass = 'animate__animated';

const defaultHideOnScrollValues = {
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
		return {
			...settings,
			attributes: {
				...settings.attributes,
				h2mlHideOnScroll: {
					type: 'object',
					default: {
						animateIn: '',
						animateOut: '',
						animateThreshold: 100,
						...defaultHideOnScrollValues
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

			//
			const {hasGlobal, getGlobal} = useSelect(h2mlFilterStore);
			const {setGlobal} = dispatch(h2mlFilterStore);
			if(!hasGlobal('ParsedAnimateDotCSS')) setGlobal('ParsedAnimateDotCSS', getAnimateCssDefinitions());
			const animationClassNames = getGlobal('ParsedAnimateDotCSS');
			//

			return (<>
				<FilterInspectorControls
					existingAttributes={h2mlHideOnScrollAttributes}
					defaultAttributes={defaultHideOnScrollValues}	
					animationClassNames={getGlobal('ParsedAnimateDotCSS')}
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
 *

addFilter(
	'blocks.getSaveContent.extraProps',
	'h2ml/add-positioning-styles-save',
	(props, type, attributes) => {
		//
		const {className: oldClassName} = props;
		const {
			h2mlAnimationOnScroll: {
				animateIn,
				animateOut,
				animateInDuration,
				animateOutDuration,
				animateThreshold,
				animateDirection
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
*/

