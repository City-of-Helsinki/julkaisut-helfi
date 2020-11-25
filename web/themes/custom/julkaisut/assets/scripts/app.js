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
  attach(context, settings) {
    if (matchMedia('(min-width: 1024px)').matches) {
      this.desktopMenu(context);
    } else {
      this.mobileMenu(context);
    }

    this.bookMenu(context);
    this.responsiveTables(context);
    this.clipboard(context.querySelectorAll('[data-clipboard-text]'));
    // By having the anchor point to an unexisting element it will
    // automatically scroll to the top
    this.scrollToTop(context.querySelectorAll('[href="#top"]'));

    if (window.jQuery && settings.views && settings.views.ajaxViews) {
      window.jQuery(context).on('views_infinite_scroll.new_content', this.focusNewContent);
    }
  },

  focusNewContent(e, newRows) {
    // Exit if there's no focused element
    if (!document.activeElement || !document.hasFocus()) {
      return;
    }

    const pagerWrapper = e.target.nextElementSibling;
    if (!pagerWrapper) {
      return;
    }

    // Exit unless the pager was selected
    const pager = pagerWrapper.querySelector('a');
    if (pager !== document.activeElement) {
      return;
    }

    // Move focus to the first new element.
    setTimeout(() => {
      const firstLink = newRows.querySelector('a');

      if (firstLink) {
        firstLink.focus();
      }
    });
  },

  scrollToTop(links) {
    const focusLogo = () => document.querySelector('[rel="home"]').focus();
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', focusLogo);
    }
  },

  bookMenu(context) {
    const submenuTriggers = context.querySelectorAll('.book-tree__submenu-trigger, .book-tree__trigger');
    for (let i = 0; i < submenuTriggers.length; i++) {
      const trigger = submenuTriggers[i];
      toggler(trigger);
    }
  },

  responsiveTables(context) {
    // Tablesaw.init() method has an issue when domcontentloaded fires while readystate is
    // still interactive so we handle it ourselves.
    if (document.readyState !== 'loading') {
      Tablesaw._init(context);
      return;
    }

    document.addEventListener('DOMContentLoaded', () => {
      Tablesaw._init(context);
    });
  },

  desktopMenu(context) {
    const navigation = context.querySelector('.site-navigation');
    const trigger = context.querySelector('.site-languages__button');

    if (navigation) {
      menu(navigation);
    }

    if (trigger) {
      button(trigger);
      toggler(trigger);
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
