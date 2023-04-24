/**
 * WordPress dependencies
 */

import { addFilter } from '@wordpress/hooks';

import { BlockControls } from '@wordpress/block-editor';

import {
    ToolbarGroup,
    ToolbarButton
} from '@wordpress/components';

import {__} from '@wordpress/i18n';

import { resizeCornerNE } from '@wordpress/icons';

import { createHigherOrderComponent } from '@wordpress/compose';

/*
 * Global
 */

const fillGridAreaClass = 'fillGridArea';
const allowedFillChildCategories = ['media', 'embed'];

/*
 * The Filter
 */

addFilter(
    'blocks.registerBlockType',
    'h2ml/add-canFillGridArea-attribute',
    (settings) => {
		//
		if(settings?.attributes) {
			const {category} = settings;
			if(allowedFillChildCategories.includes(category)) {
				return {
					...settings, 
					attributes: {
						...settings.attributes, 
						h2mlFillGridArea: {
							type: 'boolean',
							default: false
						},
						h2mlCanFillGridArea: {
							type: 'boolean',
							default: false
						} 
					}
				}
			}
		}
        return settings;
    }
);

/**
 * 
 */

addFilter(
    'editor.BlockListBlock',
    'h2ml/add-fillGridArea-class-edit',
    createHigherOrderComponent(BlockListBlock => props => {
		const {attributes: {
            h2mlCanFillGridArea,
            h2mlFillGridArea
        }} = props;
		if(h2mlCanFillGridArea) {
			const className = (h2mlCanFillGridArea && h2mlFillGridArea) ? fillGridAreaClass : '';
        	return <BlockListBlock {...props} className={className} />;	
		}
        return <BlockListBlock {...props} />;
    }, 'withCustomAttributeClass' )
);

/*
 * 
 */

addFilter(
    'editor.BlockEdit',
    'h2ml/add-canFillGridArea-class-blockEdit',
    createHigherOrderComponent(BlockEdit => props => {
        const {
            attributes: {
                h2mlCanFillGridArea,
                h2mlFillGridArea
            }, 
            setAttributes
        } = props;
        //
        if(h2mlCanFillGridArea) {
            return (<>
                <BlockControls>
                    <ToolbarGroup>
                        <ToolbarButton
                            icon={resizeCornerNE}
                            label={__("Cover Grid Area", 'h2ml')}
                            isPressed={h2mlFillGridArea}
                            onClick={() => {
                                setAttributes({h2mlFillGridArea: !h2mlFillGridArea});
                            }}
                        />
                    </ToolbarGroup>
                </BlockControls>
                <BlockEdit {...props}/>
            </>);
        }
        return <BlockEdit {...props}/>;
    }, 'showCanFillGridAreaToolbarButton' )
);

/**
 * 
 */

addFilter(
    'blocks.getSaveContent.extraProps',
    'h2ml/add-fillGridArea-class-save',
    (props, type, attributes) => {
        //
        const {className: oldClassName} = props;
        const {h2mlCanFillGridArea, h2mlFillGridArea} = attributes;
        //
        const className = (oldClassName ? oldClassName.split(' ') : []).reduce((res, cur) => {
            return (cur !== fillGridAreaClass) ? `${res} ${cur}` : `${res}`
        }, (h2mlCanFillGridArea && h2mlFillGridArea) ? fillGridAreaClass : '');
        //
        return {
            ...props,
            className
        };
    }
);





