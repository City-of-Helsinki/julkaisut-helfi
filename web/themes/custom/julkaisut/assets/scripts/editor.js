import domReady from '@wordpress/dom-ready';
import {
  unregisterBlockStyle,
  registerBlockStyle,
} from '@wordpress/blocks';

domReady(() => {
  registerBlockStyle('core/image', {
    name: 'koros-basic-top',
    label: 'Basic Koros Top',
  });
});
