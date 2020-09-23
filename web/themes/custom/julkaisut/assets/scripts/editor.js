import domReady from '@wordpress/dom-ready';
import { select, subscribe, dispatch } from '@wordpress/data';
import {
  unregisterBlockStyle,
  registerBlockStyle,
  unregisterBlockType,
  synchronizeBlocksWithTemplate,
} from '@wordpress/blocks';
import { createHigherOrderComponent} from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';

let drupalSettings = window.drupalSettings;

domReady(() => {
  registerBlockStyle('core/image', {
    name: 'koros-basic-top',
    label: 'Basic Koros Top',
  });

  registerBlockStyle('core/paragraph', {
    name: 'excerpt',
    label: 'Excerpt',
  });

  registerBlockStyle('core/table', {
    name: 'numeric-with-labels',
    label: 'Numeric (with label on left)',
  });

  registerBlockStyle('core/table', {
    name: 'numeric',
    label: 'Numeric (all cells)',
  });

});

drupalSettings.gutenberg._listeners.init.push(() => {
  unregisterBlockStyle('core/quote', 'large');

  const unsubscribe = subscribe(() => {
    if (drupalSettings.path.currentPath !== 'node/add/article') {
      unsubscribe();
      return;
    }

    const { getBlocks } = select('core/block-editor');
    const { resetBlocks } = dispatch('core/block-editor');
    let blocks = getBlocks();

    if (Array.isArray(blocks)) {
      unsubscribe();

      setTimeout(() => {
        blocks = getBlocks();
        if (blocks.length === 0) {
          resetBlocks(synchronizeBlocksWithTemplate(blocks, [
            ["core/paragraph", {"placeholder": "Write an introduction", "className": "is-style-excerpt"}],
            ["core/paragraph", {"placeholder": "Add text or type / to add blocks"}]
          ]));
        }
      }, 500);
    }
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
