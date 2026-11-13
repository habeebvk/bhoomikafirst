/**
 * HELLOADDRESS KERALA – APPLICATION SCRIPT
 * Inspired by HelloAddress.com (Malayala Manorama)
 */

// Mock Database of Kerala Properties
let propertiesData = [
  {
    id: 'HA-101',
    title: '3 BHK Luxury Waterfront Apartment in Marine Drive',
    city: 'Kochi',
    locality: 'Marine Drive',
    type: 'Apartment',
    category: 'Buy',
    bhk: 3,
    price: 18500000,
    pricePerSqft: 8400,
    area: 2200,
    bathrooms: 3,
    parking: '2 Covered',
    status: 'Ready to Move',
    isOwner: true,
    isRera: true,
    ownerName: 'Varghese Mathew',
    ownerRole: 'Direct Owner (0% Brokerage)',
    ownerPhone: '+919846012345',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'HA-102',
    title: '4 BHK Designer Gated Villa near Infopark SmartCity',
    city: 'Kochi',
    locality: 'Kakkanad',
    type: 'Villa',
    category: 'Buy',
    bhk: 4,
    price: 14500000,
    pricePerSqft: 5800,
    area: 2500,
    bathrooms: 4,
    parking: '2 Covered',
    status: 'Ready to Move',
    isOwner: false,
    isRera: true,
    builder: 'Asset Homes',
    ownerName: 'Asset Homes Sales Desk',
    ownerRole: 'RERA Certified Builder',
    ownerPhone: '+919847056789',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'HA-103',
    title: '2 BHK Premium High-Rise Flat Near Technopark Phase 3',
    city: 'Trivandrum',
    locality: 'Kazhakoottam',
    type: 'Apartment',
    category: 'Buy',
    bhk: 2,
    price: 6800000,
    pricePerSqft: 5230,
    area: 1300,
    bathrooms: 2,
    parking: '1 Dedicated',
    status: 'Ready to Move',
    isOwner: true,
    isRera: true,
    ownerName: 'Dr. Priya Nambiar',
    ownerRole: 'Direct Owner (0% Brokerage)',
    ownerPhone: '+919447011223',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'HA-104',
    title: '3 BHK Royal Penthouse in Kowdiar Prime Enclave',
    city: 'Trivandrum',
    locality: 'Kowdiar',
    type: 'Apartment',
    category: 'Buy',
    bhk: 3,
    price: 21000000,
    pricePerSqft: 7500,
    area: 2800,
    bathrooms: 4,
    parking: '2 Covered',
    status: 'Ready to Move',
    isOwner: false,
    isRera: true,
    builder: 'Skyline Builders',
    ownerName: 'Skyline Imperial Sales',
    ownerRole: 'RERA Certified Builder',
    ownerPhone: '+919446078910',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'HA-105',
    title: '15 Cents Premium Highway Residential Plot with Clear Title',
    city: 'Thrissur',
    locality: 'Punkunnam',
    type: 'Plot',
    category: 'Plots',
    bhk: null,
    price: 9000000,
    pricePerSqft: 1375,
    area: 6534,
    bathrooms: null,
    parking: 'Private Gate',
    status: 'Ready for Registration',
    isOwner: true,
    isRera: false,
    ownerName: 'K. Balachandran',
    ownerRole: 'Direct Land Owner',
    ownerPhone: '+919496033445',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'HA-106',
    title: '3 BHK Fully Furnished Luxury Flat for Family Rent',
    city: 'Kochi',
    locality: 'Edappally',
    type: 'Apartment',
    category: 'Rent',
    bhk: 3,
    price: 32000,
    pricePerSqft: 20,
    area: 1600,
    bathrooms: 3,
    parking: '1 Covered',
    status: 'Ready to Move',
    isOwner: true,
    isRera: true,
    ownerName: 'Jacob Cherian',
    ownerRole: 'Direct Owner (0% Brokerage)',
    ownerPhone: '+919447199887',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'HA-107',
    title: '2 BHK Modern Techie Flat for Rent near Cyberpark',
    city: 'Kozhikode',
    locality: 'Palazhi',
    type: 'Apartment',
    category: 'Rent',
    bhk: 2,
    price: 18000,
    pricePerSqft: 15,
    area: 1200,
    bathrooms: 2,
    parking: '1 Covered',
    status: 'Ready to Move',
    isOwner: true,
    isRera: true,
    ownerName: 'Rahim K.P.',
    ownerRole: 'Direct Owner',
    ownerPhone: '+919846055443',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'HA-108',
    title: '3500 Sq.Ft Grade-A Commercial Showroom / Corporate Office',
    city: 'Kochi',
    locality: 'Kaloor',
    type: 'Commercial',
    category: 'Commercial',
    bhk: null,
    price: 45000000,
    pricePerSqft: 12850,
    area: 3500,
    bathrooms: 4,
    parking: '6 Dedicated',
    status: 'Ready to Occupy',
    isOwner: false,
    isRera: true,
    builder: 'Sobha Limited',
    ownerName: 'Sobha Commercial Hub',
    ownerRole: 'Authorized Developer',
    ownerPhone: '+919495088776',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'HA-109',
    title: '4 BHK Ultra Luxury Contemporary Villa in Baker Hill',
    city: 'Kottayam',
    locality: 'Baker Hill',
    type: 'Villa',
    category: 'Buy',
    bhk: 4,
    price: 16500000,
    pricePerSqft: 5150,
    area: 3200,
    bathrooms: 4,
    parking: '2 Covered',
    status: 'Ready to Move',
    isOwner: true,
    isRera: true,
    ownerName: 'Abraham Thomas',
    ownerRole: 'Direct Owner (0% Brokerage)',
    ownerPhone: '+919847112244',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    featured: true
  }
];

