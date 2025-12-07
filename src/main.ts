import 'flatpickr/dist/flatpickr.css'
import './styles/main.scss'; 
import flatpickr from 'flatpickr';
import { english } from 'flatpickr/dist/l10n/default.js';



// datepicker 
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





// Gallery view switcher

  const gallery = document.querySelector<HTMLElement>('#gallery');
  const viewButtons = document.querySelectorAll<HTMLButtonElement>('[data-view]');

  if (gallery && viewButtons.length) {
    viewButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view; 

        if (!view) return;

        if (view === 'rows') {
          gallery.classList.add('gallery--rows');
          gallery.classList.remove('gallery--tiles');
        } else {
          gallery.classList.add('gallery--tiles');
          gallery.classList.remove('gallery--rows');
        }

        viewButtons.forEach((b) => {
          b.classList.toggle('is-active', b === btn);
        });
      });
    });
  }


  
// Gallery render

type Post = {
  id: number;
  image: string;
  alt: string;
  title: string;
  likes: number;
  comments: number;
  views: number;
  date: string;
  createdAt: string;
};

const posts: Post[] = [
  {
    id: 1,
    image: '/images/image1.jpg',
    alt: 'Post image 1',
    title: 'Today',
    likes: 128,
    comments: 31,
    views: 22,
    date: '9-08-2016',
    createdAt: '11-04-2016',
  },
  {
    id: 2,
    image: '/images/image2.jpg',
    alt: 'Post image 2',
    title: 'Today',
    likes: 98,
    comments: 17,
    views: 15,
    date: '9-08-2016',
    createdAt: '11-04-2016',
  },
  {
    id: 3,
    image: '/images/image3.jpg',
    alt: 'Post image 3',
    title: 'Today',
    likes: 140,
    comments: 40,
    views: 30,
    date: '9-08-2016',
    createdAt: '11-04-2016',
  },
  {
    id: 4,
    image: '/images/image4.jpg',
    alt: 'Post image 4',
    title: 'Today',
    likes: 87,
    comments: 12,
    views: 10,
    date: '9-08-2016',
    createdAt: '11-04-2016',
  },
  {
    id: 5,
    image: '/images/image5.jpg',
    alt: 'Post image 5',
    title: 'Today',
    likes: 156,
    comments: 29,
    views: 34,
    date: '9-08-2016',
    createdAt: '11-04-2016',
  },
  {
    id: 6,
    image: '/images/image6.jpg',
    alt: 'Post image 6',
    title: 'Today',
    likes: 75,
    comments: 9,
    views: 11,
    date: '9-08-2016',
    createdAt: '11-04-2016',
  },
  {
    id: 7,
    image: '/images/image7.jpg',
    alt: 'Post image 7',
    title: 'Today',
    likes: 132,
    comments: 22,
    views: 19,
    date: '9-08-2016',
    createdAt: '11-04-2016',
  },
  {
    id: 8,
    image: '/images/image8.jpg',
    alt: 'Post image 8',
    title: 'Today',
    likes: 111,
    comments: 18,
    views: 16,
    date: '9-08-2016',
    createdAt: '11-04-2016',
  },
  {
    id: 9,
    image: '/images/image9.jpg',
    alt: 'Post image 9',
    title: 'Today',
    likes: 101,
    comments: 14,
    views: 13,
    date: '9-08-2016',
    createdAt: '11-04-2016',
  },
];

function renderPosts(limit?: number) {
  const list = document.querySelector<HTMLDivElement>('#gallery-list');
  if (!list) return;

  const visiblePosts =
    typeof limit === 'number'
      ? posts.slice(0, limit) 
      : posts;                

  list.innerHTML = visiblePosts
    .map(
      (post) => `
      <article class="post">
        <div class="post__image">
          <img src="${post.image}" alt="${post.alt}" />
        </div>

        <div class="post__content post__content--cols">
          <div class="post__col">
            <div class="post__title">${post.title}</div>

            <div class="post__stats">
              <div class="post__stat">
                <div class="post__icon">
                  <img src="/images/icons/like.svg" alt="Likes" />
                </div>
                <span class="post__value">${post.likes}</span>
              </div>
              <div class="post__stat">
                <div class="post__icon">
                  <img src="/images/icons/comment.svg" alt="Comments" />
                </div>
                <span class="post__value">${post.comments}</span>
              </div>
            </div>
          </div>

          <div class="post__col post__col--center">
            <div class="post__date">${post.date}</div>

            <div class="post__stats">
              <div class="post__stat">
                <div class="post__icon">
                  <img src="/images/icons/like.svg" alt="Likes" />
                </div>
                <span class="post__value">67</span>
              </div>
              <div class="post__stat">
                <div class="post__icon">
                  <img src="/images/icons/comment.svg" alt="Comments" />
                </div>
                <span class="post__value">22</span>
              </div>
            </div>
          </div>

          <div class="post__col post__col--right">
            <span class="post__type">Image upload</span>
            <span class="post__created">${post.createdAt}</span>
          </div>
        </div>
      </article>
      `
    )
    .join('');
}

renderPosts();

const gallerySection = document.querySelector<HTMLElement>('#gallery');
const rowsButton   = document.querySelector<HTMLButtonElement>('.gallery__view-btn--rows');
const tilesButton  = document.querySelector<HTMLButtonElement>('.gallery__view-btn--tiles');


rowsButton?.addEventListener('click', () => {
  gallerySection?.classList.add('gallery--rows');
  gallerySection?.classList.remove('gallery--tiles');

  rowsButton.classList.add('is-active');
  tilesButton?.classList.remove('is-active');

  renderPosts(); 
});


tilesButton?.addEventListener('click', () => {
  gallerySection?.classList.add('gallery--tiles');
  gallerySection?.classList.remove('gallery--rows');

  tilesButton.classList.add('is-active');
  rowsButton?.classList.remove('is-active');

  renderPosts(8); 
});