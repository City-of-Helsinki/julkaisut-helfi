import debounce from 'lodash-es/debounce';
import ClipboardJS from 'clipboard';
import Tablesaw from 'tablesaw/dist/tablesaw';
import { createFocusTrap } from 'focus-trap';

import { menu, button } from './components/dropdown';
import { toggle, toggler } from './components/toggler';

// Set a CSS variable with the real height of the viewport
const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
};
window.addEventListener('resize', debounce(appHeight, 150));
appHeight();

window.euCookieComplianceLoadScripts = () => {
  const scripts = document.querySelectorAll('script[data-consent]');
  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    script.type = 'text/javascript';
    script.replaceWith(script);
  }
};

window.TablesawConfig = {
  i18n: {
    modeStack: Drupal.t('Stack'),
    modeSwipe: Drupal.t('Swipe'),
    modeToggle: Drupal.t('Toggle'),
    modeSwitchColumnsAbbreviated: Drupal.t('Cols'),
    modeSwitchColumns: Drupal.t('Columns'),
    columnToggleButton: Drupal.t('Columns'),
    columnToggleError: Drupal.t('No eligible columns.'),
    sort: Drupal.t('Sort'),
    swipePreviousColumn: Drupal.t('Previous column'),
    swipeNextColumn: Drupal.t('Next column')
  }
};

Drupal.behaviors.julkaisutTheme = {
  attach(context, settings) {
    if (matchMedia('(min-width: 1024px)').matches) {
      this.desktopMenu(context);
    } else {
      this.mobileMenu(context);
    }

    if (window.jQuery?.ui?.autocomplete?.prototype?.options?.messages) {
      this.translateJqueryUiMessages();
    }

    this.cookieConsent(context);
    this.bookMenu(context);
    this.responsiveTables(context);
    this.clipboard(context.querySelectorAll('[data-clipboard-text]'));
    // By having the anchor point to an unexisting element it will
    // automatically scroll to the top
    this.scrollToTop(context.querySelectorAll('[href="#top"]'));
    this.markExternalLinks(context.querySelectorAll('a[target="_blank"]'));

    if (window.jQuery && settings.views && settings.views.ajaxViews) {
      window.jQuery(context).on('views_infinite_scroll.new_content', this.focusNewContent);
    }
  },

  translateJqueryUiMessages() {
    jQuery.ui.autocomplete.prototype.options.messages = {
      ...jQuery.ui.autocomplete.prototype.options.messages,

      noResults: Drupal.t('No search results.'),
      results: (count) => {
        if (count > 0) {
          return Drupal.t('@count results are available, use up and down arrow keys to navigate.', {'@count': count});
        }
        return Drupal.t('@count result is available, use up and down arrow keys to navigate.', {'@count': count});
      },
    };
  },

  markExternalLinks(links) {
    const icon = document.createElement('i');
    icon.classList.add(
      'hds-icon', 'hds-icon--link-external', 'external-link-icon'
    );
    icon.setAttribute('aria-hidden', 'true');
    icon.setAttribute('title', Drupal.t('Open in new window'));

    const srLabel = document.createElement('span');
    srLabel.classList.add('visually-hidden');
    srLabel.textContent = Drupal.t('Open in new window');

    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      link.appendChild(icon.cloneNode(true));
      link.appendChild(srLabel.cloneNode(true));
      link.classList.add('is-external-link');
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

      // Trap focus within the mobile menu while it's open.
      const mobileMenu = document.getElementById(trigger.getAttribute('aria-controls'));
      if (mobileMenu) {
        const mobileMenuFocusTrap = createFocusTrap(mobileMenu);

        trigger.addEventListener('click', () => {
          const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

          if (isExpanded) {
            mobileMenuFocusTrap.deactivate();
          } else {
            mobileMenuFocusTrap.activate();
          }
        });
      }
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
  },

  cookieConsent(context) {
    const withdrawTriggers = context.querySelectorAll('.do-withdraw-cookie-consent');
    for (let i = 0; i < withdrawTriggers.length; i++) {
      withdrawTriggers[i].addEventListener('click', () => {
        Drupal.eu_cookie_compliance.setStatus(null);
        location.reload();
      })
    }
  }
};