// District Localities Data
const districtLocalities = {
  Kochi: [
    { name: 'Kakkanad (Infopark)', count: '420+ Properties', avgPrice: '₹5,600 / sq.ft' },
    { name: 'Marine Drive', count: '180+ Properties', avgPrice: '₹9,200 / sq.ft' },
    { name: 'Edappally', count: '290+ Properties', avgPrice: '₹6,400 / sq.ft' },
    { name: 'Kaloor (Metro Hub)', count: '210+ Properties', avgPrice: '₹6,800 / sq.ft' },
    { name: 'Aluva', count: '240+ Properties', avgPrice: '₹4,800 / sq.ft' },
    { name: 'Vyttila Mobility Hub', count: '190+ Properties', avgPrice: '₹7,100 / sq.ft' },
    { name: 'Tripunithura', count: '175+ Properties', avgPrice: '₹5,100 / sq.ft' },
    { name: 'Palarivattom', count: '160+ Properties', avgPrice: '₹7,500 / sq.ft' }
  ],
  Trivandrum: [
    { name: 'Kazhakoottam (Technopark)', count: '380+ Properties', avgPrice: '₹5,200 / sq.ft' },
    { name: 'Kowdiar (Royal Enclave)', count: '140+ Properties', avgPrice: '₹8,400 / sq.ft' },
    { name: 'Sasthamangalam', count: '165+ Properties', avgPrice: '₹6,900 / sq.ft' },
    { name: 'Pattom', count: '190+ Properties', avgPrice: '₹6,700 / sq.ft' },
    { name: 'Vellayambalam', count: '130+ Properties', avgPrice: '₹7,600 / sq.ft' },
    { name: 'Sreekaryam', count: '145+ Properties', avgPrice: '₹4,900 / sq.ft' }
  ],
  Kozhikode: [
    { name: 'Palazhi (Cyberpark)', count: '220+ Properties', avgPrice: '₹4,900 / sq.ft' },
    { name: 'Mavoor Road', count: '195+ Properties', avgPrice: '₹6,300 / sq.ft' },
    { name: 'Chevayur', count: '140+ Properties', avgPrice: '₹5,100 / sq.ft' },
    { name: 'Pottammal', count: '110+ Properties', avgPrice: '₹5,800 / sq.ft' }
  ],
  Thrissur: [
    { name: 'Punkunnam', count: '180+ Properties', avgPrice: '₹5,400 / sq.ft' },
    { name: 'Swaraj Round', count: '135+ Properties', avgPrice: '₹7,800 / sq.ft' },
    { name: 'Ayyanthole', count: '150+ Properties', avgPrice: '₹4,800 / sq.ft' },
    { name: 'Ollur', count: '120+ Properties', avgPrice: '₹4,200 / sq.ft' }
  ]
};

