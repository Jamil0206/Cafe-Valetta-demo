// Cafe Valetta QR Table Menu Controller
import menuData from './menu.json';

// Import image assets for Vite resolution
import imgHero from './assets/valetta_hero.png';
import imgVeranda from './assets/valetta_veranda.png';
import imgCeiling from './assets/valetta_ceiling.png';
import imgGardens from './assets/valetta_gardens.png';
import imgHighTea from './assets/valetta_hightea.png';
import imgHotChocolate from './assets/valetta_italian_hot_chocolate.jpeg';
import imgCroissant from './assets/valetta_croissant.png';
import imgAvocado from './assets/valetta_avocado.png';
import imgPancakes from './assets/valetta_pancakes.png';
import imgBananaBread from './assets/valetta_bananabread.png';
import imgBabyccino from './assets/valetta_babyccino.png';

// Import payment SVGs via Vite asset pipeline
import svgVisa from './assets/visa.svg';
import svgMastercard from './assets/mastercard.svg';
import svgAmex from './assets/americanexpress.svg';
import svgApplePay from './assets/applepay.svg';
import svgGooglePay from './assets/googlepay.svg';

// SVG Icons for Category Tabs
const categoryIcons = {
  'breakfast': `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 3a1 1 0 0 0-1 1v1H7V4a1 1 0 0 0-2 0v1a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3V4a1 1 0 0 0-1-1zM6 7h12a1 1 0 0 1 1 1v1H5V8a1 1 0 0 1 1-1zm-1 4h14v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6z"/></svg>`,
  'morning-tea': `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/></svg>`,
  'hot-drinks': `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/></svg>`,
  'iced-drinks': `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 3l-1 1H4v2h.5l1 12h13l1-12H20V4h-4.5l-1-1zM6.55 7h10.9l-.83 10H7.38L6.55 7z"/></svg>`,
  'soft-drinks': `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h14l-1 5H6L5 3zm2 6h10l-1.5 9a1 1 0 0 1-1 .9H9.5a1 1 0 0 1-1-.9L7 9z"/></svg>`,
  'childrens-drinks': `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
  'lunch': `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>`,
  'dessert': `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-4.5-6.72-5-8.03-5-1.28 0-7.99.5-7.99 5h16.02z"/></svg>`,
  'drinks': `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3l-2 9c-.5 2 .5 4 3 5v4h6v-4c2.5-1 3.5-3 3-5l-2-9H6zm3 13.85V21H9v-4.15C7.42 16.45 6.4 15.38 6.17 14H11.83c-.23 1.38-1.25 2.45-2.83 2.85z"/></svg>`
};

// Image mappings for dishes - keyed by exact item name from menu.json
const dishImages = {
  'Italian Hot Chocolate': imgHotChocolate,
  'Scones': imgHighTea,
  'Breakfast Croissant': imgCroissant,
  'Avocado on toast': imgAvocado,
  'House made cakes': imgVeranda,
  'Banana Bread': imgBananaBread,
  'Pancakes': imgPancakes,
  'Babyccino': imgBabyccino,
  // Additional mappings using available assets
  'French Toast': imgPancakes,
  'Panna Cotta': imgVeranda,
  'Eggs Valetta': imgAvocado,
  'Babyccino (Kids)': imgBabyccino,
  'High Tea': imgHighTea,
  'Iced Coffee': imgHotChocolate,
  'Toasted Croissant': imgCroissant,
  'Corn Fritters': imgAvocado,
  'Eggs on Toast': imgHero,
  'Porridge': imgHero,
};

const defaultDishImage = imgHero;

