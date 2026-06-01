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

// SVG Icons for Category Tabs
const categoryIcons = {
  'breakfast': `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>`,
  'morning-tea': `<svg viewBox="0 0 24 24"><path d="M2 21h18v-2H2v2M20 8h-2V5h2v3M4 19h12v-4H4v4m14-7h2V9h-2v3m0-7V3H6v2h12M4 9h12V7H4v2m0 5h12v-2H4v2m16-4h-2v2h2v-2z"/></svg>`,
  'hot-drinks': `<svg viewBox="0 0 24 24"><path d="M2 21h18v-2H2v2M20 8h-2V5h2v3m-2-5H4v10a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V3m-2 10H6V5h8v8z"/></svg>`,
  'iced-drinks': `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V7h2v2zm5 12h-2V7h2v14z"/></svg>`,
  'soft-drinks': `<svg viewBox="0 0 24 24"><path d="M12 2c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2h3v1h-5c-1.66 0-3 1.34-3 3v9c0 1.66 1.34 3 3 3h6c1.66 0 3-1.34 3-3V9c0-1.66-1.34-3-3-3h-1V5c0-1.1-.9-2-2-2h-1z"/></svg>`,
  'childrens-drinks': `<svg viewBox="0 0 24 24"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V3zM6 12V5h12v7H6zm6 7c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5z"/></svg>`
};

// Image mappings for featured dishes
const dishImages = {
  'Italian Hot Chocolate': imgHotChocolate,
  'Scones': imgHighTea,
  'Breakfast Croissant': imgCroissant,
  'Avocado on toast': imgAvocado,
  'House made cakes': imgVeranda,
  'Banana Bread': imgBananaBread,
  'Pancakes': imgPancakes,
  'Babyccino': imgBabyccino
};

const defaultDishImage = imgHero;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header scroll-shadow trigger
  const mainHeader = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  });

  // 2. Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
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
  revealElements.forEach(el => revealObserver.observe(el));

  // 3. Menu States
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
      
      const icon = categoryIcons[cat.id] || '';
      btn.innerHTML = `${icon}<span>${cat.name}</span>`;
      
      btn.addEventListener('click', () => {
        activeCategoryId = cat.id;
        document.querySelectorAll('.category-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderMenu();
        // Smooth scroll menu area into focus if scrolled down
        const navSection = document.querySelector('.menu-nav-section');
        if (navSection && window.scrollY > navSection.offsetTop) {
          window.scrollTo({
            top: navSection.offsetTop - 75,
            behavior: 'smooth'
          });
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

    // Update active category title and availability banners
    const titleEl = document.getElementById('active-category-title');
    const availEl = document.getElementById('active-category-availability');
    if (titleEl) titleEl.textContent = category.name;
    if (availEl) availEl.textContent = category.availability || '';

    // Filter items
    const items = category.items.filter(item => {
      if (activeFilters.size === 0) return true;
      return Array.from(activeFilters).every(f => item.dietary.includes(f));
    });

    if (items.length === 0) {
      menuGrid.innerHTML = `<p class="no-items-msg">No items match the selected filters in this category.</p>`;
      return;
    }

    // Split signature dishes from regular dishes
    const signatureItems = items.filter(item => item.signature);
    const regularItems = items.filter(item => !item.signature);

    // Render Signatures (with image header card)
    signatureItems.forEach(item => {
      const card = document.createElement('div');
      card.className = `signature-item-card reveal-on-scroll active ${item.outOfStock ? 'out-of-stock' : ''}`;
      const imgPath = dishImages[item.name] || defaultDishImage;

      const oosBadge = item.outOfStock ? `<span class="out-of-stock-text">Out of Stock</span>` : '';

      card.innerHTML = `
        <div class="sig-image-wrapper">
          <img src="${imgPath}" alt="${item.name}">
        </div>
        <div class="sig-info">
          <span class="sig-label">House Signature</span>
          <div class="sig-title-row">
            <h3>${item.name}${oosBadge}</h3>
            <span class="sig-price">${item.price}</span>
          </div>
          <p class="sig-desc">${item.description}</p>
          <div class="menu-item-meta">
            ${item.dietary.map(d => `<span class="dietary-badge" title="${d}">${d}</span>`).join('')}
          </div>
        </div>
      `;

      if (!item.outOfStock) {
        card.addEventListener('click', () => openModal(item, category.name));
      }
      signatureContainer.appendChild(card);
    });

    // Render Regular items in mobile dot-leader layout
    regularItems.forEach(item => {
      const card = document.createElement('div');
      card.className = `menu-item-card ${item.outOfStock ? 'out-of-stock' : ''}`;
      
      const oosBadge = item.outOfStock ? `<span class="out-of-stock-text">Out of Stock</span>` : '';

      card.innerHTML = `
        <div class="menu-item-header">
          <span class="menu-item-name">${item.name}${oosBadge}</span>
          <span class="menu-item-leader"></span>
          <span class="menu-item-price">${item.price}</span>
        </div>
        <p class="menu-item-description">${item.description || 'Prepared fresh using local heritage recipes.'}</p>
        <div class="menu-item-meta">
          ${item.dietary.map(d => `<span class="dietary-badge" title="${d}">${d}</span>`).join('')}
        </div>
      `;

      if (!item.outOfStock) {
        card.addEventListener('click', () => openModal(item, category.name));
      }
      menuGrid.appendChild(card);
    });
  }

  // Dietary filter toggles
  if (dietaryFilterBar) {
    const filterButtons = dietaryFilterBar.querySelectorAll('.dietary-btn');
    filterButtons.forEach(btn => {
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

  // 4. Modal dish popup details
  const dishModal = document.getElementById('dish-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImage = document.getElementById('modal-image');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalDescription = document.getElementById('modal-description');
  const modalDietary = document.getElementById('modal-dietary');

  function openModal(item, categoryName) {
    if (!dishModal) return;
    
    modalCategory.textContent = categoryName;
    modalTitle.textContent = item.name;
    modalPrice.textContent = item.price;
    modalDescription.textContent = item.description || 'Steeped in history, crafted with local care and served with heritage pride.';
    
    modalImage.src = dishImages[item.name] || defaultDishImage;
    modalImage.alt = item.name;

    modalDietary.innerHTML = item.dietary.map(d => `<span class="dietary-badge" title="${d}">${d}</span>`).join('');

    dishModal.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  function closeModal() {
    if (!dishModal) return;
    dishModal.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (dishModal) {
    dishModal.addEventListener('click', (e) => {
      if (e.target === dishModal) closeModal();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Initialize
  renderCategoryTabs();
  renderMenu();
});
