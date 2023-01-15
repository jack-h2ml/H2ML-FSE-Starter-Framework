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
        const {category} = settings;
        if(allowedFillChildCategories.includes(category)) {
            return {
                ...settings, 
                attributes: {
                    ...settings.attributes, 
                    fillGridArea: {
                        type: 'boolean',
                        default: false
                    },
                    canFillGridArea: {
                        type: 'boolean',
                        default: false
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
    'h2ml/add-canFillGridArea-class-blockEdit',
    createHigherOrderComponent(BlockEdit => ownProps => {
        const {
            attributes: {
                canFillGridArea,
                fillGridArea
            }, 
            setAttributes
        } = ownProps;
        //
        if(canFillGridArea) {
            return (<>
                <BlockControls>
                    <ToolbarGroup>
                        <ToolbarButton
                            icon={resizeCornerNE}
                            label={__("Cover Grid Area", 'h2ml')}
                            isPressed={fillGridArea}
                            onClick={() => {
                                setAttributes({fillGridArea: !fillGridArea});
                            }}
                        />
                    </ToolbarGroup>
                </BlockControls>
                <BlockEdit {...ownProps}/>
            </>);
        }
        return <BlockEdit {...ownProps}/>;
    }, 'showCanFillGridAreaToolbarButton' )
);

/**
 * 
 */

addFilter(
    'editor.BlockListBlock',
    'h2ml/add-fillGridArea-class-edit',
    createHigherOrderComponent(BlockListBlock => props => {
        const {attributes: {
            canFillGridArea,
            fillGridArea
        }} = props;
        const className = (canFillGridArea && fillGridArea) ? fillGridAreaClass : '';
        return <BlockListBlock {...props} className={className} />;
    }, 'withCustomAttributeClass' )
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
        const {canFillGridArea, fillGridArea} = attributes;
        //
        const className = (oldClassName ? oldClassName.split(' ') : []).reduce((res, cur) => {
            return (cur !== fillGridAreaClass) ? `${res} ${cur}` : `${res}`
        }, (canFillGridArea && fillGridArea) ? fillGridAreaClass : '');
        //
        return {
            ...props,
            className
        };
    }
);





