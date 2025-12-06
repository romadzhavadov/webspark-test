import './styles/main.scss'; 
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

document.addEventListener('DOMContentLoaded', () => {
  const fromInput = document.querySelector<HTMLInputElement>('#date-from');
  const toInput = document.querySelector<HTMLInputElement>('#date-to');

  // FROM
  if (fromInput) {
    const fpFrom = flatpickr(fromInput, {
      dateFormat: 'd_m_Y',      // 09_08_2016
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
