function open(el) {
  el.setAttribute('aria-expanded', true);
}

function close(el) {
  el.setAttribute('aria-expanded', false);
}

function keydownListener(e) {
  const currentLink = e.target;

  // The element that would trigger a submenu
  const currentItem = currentLink.matches('[aria-haspopup]') ?
    currentLink :
    currentLink.closest('[aria-haspopup]');

  const isInSubmenu = !! currentLink.closest('[role="menu"]');

  const nextItem = currentLink.matches('a') ?
    currentLink.parentElement.nextElementSibling :
    currentLink.nextElementSibling;
  const prevItem = currentLink.matches('a') ?
    currentLink.parentElement.previousElementSibling :
    currentLink.previousElementSibling;
  const nextLink = nextItem ? nextItem.querySelector('a') : null;
  const prevLink = prevItem ? prevItem.querySelector('a') : null;

  // Either current submenu or inner submenu
  const submenu = isInSubmenu ?
    currentLink.closest('[role="menu"]') :
    currentLink.parentElement.querySelector('[role="menu"]');

  // The closest tabbable element which is a parent
  const parentLink = isInSubmenu ?
    submenu.parentElement.querySelector('a, button') :
    null;

  // The closest parent element that triggers a submenu
  const parentItem = parentLink ?
    (parentLink.matches('[aria-haspopup') ? parentLink : parentLink.closest('[aria-haspopup')) :
    null;

  switch (e.key) {
    case 'Down':
    case 'ArrowDown':
      // If it's in a submenu, go to next. If not, open submenu
      if (isInSubmenu) {
        if (nextLink) {
          nextLink.focus();
          e.preventDefault();
        } else if (nextItem) {
          nextItem.focus();
          e.preventDefault();
        }
      } else if (submenu) {
        open(currentItem);
        submenu.querySelector('[role="menuitem"]').focus();
        e.preventDefault();
      }
      break;
    case 'Up':
    case 'ArrowUp':
      // If it's in a submenu, go to previous until there's more then exit
      if (isInSubmenu) {
        if (prevLink) {
          prevLink.focus();
        } else if (parentLink) {
          parentLink.focus();
          close(parentItem);
        }
        e.preventDefault();
      }
      break;
    case 'Left':
    case 'ArrowLeft':
      // If it's in a submenu exit, otherwise previous link
      if (isInSubmenu) {
        parentLink.focus();
        close(currentItem);
        e.preventDefault();
      } else if (prevLink) {
        prevLink.focus();
        e.preventDefault();
      }
      break;
    case 'Right':
    case 'ArrowRight':
      // Next link
      if (nextLink) {
        nextLink.focus();
        e.preventDefault();
      }
      break;
    case 'Esc':
    case 'Escape':
      if (parentItem) {
        close(parentItem);
      }
      break;
  }
}

export function button(button) {
  const parent = button.parentNode;

  parent.addEventListener('mouseout', () => requestAnimationFrame(() => close(button)));
  // On mouseover close all other submenus
  parent.addEventListener('mouseover', () => requestAnimationFrame(() => {
    open(button);
  }));

  parent.addEventListener('keydown', keydownListener);
}

export function menu(menu) {
  const triggers = menu.querySelectorAll('[aria-haspopup="true"]');

  for (let i = 0; i < triggers.length; i++) {
    const trigger = triggers[i];

    trigger.addEventListener('mouseout', () => requestAnimationFrame(() => close(trigger)));
    // On mouseover close all other submenus
    trigger.addEventListener('mouseover', () => requestAnimationFrame(() => {
      Array.from(triggers).slice(i, 1).forEach(close);
      open(trigger);
    }));
  }

  menu.addEventListener('keydown', keydownListener);
}
