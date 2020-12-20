export function open(el) {
  el.setAttribute('aria-expanded', true);
}

export function close(el) {
  el.setAttribute('aria-expanded', false);
}

export function toggle(el) {
  const isExpanded = el.getAttribute('aria-expanded') === 'true';
  if (isExpanded) {
    close(el);
  } else {
    open(el);
  }

  if (el.dataset.toggleLabel) {
    const currentLabel = el.getAttribute('aria-label');
    el.setAttribute('aria-label', el.dataset.toggleLabel);
    el.dataset.toggleLabel = currentLabel;
  }

  const controls = el.getAttribute('aria-controls');
  if (controls) {
    controls.split(' ').forEach((selector) => {
      const el = document.getElementById(selector);
      if (isExpanded) {
        el.classList.remove('is-active');
      }
      else {
        el.classList.add('is-active');
      }
    });
  }
}

export function toggler(el) {
  el.addEventListener('keydown', (e) => {
    const isExpanded = el.getAttribute('aria-expanded') === 'true';

    switch (e.key) {
      case 'Esc':
      case 'Escape':
        if (isExpanded) {
          toggle(el);
        }
        break;
    }
  });

  el.addEventListener('click', () => requestAnimationFrame(() => {
    toggle(el);
  }));
}
