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

import { column, settings } from '@wordpress/icons';

import { createHigherOrderComponent } from '@wordpress/compose';

import { cloneElement } from '@wordpress/element';


/*
 * Global
 */

const h2mlCarouselClass = 'h2mlGalleryCarousel';

/*
 * The Filter
 */

addFilter(
    'blocks.registerBlockType',
    'h2ml/add-h2mlCarousel-attribute',
    (settings) => {
		if(settings.name === 'core/gallery') {
			return {
                ...settings, 
                attributes: {
                    ...settings.attributes, 
                    h2mlCarousel: {
                        type: 'boolean',
                        default: false
                    }
                }
            }
		}
		//
		return settings;
    }
);

/**
 * 
 */

addFilter(
    'editor.BlockListBlock',
    'h2ml/add-h2mlCarousel-class-edit',
    createHigherOrderComponent(BlockListBlock => props => {
		const {attributes: {
            h2mlCarousel
        }} = props;
		if(h2mlCarousel) {
        	return <BlockListBlock {...props} className={h2mlCarouselClass} />;	
		}
        return <BlockListBlock {...props} />;
    }, 'withCustomAttributeClass' )
);

/*
 * 
 */

addFilter(
    'editor.BlockEdit',
    'h2ml/add-h2mlCarousel-toolbar-button',
    createHigherOrderComponent(BlockEdit => props => {
        const {
			name,
            attributes: {
                h2mlCarousel
            }, 
            setAttributes
        } = props;
        //
        if(name === 'core/gallery') {
            return (<>
                <BlockControls>
                    <ToolbarGroup>
                        <ToolbarButton
                            icon={column}
                            label={__("Carousel Mode", 'h2ml')}
                            isPressed={h2mlCarousel}
                            onClick={() => {
                                setAttributes({h2mlCarousel: !h2mlCarousel});
                            }}
                        />
                    </ToolbarGroup>
                </BlockControls>
                <BlockEdit {...props}/>
            </>);
        }
        return <BlockEdit {...props}/>;
    }, 'showH2mlCarouselToolbarButton' )
);

/**
 * 
 */

wp.hooks.addFilter(
    'blocks.getSaveElement',
    'h2ml/add-h2mlCarousel-add-buttons',
    (element, settings, attributes) => {
		if(settings.name === 'core/gallery' && attributes.h2mlCarousel) {
			return (
				<div className='h2mlGalleryCarousel'> 
					{element}
					<div className='carouselNav'>
					</div>
				</div>
			);
		}
		return element;
	}
);