import debounce from 'lodash-es/debounce';
import ClipboardJS from 'clipboard';
import { Stack, Table } from 'tablesaw/dist/stackonly/tablesaw.stackonly';

import { menu, button } from './components/dropdown';
import { toggle, toggler } from './components/toggler';

new ClipboardJS('[data-clipboard-text]');

if (matchMedia('(min-width: 1024px)').matches) {
  menu(document.querySelector('.site-navigation'));
  button(document.querySelector('.site-languages__button'));
} else {
  toggler(document.querySelector('.site-hamburger-button'));

  const submenuTriggers = document.querySelectorAll('.site-navigation__submenu-trigger');
  for (let i = 0; i < submenuTriggers.length; i++) {
    const trigger = submenuTriggers[i];
    trigger.addEventListener('click', (e) => {
      const item = e.target.closest('[aria-haspopup]');
      toggle(item);
      e.preventDefault();
    })
  }
}


const tables = document.querySelectorAll('.wp-block-table table');
for (let i = 0; i < tables.length; i++) {
  const stack = new Stack(tables[i], new Table(tables[i]));
  stack.init();
}

// Set a CSS variable with the real height of the viewport
const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
};
window.addEventListener('resize', debounce(appHeight, 150));
appHeight();