// Parse price string to extract size variants e.g. "$5.00 - $7.00" → [{label:"Small",price:"$5.00"},{label:"Large",price:"$7.00"}]
function parsePriceVariants(priceStr) {
  if (!priceStr.includes(' - ')) return null;
  const parts = priceStr.split(' - ');
  if (parts.length !== 2) return null;
  return [
    { label: 'Regular', price: parts[0].trim() },
    { label: 'Large', price: parts[1].trim() }
  ];
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject payment logos from imported SVGs
  const payLogoEls = document.querySelectorAll('.pay-logo[data-asset]');
  const payAssetMap = {
    visa: svgVisa,
    mastercard: svgMastercard,
    amex: svgAmex,
    applepay: svgApplePay,
    googlepay: svgGooglePay,
  };
  payLogoEls.forEach(el => {
    const key = el.dataset.asset;
    if (payAssetMap[key]) el.src = payAssetMap[key];
  });

  // 2. Inject hero background image
  const heroSection = document.getElementById('hero-section');
  if (heroSection) {
    heroSection.style.backgroundImage = `url(${imgGardens})`;
  }

  // 3. Inject High Tea banner image
  const highTeaBanner = document.getElementById('high-tea-banner');
  if (highTeaBanner) {
    highTeaBanner.style.backgroundImage = `url(${imgHighTea})`;
  }

  // 4. Sticky Header scroll-shadow trigger
  const mainHeader = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  });

  // 5. Scroll Reveal Observer
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -20px 0px'
  });
  document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObserver.observe(el));

  // 6. Menu States
  let activeCategoryId = menuData.categories[0].id;
  const activeFilters = new Set();

  const categoryBar = document.getElementById('menu-category-bar');
  const signatureContainer = document.getElementById('signature-highlight-container');
  const menuGrid = document.getElementById('menu-grid');
  const dietaryFilterBar = document.getElementById('dietary-filter-bar');

  // Render Tabs
  function renderCategoryTabs() {
    if (!categoryBar) return;
    categoryBar.innerHTML = '';

    menuData.categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `category-tab ${cat.id === activeCategoryId ? 'active' : ''}`;
      btn.dataset.id = cat.id;

      const icon = categoryIcons[cat.id] || categoryIcons['drinks'] || '';
      btn.innerHTML = `${icon}<span>${cat.name}</span>`;

      btn.addEventListener('click', () => {
        activeCategoryId = cat.id;
        document.querySelectorAll('.category-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderMenu();
        const navSection = document.querySelector('.menu-nav-section');
        if (navSection && window.scrollY > navSection.offsetTop) {
          window.scrollTo({ top: navSection.offsetTop - 75, behavior: 'smooth' });
        }
      });
      categoryBar.appendChild(btn);
    });
  }

  // Render dishes
  function renderMenu() {
    if (!menuGrid || !signatureContainer) return;
    menuGrid.innerHTML = '';
    signatureContainer.innerHTML = '';

    const category = menuData.categories.find(c => c.id === activeCategoryId);
    if (!category) return;

    const titleEl = document.getElementById('active-category-title');
    const availEl = document.getElementById('active-category-availability');
    if (titleEl) titleEl.textContent = category.name;
    if (availEl) availEl.textContent = category.availability || '';

    const items = category.items.filter(item => {
      if (activeFilters.size === 0) return true;
      return Array.from(activeFilters).every(f => item.dietary.includes(f));
    });

    if (items.length === 0) {
      menuGrid.innerHTML = `
        <div class="no-items-state">
          <p class="no-items-msg">No items match this filter.</p>
          <button class="clear-filter-btn" id="clear-filter-btn">Clear filter</button>
        </div>`;
      document.getElementById('clear-filter-btn')?.addEventListener('click', () => {
        activeFilters.clear();
        document.querySelectorAll('.dietary-btn').forEach(b => b.classList.remove('active'));
        renderMenu();
      });
      return;
    }

    const signatureItems = items.filter(item => item.signature);
    const regularItems = items.filter(item => !item.signature);

    signatureItems.forEach(item => {
      const card = document.createElement('div');
      card.className = `signature-item-card reveal-on-scroll active ${item.outOfStock ? 'out-of-stock' : ''}`;
      const imgPath = dishImages[item.name] || defaultDishImage;
      const oosBadge = item.outOfStock ? `<span class="out-of-stock-text">Currently Unavailable</span>` : '';

      card.innerHTML = `
        <div class="sig-image-wrapper">
          <img src="${imgPath}" alt="${item.name}" loading="lazy">
          ${item.outOfStock ? '<div class="oos-overlay"></div>' : ''}
        </div>
        <div class="sig-info">
          <span class="sig-label">House Signature</span>
          <div class="sig-title-row">
            <h3>${item.name}</h3>
            <span class="sig-price">${item.price}</span>
          </div>
          ${oosBadge ? `<div class="oos-badge-row">${oosBadge}</div>` : ''}
          <p class="sig-desc">${item.description}</p>
          <div class="menu-item-meta">
            ${item.dietary.map(d => `<span class="dietary-badge" title="${dietaryLabel(d)}">${d}</span>`).join('')}
          </div>
        </div>
      `;

      if (!item.outOfStock) {
        card.addEventListener('click', () => openModal(item, category.name));
      }
      signatureContainer.appendChild(card);
    });

    regularItems.forEach(item => {
      const card = document.createElement('div');
      card.className = `menu-item-card ${item.outOfStock ? 'out-of-stock' : ''}`;
      const oosBadge = item.outOfStock ? `<span class="out-of-stock-text">Unavailable</span>` : '';

      card.innerHTML = `
        <div class="menu-item-header">
          <span class="menu-item-name">${item.name}${oosBadge}</span>
          <span class="menu-item-leader" aria-hidden="true"></span>
          <span class="menu-item-price">${item.price}</span>
        </div>
        <p class="menu-item-description">${item.description || 'Prepared fresh using local heritage recipes.'}</p>
        <div class="menu-item-meta">
          ${item.dietary.map(d => `<span class="dietary-badge" title="${dietaryLabel(d)}">${d}</span>`).join('')}
        </div>
      `;

      if (!item.outOfStock) {
        card.addEventListener('click', () => openModal(item, category.name));
      }
      menuGrid.appendChild(card);
    });
  }

  function dietaryLabel(code) {
    const map = { V: 'Vegetarian', DF: 'Dairy-Free', GF: 'Gluten-Free', VG: 'Vegan' };
    return map[code] || code;
  }

  // Dietary filter toggles
  if (dietaryFilterBar) {
    dietaryFilterBar.querySelectorAll('.dietary-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const filterVal = btn.dataset.filter;
        if (activeFilters.has(filterVal)) {
          activeFilters.delete(filterVal);
          btn.classList.remove('active');
        } else {
          activeFilters.add(filterVal);
          btn.classList.add('active');
        }
        renderMenu();
      });
    });
  }

  // 7. Modal dish popup
  const dishModal = document.getElementById('dish-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImage = document.getElementById('modal-image');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalDescription = document.getElementById('modal-description');
  const modalDietary = document.getElementById('modal-dietary');
  const modalVariants = document.getElementById('modal-variants');

  function openModal(item, categoryName) {
    if (!dishModal) return;

    modalCategory.textContent = categoryName;
    modalTitle.textContent = item.name;
    modalDescription.textContent = item.description || 'Steeped in history, crafted with local care and served with heritage pride.';
    modalImage.src = dishImages[item.name] || defaultDishImage;
    modalImage.alt = item.name;
    modalDietary.innerHTML = item.dietary.map(d => `<span class="dietary-badge" title="${dietaryLabel(d)}">${d}</span>`).join('');

    // Handle price variants
    const variants = parsePriceVariants(item.price);
    if (variants && modalVariants) {
      let selected = 0;
      modalPrice.textContent = variants[0].price;
      modalVariants.innerHTML = variants.map((v, i) =>
        `<button class="variant-pill ${i === 0 ? 'active' : ''}" data-index="${i}" data-price="${v.price}">${v.label} <span>${v.price}</span></button>`
      ).join('');
      modalVariants.style.display = 'flex';
      modalVariants.querySelectorAll('.variant-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          modalVariants.querySelectorAll('.variant-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          modalPrice.textContent = pill.dataset.price;
        });
      });
    } else {
      modalPrice.textContent = item.price;
      if (modalVariants) modalVariants.style.display = 'none';
    }

    dishModal.classList.add('open');
    document.body.classList.add('no-scroll');
    modalCloseBtn?.focus();
  }

  function closeModal() {
    if (!dishModal) return;
    dishModal.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (dishModal) {
    dishModal.addEventListener('click', e => {
      if (e.target === dishModal) closeModal();
    });
  }
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // Initialize
  renderCategoryTabs();
  renderMenu();
});