// Global App State
let currentSearchTab = 'Buy';
let selectedBHK = 'All';
let selectedFilterCategory = 'All';
let activeDistrict = 'Kochi';
let shortlist = JSON.parse(localStorage.getItem('ha_shortlist') || '[]');
let compareList = [];

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  renderDistrictLocalities('Kochi');
  renderProperties();
  updateShortlistBadge();
  initMortgageCalculator();
  initResponsiveNavigation();
});

// Initialize Mobile Nav Drawer, Modal Dismissal & District Sync
function initResponsiveNavigation() {
  document.querySelectorAll('.ha-modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModals();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileNav();
      closeModals();
    }
  });

  const searchCityEl = document.getElementById('searchCity');
  const topCityEl = document.getElementById('topCitySelect');
  const mobileCityEl = document.getElementById('mobileCitySelect');

  if (searchCityEl) {
    searchCityEl.addEventListener('change', () => {
      const val = searchCityEl.value || 'All';
      if (topCityEl && [...topCityEl.options].some(o => o.value === val)) topCityEl.value = val;
      if (mobileCityEl && [...mobileCityEl.options].some(o => o.value === val)) mobileCityEl.value = val;
    });
  }

  if (topCityEl) {
    topCityEl.addEventListener('change', () => {
      if (mobileCityEl) mobileCityEl.value = topCityEl.value;
    });
  }
}

function syncCitySelection(cityVal) {
  const topCityEl = document.getElementById('topCitySelect');
  const mobileCityEl = document.getElementById('mobileCitySelect');
  const searchCityEl = document.getElementById('searchCity');

  if (topCityEl && [...topCityEl.options].some(o => o.value === cityVal)) {
    topCityEl.value = cityVal;
  }
  if (mobileCityEl && [...mobileCityEl.options].some(o => o.value === cityVal)) {
    mobileCityEl.value = cityVal;
  }
  if (searchCityEl) {
    const searchVal = cityVal === 'All' ? '' : cityVal;
    searchCityEl.value = [...searchCityEl.options].some(o => o.value === searchVal) ? searchVal : '';
  }
  renderProperties();
}

function toggleMobileNav(forceState) {
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');
  const toggleBtn = document.getElementById('mobileMenuToggle');
  if (!drawer) return;

  const isOpen = typeof forceState === 'boolean' ? forceState : !drawer.classList.contains('open');
  drawer.classList.toggle('open', isOpen);
  drawer.setAttribute('aria-hidden', String(!isOpen));
  if (backdrop) backdrop.classList.toggle('open', isOpen);
  if (toggleBtn) {
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    toggleBtn.textContent = isOpen ? '✕' : '☰';
  }
  document.body.classList.toggle('ha-menu-open', isOpen);
}

function closeMobileNav() {
  toggleMobileNav(false);
}

// Format Indian Rupee (₹ Lakhs / Crores)
function formatPrice(amount, category) {
  if (category === 'Rent') {
    return '₹' + amount.toLocaleString('en-IN') + '/mo';
  }
  if (amount >= 10000000) {
    return '₹' + (amount / 10000000).toFixed(2).replace(/\.00$/, '') + ' Cr';
  }
  if (amount >= 100000) {
    return '₹' + (amount / 100000).toFixed(2).replace(/\.00$/, '') + ' L';
  }
  return '₹' + amount.toLocaleString('en-IN');
}

