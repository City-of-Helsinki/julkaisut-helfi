import debounce from 'lodash-es/debounce';
import ClipboardJS from 'clipboard';
import Tablesaw from 'tablesaw/dist/tablesaw';

import { menu, button } from './components/dropdown';
import { toggle, toggler } from './components/toggler';

// Set a CSS variable with the real height of the viewport
const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
};
window.addEventListener('resize', debounce(appHeight, 150));
appHeight();


Drupal.behaviors.julkaisutTheme = {
  attach(context) {
    if (matchMedia('(min-width: 1024px)').matches) {
      this.desktopMenu(context);
    } else {
      this.mobileMenu(context);
    }

    this.bookMenu(context);

    Tablesaw.init(context);
    this.clipboard(context.querySelectorAll('[data-clipboard-text]'));
  },

  bookMenu(context) {
    const submenuTriggers = context.querySelectorAll('.book-tree__submenu-trigger, .book-tree__trigger');
    for (let i = 0; i < submenuTriggers.length; i++) {
      const trigger = submenuTriggers[i];
      toggler(trigger);
    }
  },

  desktopMenu(context) {
    const navigation = context.querySelector('.site-navigation');
    const trigger = context.querySelector('.site-languages__button');

    if (navigation) {
      menu(navigation);
    }

    if (trigger) {
      button(trigger);
    }
  },

  mobileMenu(context) {
    const trigger = context.querySelector('.site-hamburger-button');
    if (trigger) {
      toggler(trigger);
    }

    const submenuTriggers = context.querySelectorAll('.site-navigation__submenu-trigger');
    for (let i = 0; i < submenuTriggers.length; i++) {
      const trigger = submenuTriggers[i];
      trigger.addEventListener('click', (e) => {
        const item = e.target.closest('[aria-haspopup]');
        toggle(item);
        e.preventDefault();
      })
    }
  },

  clipboard(elements) {
    if (!elements.length) {
      return;
    }
    new ClipboardJS(elements);
  }
};
