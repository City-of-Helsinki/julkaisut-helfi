import domReady from '@wordpress/dom-ready';
import {
  unregisterBlockStyle,
  registerBlockStyle,
} from '@wordpress/blocks';
import { createHigherOrderComponent} from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';

domReady(() => {
  registerBlockStyle('core/image', {
    name: 'koros-basic-top',
    label: 'Basic Koros Top',
  });
});

addFilter(
  'editor.BlockListBlock',
  'julkaisut/fix-drupal-media-attributes',
  createHigherOrderComponent((BlockListBlock) => {
    return (props) => {
      if (props.name === 'core/image') {
        props.attributes.mediaAttrs = {};

        if (typeof props.attributes.caption === 'object') {
          props.attributes.caption = props.attributes.caption.rendered;
        }
      }
      return <BlockListBlock { ...props } />;
    }
  })
);