// Search Tab Switcher
function setSearchTab(tab, btn) {
  currentSearchTab = tab;
  document.querySelectorAll('.ha-search-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const bhkContainer = document.getElementById('bhkSelectorRow');
  const typeSelect = document.getElementById('searchType');

  if (tab === 'Plots') {
    if (bhkContainer) bhkContainer.style.display = 'none';
    if (typeSelect) typeSelect.value = 'Plot';
  } else if (tab === 'Commercial') {
    if (bhkContainer) bhkContainer.style.display = 'none';
    if (typeSelect) typeSelect.value = 'Commercial';
  } else {
    if (bhkContainer) bhkContainer.style.display = 'flex';
    if (typeSelect && typeSelect.value !== 'Apartment' && typeSelect.value !== 'Villa') {
      typeSelect.value = 'All';
    }
  }

  renderProperties();
}

// BHK Chip Selector
function setBHKChip(bhk, btn) {
  selectedBHK = bhk;
  document.querySelectorAll('.ha-bhk-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProperties();
}

// Render Properties Deck
function renderProperties() {
  const container = document.getElementById('propertiesGrid');
  if (!container) return;

  const keyword = (document.getElementById('searchKeyword')?.value || '').toLowerCase().trim();
  const city = document.getElementById('searchCity')?.value || '';
  const type = document.getElementById('searchType')?.value || 'All';
  const budget = document.getElementById('searchBudget')?.value || '';
  const onlyDirect = document.getElementById('chkDirectOwner')?.checked || false;
  const onlyVerified = document.getElementById('chkVerified')?.checked || false;
  const onlyReady = document.getElementById('chkReadyToMove')?.checked || false;
  const sortBy = document.getElementById('sortBy')?.value || 'featured';

  let filtered = propertiesData.filter(p => {
    // Mode match
    if (currentSearchTab === 'Buy' && p.category !== 'Buy') return false;
    if (currentSearchTab === 'Rent' && p.category !== 'Rent') return false;
    if (currentSearchTab === 'Plots' && p.type !== 'Plot') return false;
    if (currentSearchTab === 'Commercial' && p.type !== 'Commercial') return false;

    // Category pill filter
    if (selectedFilterCategory === 'Owner' && !p.isOwner) return false;
    if (selectedFilterCategory === 'Ready' && p.status !== 'Ready to Move') return false;
    if (selectedFilterCategory === 'Villas' && p.type !== 'Villa') return false;
    if (selectedFilterCategory === 'Apartments' && p.type !== 'Apartment') return false;
    if (selectedFilterCategory === 'Plots' && p.type !== 'Plot') return false;

    // BHK match
    if (selectedBHK !== 'All') {
      if (selectedBHK === '4+' && (p.bhk || 0) < 4) return false;
      if (selectedBHK !== '4+' && p.bhk !== parseInt(selectedBHK)) return false;
    }

    // City match
    if (city && city !== 'All' && p.city !== city) return false;

    // Type match
    if (type && type !== 'All' && p.type !== type) return false;

    // Budget match
    if (budget) {
      const maxB = parseInt(budget);
      if (p.price > maxB) return false;
    }

    // Keyword match
    if (keyword) {
      const text = `${p.title} ${p.locality} ${p.city} ${p.type} ${p.builder || ''}`.toLowerCase();
      if (!text.includes(keyword)) return false;
    }

    // Quick checks
    if (onlyDirect && !p.isOwner) return false;
    if (onlyVerified && !p.isRera) return false;
    if (onlyReady && p.status !== 'Ready to Move') return false;

    return true;
  });

  // Sorting
  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'area-desc') filtered.sort((a, b) => b.area - a.area);

  // Results count
  const countLabel = document.getElementById('resultsCounter');
  if (countLabel) {
    countLabel.textContent = `Showing ${filtered.length} of ${propertiesData.length} Verified Properties`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 12px; border: 1px solid #E2E8F0;">
        <div style="font-size: 3rem; margin-bottom: 12px;">🏠</div>
        <h3 style="font-size: 1.35rem; color: #0F172A; margin-bottom: 8px;">No Properties Found Matching Your Criteria</h3>
        <p style="color: #64748B; font-size: 0.95rem; margin-bottom: 20px;">Try adjusting your city, budget filter, or select "All Status" to explore more options.</p>
        <button class="btn btn-primary" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const isFav = shortlist.includes(p.id);
    const bhkText = p.bhk ? `${p.bhk} BHK` : p.type;

    return `
      <div class="ha-prop-card">
        <div class="ha-prop-thumb">
          <img src="${p.image}" alt="${p.title}" class="ha-prop-img" loading="lazy">
          
          <div class="ha-prop-top-badges">
            ${p.isOwner ? '<span class="badge badge-owner">★ Direct Owner</span>' : ''}
            ${p.isRera ? '<span class="badge badge-rera">✓ RERA Verified</span>' : ''}
            ${p.featured ? '<span class="badge badge-featured">Featured</span>' : ''}
          </div>

          <button class="ha-prop-fav-btn ${isFav ? 'active' : ''}" onclick="toggleShortlist('${p.id}', this)" title="Save Property">
            ${isFav ? '♥' : '♡'}
          </button>

          <div class="ha-prop-price-tag">
            <div class="ha-prop-price">${formatPrice(p.price, p.category)}</div>
            ${p.pricePerSqft ? `<span>₹${p.pricePerSqft} / sq.ft</span>` : ''}
          </div>
        </div>

        <div class="ha-prop-body">
          <div class="ha-prop-type">${p.type} • ${p.status}</div>
          <h3 class="ha-prop-title" title="${p.title}">${p.title}</h3>
          
          <div class="ha-prop-loc">
            <span>📍</span> ${p.locality}, ${p.city}
          </div>

          <div class="ha-prop-specs">
            <div class="ha-prop-spec-item">
              <span>📐</span> ${p.area} sq.ft
            </div>
            ${p.bhk ? `<div class="ha-prop-spec-item"><span>🛏️</span> ${p.bhk} Beds</div>` : ''}
            ${p.bathrooms ? `<div class="ha-prop-spec-item"><span>🚿</span> ${p.bathrooms} Baths</div>` : ''}
            <div class="ha-prop-spec-item"><span>🚗</span> ${p.parking}</div>
          </div>

          <div class="ha-prop-footer">
            <div class="ha-owner-info">
              <div class="ha-owner-avatar" style="display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem; color:#0F3E32; background:#E8F5F1;">
                ${p.ownerName.charAt(0)}
              </div>
              <div>
                <div class="ha-owner-name">${p.ownerName}</div>
                <div class="ha-owner-role">${p.ownerRole}</div>
              </div>
            </div>

            <div class="ha-prop-actions">
              <button class="btn btn-sm btn-outline" onclick="openContactModal('${p.id}')">
                Contact
              </button>
              <a href="https://wa.me/${p.ownerPhone.replace(/[^0-9]/g, '')}?text=Hi%2C%20I%20am%20interested%20in%20your%20property%20listed%20on%20HelloAddress%3A%20${encodeURIComponent(p.title)}" target="_blank" class="btn-whatsapp">
                💬 WA
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Category Filter Pills
function setCategoryFilter(cat, btn) {
  selectedFilterCategory = cat;
  document.querySelectorAll('.ha-pill-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProperties();
}

// Reset All Filters
function resetAllFilters() {
  document.getElementById('searchKeyword').value = '';
  document.getElementById('searchCity').value = '';
  const topCity = document.getElementById('topCitySelect');
  const mobileCity = document.getElementById('mobileCitySelect');
  if (topCity) topCity.value = 'All';
  if (mobileCity) mobileCity.value = 'All';
  document.getElementById('searchType').value = 'All';
  document.getElementById('searchBudget').value = '';
  document.getElementById('chkDirectOwner').checked = false;
  document.getElementById('chkVerified').checked = false;
  document.getElementById('chkReadyToMove').checked = false;
  selectedBHK = 'All';
  selectedFilterCategory = 'All';
  document.querySelectorAll('.ha-bhk-chip').forEach(b => b.classList.remove('active'));
  document.querySelector('.ha-bhk-chip')?.classList.add('active');
  document.querySelectorAll('.ha-pill-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.ha-pill-btn')?.classList.add('active');
  renderProperties();
}

// District Hub Tabs Switcher
function setDistrictTab(district, btn) {
  activeDistrict = district;
  document.querySelectorAll('.ha-dist-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderDistrictLocalities(district);
}

// Render Localities Grid for Selected District
function renderDistrictLocalities(district) {
  const container = document.getElementById('districtLocalitiesGrid');
  if (!container) return;

  const locs = districtLocalities[district] || [];
  container.innerHTML = locs.map(l => `
    <div class="ha-loc-card" onclick="filterByLocality('${district}', '${l.name.split(' ')[0]}')">
      <div>
        <div class="ha-loc-name">${l.name}</div>
        <div class="ha-loc-info">${l.count} • Avg ${l.avgPrice}</div>
      </div>
      <div class="ha-loc-arrow">›</div>
    </div>
  `).join('');
}

// Filter by clicking locality shortcut
function filterByLocality(district, locality) {
  document.getElementById('searchCity').value = district;
  document.getElementById('searchKeyword').value = locality;
  renderProperties();
  document.getElementById('verifiedListingsSection')?.scrollIntoView({ behavior: 'smooth' });
}

// Shortlist / Wishlist Logic
function toggleShortlist(id, btn) {
  const index = shortlist.indexOf(id);
  if (index > -1) {
    shortlist.splice(index, 1);
    btn.innerHTML = '♡';
    btn.classList.remove('active');
  } else {
    shortlist.push(id);
    btn.innerHTML = '♥';
    btn.classList.add('active');
    showToast('Property added to your shortlist!');
  }
  localStorage.setItem('ha_shortlist', JSON.stringify(shortlist));
  updateShortlistBadge();
}

function updateShortlistBadge() {
  ['shortlistBadge', 'shortlistBadgeMobile', 'shortlistBadgeDrawer'].forEach(id => {
    const badge = document.getElementById(id);
    if (badge) badge.textContent = shortlist.length;
  });
}

function openShortlistModal() {
  const modal = document.getElementById('shortlistModal');
  const listContainer = document.getElementById('shortlistItems');
  if (!modal || !listContainer) return;

  closeModals();
  const items = propertiesData.filter(p => shortlist.includes(p.id));
  if (items.length === 0) {
    listContainer.innerHTML = '<p style="color: #64748B; text-align:center; padding: 30px;">No shortlisted properties yet. Tap the heart icon on any listing to save it here.</p>';
  } else {
    listContainer.innerHTML = items.map(p => `
      <div class="ha-shortlist-item">
        <img src="${p.image}" alt="${p.title}" class="ha-shortlist-thumb">
        <div class="ha-shortlist-info">
          <h4 class="ha-shortlist-title">${p.title}</h4>
          <div class="ha-shortlist-meta">📍 ${p.locality}, ${p.city} • <strong style="color:#0F3E32;">${formatPrice(p.price, p.category)}</strong></div>
        </div>
        <button class="btn btn-sm btn-outline ha-shortlist-btn" onclick="openContactModal('${p.id}')">Enquire</button>
      </div>
    `).join('');
  }
  openModalElement(modal);
}

// Post Property Form Submission
function handlePostProperty(e) {
  e.preventDefault();
  const title = document.getElementById('postTitle').value;
  const city = document.getElementById('postCity').value;
  const locality = document.getElementById('postLocality').value;
  const type = document.getElementById('postType').value;
  const category = document.getElementById('postCategory').value;
  const price = parseInt(document.getElementById('postPrice').value);
  const area = parseInt(document.getElementById('postArea').value);
  const bhk = parseInt(document.getElementById('postBHK').value) || null;
  const ownerName = document.getElementById('postOwnerName').value;
  const ownerPhone = document.getElementById('postOwnerPhone').value;
  const image = document.getElementById('postImage').value || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80';

  const newProp = {
    id: 'HA-' + (propertiesData.length + 101),
    title,
    city,
    locality,
    type,
    category,
    bhk,
    price,
    pricePerSqft: Math.round(price / area),
    area,
    bathrooms: bhk || 2,
    parking: '1 Dedicated',
    status: 'Ready to Move',
    isOwner: true,
    isRera: true,
    ownerName,
    ownerRole: 'Direct Owner (0% Brokerage)',
    ownerPhone,
    image,
    featured: true
  };

  propertiesData.unshift(newProp);
  closeModals();
  renderProperties();
  showToast('🎉 Congratulations! Your property has been published LIVE on HelloAddress Kerala!');
  document.getElementById('verifiedListingsSection')?.scrollIntoView({ behavior: 'smooth' });
}

// Contact Modal
function openContactModal(propId) {
  const prop = propertiesData.find(p => p.id === propId);
  if (!prop) return;

  const modal = document.getElementById('contactModal');
  const details = document.getElementById('contactPropDetails');
  if (!modal || !details) return;

  closeModals();
  details.innerHTML = `
    <div style="background:#F8FAFC; padding:16px; border-radius:8px; border:1px solid #E2E8F0; margin-bottom:16px;">
      <h4 style="font-size:1rem; font-weight:800; color:#0F172A; margin-bottom:4px;">${prop.title}</h4>
      <div style="font-size:0.86rem; color:#64748B; margin-bottom:6px;">📍 ${prop.locality}, ${prop.city}</div>
      <div style="font-size:1.15rem; font-weight:900; color:#0F3E32;">${formatPrice(prop.price, prop.category)}</div>
      <div style="font-size:0.8rem; color:#059669; font-weight:700; margin-top:4px;">Contact: ${prop.ownerName} (${prop.ownerRole})</div>
    </div>
  `;

  openModalElement(modal);
}

// Mortgage Calculator Live Logic
function initMortgageCalculator() {
  const priceInput = document.getElementById('calcLoanAmount');
  const tenureInput = document.getElementById('calcTenure');
  const interestInput = document.getElementById('calcInterest');

  if (!priceInput || !tenureInput || !interestInput) return;

  [priceInput, tenureInput, interestInput].forEach(inp => {
    inp.addEventListener('input', updateMortgageCalculations);
  });

  updateMortgageCalculations();
}

function updateMortgageCalculations() {
  const P = parseFloat(document.getElementById('calcLoanAmount').value);
  const tenureYears = parseFloat(document.getElementById('calcTenure').value);
  const annualRate = parseFloat(document.getElementById('calcInterest').value);

  // Update slider displays
  document.getElementById('calcLoanDisplay').textContent = formatPrice(P, 'Buy');
  document.getElementById('calcTenureDisplay').textContent = `${tenureYears} Years`;
  document.getElementById('calcInterestDisplay').textContent = `${annualRate}% p.a.`;

  // EMI Formula: E = P * r * (1+r)^n / ((1+r)^n - 1)
  const N = tenureYears * 12;
  const r = annualRate / 12 / 100;
  const emi = (P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1);
  const totalPayable = emi * N;
  const totalInterest = totalPayable - P;

  document.getElementById('calcMonthlyEMI').textContent = '₹' + Math.round(emi).toLocaleString('en-IN');
  document.getElementById('calcPrincipalDisplay').textContent = formatPrice(P, 'Buy');
  document.getElementById('calcInterestTotalDisplay').textContent = formatPrice(totalInterest, 'Buy');
  document.getElementById('calcTotalPayableDisplay').textContent = formatPrice(totalPayable, 'Buy');
}

// Modal Handlers
function openModalElement(modal) {
  if (!modal) return;
  modal.classList.add('open');
  document.body.classList.add('ha-modal-open');
}

function openPostModal() {
  closeModals();
  openModalElement(document.getElementById('postModal'));
}

function openAuthModal() {
  closeModals();
  openModalElement(document.getElementById('authModal'));
}

function closeModals() {
  document.querySelectorAll('.ha-modal-overlay').forEach(m => m.classList.remove('open'));
  document.body.classList.remove('ha-modal-open');
}

// Simple Toast Notification
function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'ha-toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// YouTube Video Tour Switcher
function switchYoutubeVideo(videoId, title, locationText, statsText, el) {
  const iframe = document.getElementById('mainYoutubePlayer');
  const titleEl = document.getElementById('activeVideoTitle');
  const locEl = document.getElementById('activeVideoLocation');
  const statsEl = document.getElementById('activeVideoStats');

  if (iframe) {
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
  }
  if (titleEl) {
    titleEl.textContent = title;
  }
  if (locEl) {
    locEl.textContent = `📍 ${locationText}`;
  }
  if (statsEl) {
    statsEl.textContent = statsText;
  }

  // Update active state in playlist
  document.querySelectorAll('.ha-video-item').forEach(item => {
    item.classList.remove('active');
  });
  if (el) {
    el.classList.add('active');
  }
}

// Land Advisor Registration Handlers
function openLandAdvisorModal() {
  closeModals();
  openModalElement(document.getElementById('landAdvisorModal'));
}

function handleLandAdvisorSubmit(e, formEl) {
  e.preventDefault();
  const form = formEl || e.target;
  const nameInput = form.querySelector('[name="advisorName"]');
  const advisorName = nameInput ? nameInput.value : 'Advisor';

  // Collect details
  const advisorRecord = {
    name: advisorName,
    phone: form.querySelector('[name="advisorPhone"]')?.value || '',
    email: form.querySelector('[name="advisorEmail"]')?.value || '',
    district: form.querySelector('[name="advisorDistrict"]')?.value || '',
    role: form.querySelector('[name="advisorRole"]')?.value || '',
    specialization: form.querySelector('[name="advisorSpecialization"]')?.value || '',
    registeredAt: new Date().toISOString()
  };

  try {
    const existing = JSON.parse(localStorage.getItem('bhoomika_land_advisors') || '[]');
    existing.push(advisorRecord);
    localStorage.setItem('bhoomika_land_advisors', JSON.stringify(existing));
  } catch (err) {
    console.error('Storage error:', err);
  }

  showToast(`🎉 Registration Received! Welcome ${advisorName}. Our Kerala District Partner Manager will reach out within 24 hours.`);
  form.reset();
  closeModals();
}
