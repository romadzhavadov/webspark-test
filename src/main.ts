import 'flatpickr/dist/flatpickr.css'
import './styles/main.scss'; 
import flatpickr from 'flatpickr';
import { english } from 'flatpickr/dist/l10n/default.js';

flatpickr.localize({
  ...english,
  weekdays: {
    shorthand: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    longhand: english.weekdays.longhand,
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const fromInput = document.querySelector<HTMLInputElement>('#date-from');
  const toInput = document.querySelector<HTMLInputElement>('#date-to');

  // FROM
  if (fromInput) {
    const fpFrom = flatpickr(fromInput, {
      dateFormat: 'd_m_Y',     
      defaultDate: 'from',
      monthSelectorType: 'static',  
      allowInput: true,
    });

    const openFromBtn = document.querySelector<HTMLButtonElement>('[data-open="date-from"]');
    const clearFromBtn = document.querySelector<HTMLButtonElement>('[data-clear="date-from"]');

    openFromBtn?.addEventListener('click', () => fpFrom.open());
    clearFromBtn?.addEventListener('click', () => {
      fpFrom.clear();
      fromInput.focus();
    });
  }

  // TO
  if (toInput) {
    const fpTo = flatpickr(toInput, {
      dateFormat: 'd_m_Y',
      defaultDate: '09_08_2016',  
      monthSelectorType: 'static',
      allowInput: true,
    });

    const openToBtn = document.querySelector<HTMLButtonElement>('[data-open="date-to"]');
    const clearToBtn = document.querySelector<HTMLButtonElement>('[data-clear="date-to"]');

    openToBtn?.addEventListener('click', () => fpTo.open());
    clearToBtn?.addEventListener('click', () => {
      fpTo.clear();
      toInput.focus();
    });
  }
});







const gallery = document.querySelector<HTMLElement>('#gallery');
const viewButtons = document.querySelectorAll<HTMLButtonElement>('[data-view]');

if (gallery && viewButtons.length) {
  viewButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;

      if (!view) return;

      gallery.classList.toggle('gallery--rows', view === 'rows');
      gallery.classList.toggle('gallery--tiles', view === 'tiles');

      viewButtons.forEach((b) =>
        b.classList.toggle('view-toggle--active', b === btn),
      );
    });
  });
}
