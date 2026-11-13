/**
 * BHOOMIKA REAL ESTATE & LAND BANK - REALHOMES MODERN ENGINE
 * Inspired by modern.realhomes.io
 * Dynamic Listing, Half-Map Interactive Engine, Currency Converter & Property Tools
 */

// ==========================================================================
// 1. DATASET: VERIFIED KERALA REAL ESTATE & LAND LISTINGS
// ==========================================================================
const BASE_PROPERTIES = [
  {
    id: 'RH-101',
    title: '150 Cents Prime Commercial & Mixed-Use Land on NH-544',
    category: 'Commercial Spaces',
    status: 'For Sale',
    price: 180000000, // ₹18 Crores
    pricePerCent: '₹12 Lakh / Cent',
    city: 'Ernakulam',
    address: 'Direct NH-544 Frontage, Kalamassery, Kochi',
    area: '150 Cents (1.5 Acres)',
    roadWidth: '60 ft Four-Lane Frontage',
    beds: 0,
    baths: 0,
    classification: 'Dry Land (Purayidam) - Commercial NOC Ready',
    featured: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['Tar Road Frontage', 'Three-Phase Power', 'Clear Title Deeds', 'Bank Loan Eligible', 'Commercial Zone'],
    description: 'High-visibility rectangular commercial plot on NH-544 Kalamassery. Ideal for corporate IT campuses, hospital ventures, automotive dealerships, or gated commercial complexes.',
    mapCoords: { top: '56%', left: '46%' },
    advisor: {
      name: 'Rajesh Kumar Menon',
      title: 'Senior Land Advisor (Kochi)',
      phone: '+91 94960 12345',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80'
    }
  },
  {
    id: 'RH-102',
    title: '25 Acres Organic Tea & Cardamom Estate with Mountain Stream',
    category: 'Farm Land',
    status: 'For Sale',
    price: 125000000, // ₹12.5 Crores
    pricePerCent: '₹50,000 / Cent (₹50L / Acre)',
    city: 'Wayanad',
    address: 'Chembra Peak Foothills, Meppadi, Wayanad',
    area: '25 Acres (2,500 Cents)',
    roadWidth: '24 ft Tar Road Access',
    beds: 4,
    baths: 4,
    classification: 'Agricultural Estate - Organic Plantation with Bungalow',
    featured: true,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['Tar Road Frontage', 'Spring Water', 'Three-Phase Power', 'Clear Title Deeds', 'Mountain View', 'Manager Bungalow'],
    description: 'Breathtaking 25-acre organic tea and cardamom plantation with year-round freshwater mountain stream, manager bungalow, and panoramic Chembra views. Ideal for luxury eco-resort or legacy estate.',
    mapCoords: { top: '22%', left: '38%' },
    advisor: {
      name: 'Suresh Menon',
      title: 'Plantation Specialist (Wayanad)',
      phone: '+91 98470 56789',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80'
    }
  },
  {
    id: 'RH-103',
    title: '80 Cents Direct Waterfront Facing Vembanad Backwaters',
    category: 'Resort & Tourism',
    status: 'For Sale',
    price: 48000000, // ₹4.8 Crores
    pricePerCent: '₹6 Lakh / Cent',
    city: 'Alappuzha',
    address: 'Muhamma Waterfront Road, Vembanad Lake, Alappuzha',
    area: '80 Cents',
    roadWidth: '20 ft Concrete Road + Private Jetty',
    beds: 0,
    baths: 0,
    classification: 'Waterfront Purayidam with Direct Boat Access',
    featured: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['Waterfront', 'Private Boat Jetty', 'Tar Road Frontage', 'Clear Title Deeds', 'Coconut Grove'],
    description: 'Rare 120 ft direct frontage on Vembanad Lake. Mature coconut palms, stone revetment protection, and private boat jetty. Exceptional boutique hospitality or wellness resort potential.',
    mapCoords: { top: '64%', left: '42%' },
    advisor: {
      name: 'Rajesh Kumar Menon',
      title: 'Senior Land Advisor',
      phone: '+91 94960 12345',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80'
    }
  },
  {
    id: 'RH-104',
    title: '28 Cents Gated Villa Plot Layout near TechnoPark Phase 3',
    category: 'Land / Plots',
    status: 'For Sale',
    price: 33600000, // ₹3.36 Crores
    pricePerCent: '₹12 Lakh / Cent',
    city: 'Thiruvananthapuram',
    address: 'Near TechnoPark Phase 3, Kazhakkoottam, Trivandrum',
    area: '28 Cents (Divisible into 7 / 10 Cents)',
    roadWidth: '30 ft Paved Private Layout Road',
    beds: 0,
    baths: 0,
    classification: 'Dry Land (Purayidam) - Gated Layout',
    featured: false,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['Tar Road Frontage', 'Compound Wall', 'Three-Phase Power', 'Clear Title Deeds', 'Borewell & Well Water'],
    description: 'Elevated red soil land 2.5 km from TechnoPark Phase 3. Features 7-ft stone perimeter compound wall, sweet groundwater well, and paved layout road.',
    mapCoords: { top: '88%', left: '58%' },
    advisor: {
      name: 'Anoop Nair',
      title: 'Land Advisor (Trivandrum)',
      phone: '+91 94460 78910',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80'
    }
  },
  {
    id: 'RH-105',
    title: 'Ultra-Luxury Waterfront Villa with Private Infinity Pool',
    category: 'Villas & Houses',
    status: 'For Sale',
    price: 68500000, // ₹6.85 Crores
    pricePerCent: '₹22 Lakh / Cent (with 4,800 sq ft Villa)',
    city: 'Ernakulam',
    address: 'Panangad Island, Nettoor Backwaters, Kochi',
    area: '32 Cents (4,800 Sq Ft Built-up)',
    roadWidth: '24 ft Paved Road + Boat Mooring',
    beds: 5,
    baths: 6,
    classification: 'Waterfront Residential Villa',
    featured: true,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['Private Infinity Pool', 'Waterfront', 'Smart Home', 'Tar Road Frontage', 'Three-Phase Power', 'Clear Title Deeds'],
    description: 'Architectural masterpiece villa perched on Panangad island backwaters with zero-edge pool, private boat mooring, bespoke Italian kitchen, and 4 luxury suites.',
    mapCoords: { top: '57%', left: '48%' },
    advisor: {
      name: 'Rajesh Kumar Menon',
      title: 'Senior Broker',
      phone: '+91 94960 12345',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80'
    }
  },
  {
    id: 'RH-106',
    title: 'Marine Drive Skyline Luxury Triplex Sky Penthouse',
    category: 'Flats & Apartments',
    status: 'For Sale',
    price: 42000000, // ₹4.2 Crores
    pricePerCent: '₹11,000 / Sq Ft',
    city: 'Ernakulam',
    address: 'Marine Drive Waterfront, Kochi, Kerala 682031',
    area: '3,800 Sq Ft (Triplex)',
    roadWidth: '100 ft Marine Drive Boulevard',
    beds: 4,
    baths: 5,
    classification: 'Luxury High-Rise Penthouse',
    featured: false,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['Arabian Sea View', 'Private Terrace', 'Gym & Club', 'Three-Phase Power', 'Bank Loan Eligible'],
    description: 'Spectacular triplex penthouse commanding panoramic vistas of Kochi harbour and the Arabian Sea. Features 1,200 sq ft private terrace and club privileges.',
    mapCoords: { top: '55%', left: '45%' },
    advisor: {
      name: 'Rajesh Kumar Menon',
      title: 'Senior Broker',
      phone: '+91 94960 12345',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80'
    }
  },
  {
    id: 'RH-107',
    title: '18 Acres Hill Resort Development Land with 360° Valley Panorama',
    category: 'Development Projects',
    status: 'For Sale',
    price: 90000000, // ₹9 Crores
    pricePerCent: '₹50,000 / Cent (₹50L / Acre)',
    city: 'Idukki',
    address: 'Elappara - Vagamon Scenic Highway, Idukki District',
    area: '18 Acres (1,800 Cents)',
    roadWidth: '22 ft Tar Road',
    beds: 0,
    baths: 0,
    classification: 'Hillside Tourism / Resort Approved',
    featured: true,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['360° Valley Views', 'Cool Climate', 'Tar Road Frontage', 'Spring Water', 'Clear Title Deeds'],
    description: 'Spectacular plateau and gentle rolling hills at 3,500 ft elevation. Uninterrupted view of mist valleys and pine plantations. Pre-approved for eco-resort development.',
    mapCoords: { top: '60%', left: '56%' },
    advisor: {
      name: 'Suresh Menon',
      title: 'Land Advisor',
      phone: '+91 98470 56789',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80'
    }
  },
  {
    id: 'RH-108',
    title: '12 Acres Approved Industrial Land near Seaport-Airport Road',
    category: 'Industrial Land',
    status: 'For Sale',
    price: 240000000, // ₹24 Crores
    pricePerCent: '₹20 Lakh / Cent',
    city: 'Ernakulam',
    address: 'Seaport-Airport Road Extension, Kalamassery-Kinfra Belt',
    area: '12 Acres (1,200 Cents)',
    roadWidth: '80 ft Container Lorry Access',
    beds: 0,
    baths: 0,
    classification: 'Industrial Zone (Kinfra Adjoining)',
    featured: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['Heavy Vehicle Access', 'Industrial HT Power', 'Clear Title Deeds', 'Tar Road Frontage'],
    description: 'Levelled rectangular industrial plot adjoining Kochi international logistic corridor. Complete heavy container truck turnaround, HT power substation feasibility, and immediate registration.',
    mapCoords: { top: '54%', left: '49%' },
    advisor: {
      name: 'Rajesh Kumar Menon',
      title: 'Senior Land Advisor',
      phone: '+91 94960 12345',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80'
    }
  },
  {
    id: 'RH-109',
    title: '4 BHK Luxury Courtyard Villa in Sobha Silver Spring',
    category: 'Villas & Houses',
    status: 'For Rent',
    price: 95000, // ₹95,000 / month
    pricePerCent: 'Monthly Rental',
    city: 'Thrissur',
    address: 'Puzhakkal Padam, Sobha City, Thrissur',
    area: '3,400 Sq Ft (12 Cents Plot)',
    roadWidth: '30 ft Internal Paved Avenue',
    beds: 4,
    baths: 4,
    classification: 'Gated Luxury Villa Community',
    featured: false,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['Swimming Pool', 'Clubhouse', '24x7 Security', 'Tar Road Frontage', 'Three-Phase Power'],
    description: 'Fully furnished traditional Kerala nalukettu courtyard villa within Sobha City. Access to clubhouse, Olympic-size pool, squash court, and supermarket.',
    mapCoords: { top: '48%', left: '44%' },
    advisor: {
      name: 'Priya Nambiar',
      title: 'Residential Property Specialist',
      phone: '+91 98460 33445',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80'
    }
  },
  {
    id: 'RH-110',
    title: '45 Cents Highway Commercial Plot near Calicut Bypass',
    category: 'Commercial Spaces',
    status: 'For Sale',
    price: 67500000, // ₹6.75 Crores
    pricePerCent: '₹15 Lakh / Cent',
    city: 'Kozhikode',
    address: 'NH-66 Calicut Bypass, Palazhi, Kozhikode',
    area: '45 Cents',
    roadWidth: '45 ft Highway Frontage',
    beds: 0,
    baths: 0,
    classification: 'Commercial Purayidam - Clear Title',
    featured: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['Tar Road Frontage', 'Three-Phase Power', 'Clear Title Deeds', 'Bank Loan Eligible'],
    description: 'Rectangular dry land plot directly adjacent to the newly widened 6-lane NH-66 bypass. Ideal for corporate headquarters, automobile showroom, or diagnostics centre.',
    mapCoords: { top: '34%', left: '36%' },
    advisor: {
      name: 'K. Balakrishnan',
      title: 'Commercial Specialist (Malabar)',
      phone: '+91 94471 22334',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80'
    }
  }
];

// ==========================================================================
// 2. STATE & STORAGE MANAGEMENT
// ==========================================================================
// Merge base dataset with any locally submitted custom properties
const storedCustomListings = JSON.parse(localStorage.getItem('bhoomika_custom_listings') || '[]');
let allProperties = [...storedCustomListings, ...BASE_PROPERTIES];

let favorites = JSON.parse(localStorage.getItem('bhoomika_rh_favs') || '[]');
let compareList = [];
let currentLayout = 'grid'; // 'grid', 'list', 'half-map'
let currentCurrency = 'INR';

const CURRENCY_CONFIG = {
  INR: { rate: 1, symbol: '₹', code: 'INR' },
  USD: { rate: 0.012, symbol: '$', code: 'USD' },
  AED: { rate: 0.044, symbol: 'AED ', code: 'AED' },
  GBP: { rate: 0.0094, symbol: '£', code: 'GBP' },
  EUR: { rate: 0.011, symbol: '€', code: 'EUR' }
};

let filterState = {
  status: 'All',
  category: 'All',
  location: '',
  maxBudget: '',
  minBeds: '',
  keyword: '',
  amenities: []
};

let currentSort = 'default';

// ==========================================================================
// 3. CURRENCY FORMATTER
// ==========================================================================
function formatPrice(amountInINR, isRent = false) {
  const conf = CURRENCY_CONFIG[currentCurrency] || CURRENCY_CONFIG.INR;
  const converted = amountInINR * conf.rate;

  if (currentCurrency === 'INR') {
    if (isRent) {
      return `₹${Math.round(amountInINR).toLocaleString('en-IN')}/mo`;
    }
    if (amountInINR >= 10000000) {
      const cr = (amountInINR / 10000000).toFixed(2);
      return `₹${cr.replace(/\.00$/, '')} Crore`;
    } else if (amountInINR >= 100000) {
      const lk = (amountInINR / 100000).toFixed(2);
      return `₹${lk.replace(/\.00$/, '')} Lakh`;
    } else {
      return `₹${amountInINR.toLocaleString('en-IN')}`;
    }
  }

  // International Formats
  const formattedNum = Math.round(converted).toLocaleString('en-US');
  if (isRent) {
    return `${conf.symbol}${formattedNum}/mo`;
  }
  return `${conf.symbol}${formattedNum}`;
}

function setCurrency(curr) {
  currentCurrency = curr;
  renderProperties();
  showToast(`Currency changed to ${curr}`);
}

// ==========================================================================
// 4. PROPERTY RENDERING (GRID / LIST / HALF-MAP)
// ==========================================================================
function getFilteredProperties() {
  return allProperties.filter(prop => {
    // Status Filter
    if (filterState.status !== 'All') {
      if (filterState.status === 'Land Bank') {
        if (!prop.category.includes('Land') && !prop.category.includes('Farm')) return false;
      } else if (prop.status !== filterState.status) {
        return false;
      }
    }

    // Category Filter
    if (filterState.category !== 'All' && prop.category !== filterState.category) {
      return false;
    }

    // Location / District Filter
    if (filterState.location && prop.city.toLowerCase() !== filterState.location.toLowerCase()) {
      return false;
    }

    // Budget Filter
    if (filterState.maxBudget && prop.price > parseFloat(filterState.maxBudget)) {
      return false;
    }

    // Beds Filter
    if (filterState.minBeds && prop.beds < parseInt(filterState.minBeds, 10)) {
      return false;
    }

    // Keyword Filter
    if (filterState.keyword) {
      const q = filterState.keyword.toLowerCase();
      const match = prop.title.toLowerCase().includes(q) ||
                    prop.city.toLowerCase().includes(q) ||
                    prop.address.toLowerCase().includes(q) ||
                    prop.id.toLowerCase().includes(q);
      if (!match) return false;
    }

    // Amenities Checkbox Filter
    if (filterState.amenities.length > 0) {
      const hasAll = filterState.amenities.every(amenity => prop.amenities.includes(amenity));
      if (!hasAll) return false;
    }

    return true;
  });
}

function sortProperties(list) {
  const sorted = [...list];
  switch (currentSort) {
    case 'featured':
      return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'newest':
      return sorted.reverse();
    default:
      return sorted;
  }
}

function renderProperties() {
  const container = document.getElementById('propertiesGrid');
  const countBadge = document.getElementById('resultsCount');
  if (!container) return;

  const filtered = sortProperties(getFilteredProperties());

  if (countBadge) {
    countBadge.innerText = `Showing ${filtered.length} of ${allProperties.length} Properties`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: var(--rh-white); border-radius: var(--rh-radius-lg); border: 1px dashed var(--rh-gray-300);">
        <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
        <h3 style="font-size: 1.4rem; color: var(--rh-dark); margin-bottom: 8px;">No Properties Match Your Search</h3>
        <p style="color: var(--rh-gray-500); max-width: 450px; margin: 0 auto 20px;">
          Try adjusting your budget, clearing selected amenities, or browsing all Kerala locations.
        </p>
        <button class="btn btn-primary btn-sm" onclick="resetAllFilters()">Reset All Filters ⟳</button>
      </div>
    `;
    updateSimulatedMap([]);
    return;
  }

  container.className = `rh-properties-grid ${currentLayout === 'list' ? 'list-view' : ''}`;

  container.innerHTML = filtered.map(prop => {
    const isFav = favorites.includes(prop.id);
    const isCompare = compareList.includes(prop.id);
    const isRent = prop.status.toLowerCase().includes('rent') || prop.status.toLowerCase().includes('lease');
    const formattedPrice = formatPrice(prop.price, isRent);

    return `
      <article class="rh-property-card" id="card-${prop.id}" onmouseenter="highlightMapPin('${prop.id}')" onmouseleave="unhighlightMapPin('${prop.id}')">
        <!-- Card Thumbnail & Badges -->
        <div class="rh-card-thumb-wrap">
          <img src="${prop.image}" alt="${prop.title}" class="rh-card-thumb" loading="lazy">
          
          <div class="rh-card-badges-top">
            ${prop.featured ? '<span class="rh-badge rh-badge-featured">⭐ Featured</span>' : ''}
            <span class="rh-badge rh-badge-status">${prop.status}</span>
            <span class="rh-badge rh-badge-verified">✓ Title Verified</span>
          </div>

          <div class="rh-card-actions-top">
            <button class="rh-card-action-btn ${isFav ? 'active-fav' : ''}" onclick="toggleFavorite('${prop.id}', event)" title="Save to Favorites">
              ♥
            </button>
            <button class="rh-card-action-btn" onclick="openQuickView('${prop.id}', event)" title="Quick View">
              👁
            </button>
            <button class="rh-card-action-btn ${isCompare ? 'active-fav' : ''}" onclick="toggleCompare('${prop.id}', event)" title="Compare Property">
              ⇄
            </button>
          </div>

          <div class="rh-card-price-tag">
            <span class="rh-card-price">${formattedPrice}</span>
            ${prop.pricePerCent ? `<span class="rh-card-price-unit"> (${prop.pricePerCent})</span>` : ''}
          </div>
        </div>

        <!-- Card Body Details -->
        <div class="rh-card-body">
          <span class="rh-card-type-tag">${prop.category}</span>
          <h3 class="rh-card-title">
            <a href="javascript:void(0)" onclick="openQuickView('${prop.id}')">${prop.title}</a>
          </h3>

          <div class="rh-card-location">
            <span>📍</span>
            <span>${prop.address}</span>
          </div>

          <!-- RealHomes Spec Row -->
          <div class="rh-card-specs">
            <div class="rh-spec-item" title="Area / Extent">
              <span class="rh-spec-icon">📐</span>
              <span>${prop.area}</span>
            </div>
            ${prop.beds > 0 ? `
              <div class="rh-spec-item" title="Bedrooms">
                <span class="rh-spec-icon">🛏️</span>
                <span>${prop.beds} Beds</span>
              </div>
            ` : `
              <div class="rh-spec-item" title="Road Width">
                <span class="rh-spec-icon">🛣️</span>
                <span>${prop.roadWidth.split(' ')[0]} ${prop.roadWidth.split(' ')[1] || 'Road'}</span>
              </div>
            `}
            <div class="rh-spec-item" title="Zoning / Classification">
              <span class="rh-spec-icon">🏛️</span>
              <span>${prop.classification.split(' - ')[0].replace('Dry Land (Purayidam)', 'Purayidam')}</span>
            </div>
          </div>

          <!-- Card Agent Footer -->
          <div class="rh-card-footer">
            <div class="rh-agent-mini">
              <img src="${prop.advisor.avatar}" alt="${prop.advisor.name}" class="rh-agent-avatar">
              <div>
                <div class="rh-agent-name">${prop.advisor.name}</div>
                <div class="rh-agent-role">${prop.advisor.title}</div>
              </div>
            </div>

            <div class="rh-card-footer-actions">
              <a href="tel:${prop.advisor.phone}" class="rh-quick-btn" title="Call Land Advisor">📞</a>
              <a href="https://wa.me/919496012345?text=Inquiry%20regarding%20${encodeURIComponent(prop.title)}%20(ID:%20${prop.id})" target="_blank" class="rh-quick-btn" title="WhatsApp Advisor">💬</a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  updateSimulatedMap(filtered);
}

// ==========================================================================
// 5. HALF-MAP VIEW & INTERACTIVE SIMULATED MAP
// ==========================================================================
function setLayout(layoutType) {
  currentLayout = layoutType;
  const gridBtn = document.getElementById('btnViewGrid');
  const listBtn = document.getElementById('btnViewList');
  const halfMapBtn = document.getElementById('btnViewHalfMap');
  const halfMapWrapper = document.getElementById('halfMapWrapper');
  const normalWrapper = document.getElementById('normalWrapper');

  [gridBtn, listBtn, halfMapBtn].forEach(b => b && b.classList.remove('active'));

  if (layoutType === 'grid') {
    if (gridBtn) gridBtn.classList.add('active');
    if (halfMapWrapper) halfMapWrapper.style.display = 'none';
    if (normalWrapper) normalWrapper.style.display = 'block';
  } else if (layoutType === 'list') {
    if (listBtn) listBtn.classList.add('active');
    if (halfMapWrapper) halfMapWrapper.style.display = 'none';
    if (normalWrapper) normalWrapper.style.display = 'block';
  } else if (layoutType === 'half-map') {
    if (halfMapBtn) halfMapBtn.classList.add('active');
    if (normalWrapper) normalWrapper.style.display = 'none';
    if (halfMapWrapper) halfMapWrapper.style.display = 'grid';
  }

  renderProperties();
  if (layoutType === 'half-map') {
    renderHalfMapProperties();
  }
}

function updateSimulatedMap(propertiesList) {
  const mapContainer = document.getElementById('simulatedMap');
  if (!mapContainer) return;

  mapContainer.innerHTML = propertiesList.map(prop => {
    const isRent = prop.status.toLowerCase().includes('rent');
    const priceText = formatPrice(prop.price, isRent).split(' ')[0];

    return `
      <div class="rh-map-pin" id="pin-${prop.id}" style="top: ${prop.mapCoords.top}; left: ${prop.mapCoords.left};" onclick="focusPropertyCard('${prop.id}')" title="${prop.title}">
        <div class="rh-pin-bubble ${prop.featured ? 'gold' : ''}">
          <span>📍</span> ${priceText}
        </div>
        <div class="rh-pin-tail"></div>
      </div>
    `;
  }).join('');
}

function renderHalfMapProperties() {
  const container = document.getElementById('halfMapListingsContainer');
  if (!container) return;

  const filtered = sortProperties(getFilteredProperties());

  container.innerHTML = filtered.map(prop => {
    const isRent = prop.status.toLowerCase().includes('rent');
    const formattedPrice = formatPrice(prop.price, isRent);
    return `
      <article class="rh-property-card" id="hcard-${prop.id}" style="margin-bottom: 20px;" onmouseenter="highlightMapPin('${prop.id}')" onmouseleave="unhighlightMapPin('${prop.id}')">
        <div class="rh-card-thumb-wrap" style="height: 200px;">
          <img src="${prop.image}" alt="${prop.title}" class="rh-card-thumb">
          <div class="rh-card-badges-top">
            <span class="rh-badge rh-badge-status">${prop.status}</span>
          </div>
          <div class="rh-card-price-tag">
            <span class="rh-card-price">${formattedPrice}</span>
          </div>
        </div>
        <div class="rh-card-body">
          <span class="rh-card-type-tag">${prop.category}</span>
          <h4 class="rh-card-title"><a href="javascript:void(0)" onclick="openQuickView('${prop.id}')">${prop.title}</a></h4>
          <div class="rh-card-location"><span>📍</span><span>${prop.address}</span></div>
          <div class="rh-card-specs">
            <div class="rh-spec-item"><span>📐</span><span>${prop.area}</span></div>
            <div class="rh-spec-item"><span>🏛️</span><span>${prop.classification.split(' - ')[0]}</span></div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function highlightMapPin(propId) {
  const pin = document.getElementById(`pin-${propId}`);
  if (pin) pin.classList.add('active');
}

function unhighlightMapPin(propId) {
  const pin = document.getElementById(`pin-${propId}`);
  if (pin) pin.classList.remove('active');
}

function focusPropertyCard(propId) {
  const targetCard = document.getElementById(`card-${propId}`) || document.getElementById(`hcard-${propId}`);
  if (targetCard) {
    targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    targetCard.style.outline = '3px solid var(--rh-accent)';
    setTimeout(() => { targetCard.style.outline = 'none'; }, 2000);
  }
}

// ==========================================================================
// 6. SEARCH & FILTER HANDLERS
// ==========================================================================
function setSearchStatus(status, element) {
  filterState.status = status;
  document.querySelectorAll('.rh-tab-btn').forEach(b => {
    b.classList.remove('active');
    if (!element && b.innerText.toLowerCase().includes(status.toLowerCase())) {
      b.classList.add('active');
    }
  });
  if (element) element.classList.add('active');
  renderProperties();
}

function setCategoryFilter(category, element) {
  filterState.category = category;
  document.querySelectorAll('.rh-cat-pill').forEach(p => p.classList.remove('active'));
  if (element) element.classList.add('active');
  renderProperties();
  scrollToProperties();
}

function applySearchForm() {
  const keywordInput = document.getElementById('searchKeyword');
  const locationSelect = document.getElementById('searchLocation');
  const typeSelect = document.getElementById('searchType');
  const budgetSelect = document.getElementById('searchBudget');
  const bedsSelect = document.getElementById('searchBeds');

  filterState.keyword = keywordInput ? keywordInput.value.trim() : '';
  filterState.location = locationSelect ? locationSelect.value : '';
  filterState.category = (typeSelect && typeSelect.value) ? typeSelect.value : 'All';
  filterState.maxBudget = budgetSelect ? budgetSelect.value : '';
  filterState.minBeds = bedsSelect ? bedsSelect.value : '';

  // Collect checked amenities
  const checkedBoxes = document.querySelectorAll('.rh-custom-checkbox input:checked');
  filterState.amenities = Array.from(checkedBoxes).map(cb => cb.value);

  renderProperties();
  scrollToProperties();
  showToast('Search applied!');
}

function toggleAdvancedFeatures() {
  const drawer = document.getElementById('advancedFeaturesDrawer');
  const btn = document.getElementById('featuresToggleBtn');
  if (!drawer) return;
  drawer.classList.toggle('open');
  if (btn) {
    btn.innerHTML = drawer.classList.contains('open') 
      ? '▲ Fewer Search Options' 
      : '▼ More Features & Amenities';
  }
}

function handleSortChange(sortVal) {
  currentSort = sortVal;
  renderProperties();
}

function resetAllFilters() {
  filterState = {
    status: 'All',
    category: 'All',
    location: '',
    maxBudget: '',
    minBeds: '',
    keyword: '',
    amenities: []
  };

  // Reset inputs
  const kw = document.getElementById('searchKeyword'); if (kw) kw.value = '';
  const loc = document.getElementById('searchLocation'); if (loc) loc.value = '';
  const typ = document.getElementById('searchType'); if (typ) typ.value = '';
  const bud = document.getElementById('searchBudget'); if (bud) bud.value = '';
  const bed = document.getElementById('searchBeds'); if (bed) bed.value = '';

  document.querySelectorAll('.rh-custom-checkbox input').forEach(cb => cb.checked = false);
  document.querySelectorAll('.rh-tab-btn').forEach(b => b.classList.remove('active'));
  const firstTab = document.querySelector('.rh-tab-btn'); if (firstTab) firstTab.classList.add('active');

  document.querySelectorAll('.rh-cat-pill').forEach(p => p.classList.remove('active'));
  const firstPill = document.querySelector('.rh-cat-pill'); if (firstPill) firstPill.classList.add('active');

  renderProperties();
  showToast('Filters reset to default.');
}

function scrollToProperties() {
  const target = document.getElementById('featuredListings');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==========================================================================
// 7. FAVORITES & WISHLIST ENGINE
// ==========================================================================
function toggleFavorite(propId, event) {
  if (event) event.stopPropagation();
  const index = favorites.indexOf(propId);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast('Removed from Wishlist');
  } else {
    favorites.push(propId);
    showToast('Saved to Wishlist ♥');
  }

  localStorage.setItem('bhoomika_rh_favs', JSON.stringify(favorites));
  updateWishlistBadge();
  renderProperties();
}

function updateWishlistBadge() {
  const badges = document.querySelectorAll('.wishlist-count-badge');
  badges.forEach(b => b.innerText = favorites.length);
}

function openWishlistModal() {
  const modal = document.getElementById('wishlistModal');
  const container = document.getElementById('wishlistItemsContainer');
  if (!modal || !container) return;

  const favProperties = allProperties.filter(p => favorites.includes(p.id));

  if (favProperties.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px;">
        <span style="font-size: 3rem;">♥</span>
        <h3 style="margin-top: 10px;">Your Wishlist is Empty</h3>
        <p style="color: var(--rh-gray-500); margin-top: 6px;">Click the heart icon on any property card to save it for later.</p>
      </div>
    `;
  } else {
    container.innerHTML = favProperties.map(p => `
      <div style="display: flex; gap: 14px; align-items: center; padding: 12px 0; border-bottom: 1px solid var(--rh-gray-200);">
        <img src="${p.image}" alt="${p.title}" style="width: 80px; height: 60px; object-fit: cover; border-radius: 6px;">
        <div style="flex-grow: 1;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--rh-dark);">${p.title}</h4>
          <span style="color: var(--rh-primary); font-weight: 800; font-size: 0.9rem;">${formatPrice(p.price)}</span>
          <span style="color: var(--rh-gray-500); font-size: 0.8rem; margin-left: 8px;">📍 ${p.city}</span>
        </div>
        <button class="btn btn-outline btn-sm" onclick="openQuickView('${p.id}'); closeModals();">View</button>
        <button style="background: none; border: none; color: var(--rh-danger); font-size: 1.2rem; cursor: pointer;" onclick="toggleFavorite('${p.id}'); openWishlistModal();" title="Remove">✕</button>
      </div>
    `).join('');
  }

  modal.classList.add('open');
}

// ==========================================================================
// 8. SIDE-BY-SIDE PROPERTY COMPARISON
// ==========================================================================
function toggleCompare(propId, event) {
  if (event) event.stopPropagation();
  const idx = compareList.indexOf(propId);
  if (idx > -1) {
    compareList.splice(idx, 1);
    showToast('Removed from Comparison');
  } else {
    if (compareList.length >= 4) {
      alert('You can compare a maximum of 4 properties at a time.');
      return;
    }
    compareList.push(propId);
    showToast('Added to Comparison ⇄');
  }

  updateCompareBadge();
  renderProperties();
}

function updateCompareBadge() {
  const badge = document.getElementById('compareCountBadge');
  if (badge) badge.innerText = compareList.length;
}

function openComparisonModal() {
  const modal = document.getElementById('compareModal');
  const tableContainer = document.getElementById('compareTableContainer');
  if (!modal || !tableContainer) return;

  const compareItems = allProperties.filter(p => compareList.includes(p.id));

  if (compareItems.length === 0) {
    tableContainer.innerHTML = `
      <div style="text-align: center; padding: 40px 10px;">
        <span style="font-size: 3rem;">⇄</span>
        <h3 style="margin-top: 10px;">No Properties Selected for Comparison</h3>
        <p style="color: var(--rh-gray-500); margin-top: 6px;">Click the ⇄ icon on up to 4 property cards to view them side-by-side.</p>
      </div>
    `;
  } else {
    tableContainer.innerHTML = `
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; min-width: 600px; text-align: left;">
          <thead>
            <tr style="border-bottom: 2px solid var(--rh-gray-200);">
              <th style="padding: 12px; width: 140px; color: var(--rh-gray-500);">Specs</th>
              ${compareItems.map(p => `
                <th style="padding: 12px; min-width: 180px;">
                  <img src="${p.image}" alt="${p.title}" style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px; margin-bottom: 8px;">
                  <div style="font-size: 0.92rem; font-weight: 700; color: var(--rh-dark);">${p.title}</div>
                  <div style="color: var(--rh-primary); font-weight: 800; font-size: 1rem; margin-top: 4px;">${formatPrice(p.price)}</div>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--rh-gray-200);">
              <td style="padding: 10px; font-weight: 700; color: var(--rh-gray-700);">Category</td>
              ${compareItems.map(p => `<td style="padding: 10px;">${p.category}</td>`).join('')}
            </tr>
            <tr style="border-bottom: 1px solid var(--rh-gray-200);">
              <td style="padding: 10px; font-weight: 700; color: var(--rh-gray-700);">Location</td>
              ${compareItems.map(p => `<td style="padding: 10px;">${p.city} (${p.address.split(',')[1] || p.city})</td>`).join('')}
            </tr>
            <tr style="border-bottom: 1px solid var(--rh-gray-200);">
              <td style="padding: 10px; font-weight: 700; color: var(--rh-gray-700);">Area / Extent</td>
              ${compareItems.map(p => `<td style="padding: 10px; font-weight: 600;">${p.area}</td>`).join('')}
            </tr>
            <tr style="border-bottom: 1px solid var(--rh-gray-200);">
              <td style="padding: 10px; font-weight: 700; color: var(--rh-gray-700);">Road Access</td>
              ${compareItems.map(p => `<td style="padding: 10px;">${p.roadWidth}</td>`).join('')}
            </tr>
            <tr style="border-bottom: 1px solid var(--rh-gray-200);">
              <td style="padding: 10px; font-weight: 700; color: var(--rh-gray-700);">Classification</td>
              ${compareItems.map(p => `<td style="padding: 10px; font-size: 0.85rem;">${p.classification}</td>`).join('')}
            </tr>
            <tr style="border-bottom: 1px solid var(--rh-gray-200);">
              <td style="padding: 10px; font-weight: 700; color: var(--rh-gray-700);">Advisor</td>
              ${compareItems.map(p => `<td style="padding: 10px;">${p.advisor.name}</td>`).join('')}
            </tr>
            <tr>
              <td style="padding: 10px;"></td>
              ${compareItems.map(p => `
                <td style="padding: 10px;">
                  <button class="btn btn-primary btn-sm" style="width: 100%;" onclick="openQuickView('${p.id}'); closeModals();">View Details</button>
                </td>
              `).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }

  modal.classList.add('open');
}

// ==========================================================================
// 9. QUICK VIEW MODAL
// ==========================================================================
function openQuickView(propId, event) {
  if (event) event.stopPropagation();
  const prop = allProperties.find(p => p.id === propId);
  if (!prop) return;

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 24px;">
      <div>
        <img src="${prop.image}" alt="${prop.title}" style="width: 100%; height: 320px; object-fit: cover; border-radius: var(--rh-radius-md); margin-bottom: 14px;">
        <div style="display: flex; gap: 8px;">
          ${(prop.gallery || []).map(img => `
            <img src="${img}" style="width: 80px; height: 60px; object-fit: cover; border-radius: 4px; cursor: pointer;" onclick="this.parentElement.previousElementSibling.src = this.src;">
          `).join('')}
        </div>
      </div>

      <div style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <span class="rh-badge rh-badge-status" style="margin-bottom: 8px;">${prop.status}</span>
          <h2 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--rh-dark); margin-bottom: 6px;">${prop.title}</h2>
          <div style="color: var(--rh-gray-500); font-size: 0.9rem; margin-bottom: 12px;">📍 ${prop.address}</div>
          
          <div style="font-family: var(--font-heading); font-size: 1.7rem; font-weight: 900; color: var(--rh-primary); margin-bottom: 16px;">
            ${formatPrice(prop.price)}
            <span style="font-size: 0.85rem; color: var(--rh-accent); font-weight: 600;">(${prop.pricePerCent})</span>
          </div>

          <p style="font-size: 0.9rem; color: var(--rh-gray-600); line-height: 1.6; margin-bottom: 18px;">
            ${prop.description}
          </p>

          <div style="background: var(--rh-gray-100); padding: 14px; border-radius: var(--rh-radius-md); margin-bottom: 20px;">
            <div style="font-weight: 700; font-size: 0.85rem; margin-bottom: 6px;">Property Highlights:</div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${prop.amenities.map(a => `<span style="background: var(--rh-white); padding: 3px 10px; border-radius: var(--rh-radius-full); font-size: 0.8rem; font-weight: 600;">✓ ${a}</span>`).join('')}
            </div>
          </div>
        </div>

        <div style="border-top: 1px solid var(--rh-gray-200); padding-top: 14px; display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <img src="${prop.advisor.avatar}" style="width: 44px; height: 44px; border-radius: 50%;">
            <div>
              <div style="font-weight: 700; font-size: 0.92rem;">${prop.advisor.name}</div>
              <div style="font-size: 0.78rem; color: var(--rh-gray-500);">${prop.advisor.phone}</div>
            </div>
          </div>
          <button class="btn btn-primary btn-sm" onclick="alert('Inquiry dispatched! Advisor ${prop.advisor.name} will call you shortly.'); closeModals();">Schedule Site Visit</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

// ==========================================================================
// 10. REALHOMES FRONT-END PROPERTY SUBMISSION ENGINE
// ==========================================================================
function handlePropertySubmit(event) {
  event.preventDefault();

  const title = document.getElementById('subTitle').value;
  const category = document.getElementById('subCategory').value;
  const status = document.getElementById('subStatus').value;
  const price = parseFloat(document.getElementById('subPrice').value);
  const city = document.getElementById('subCity').value;
  const address = document.getElementById('subAddress').value;
  const area = document.getElementById('subArea').value;
  const roadWidth = document.getElementById('subRoadWidth').value || '30 ft Road Frontage';
  const desc = document.getElementById('subDescription').value;
  const image = document.getElementById('subImageUrl').value || 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80';

  const newProperty = {
    id: `RH-${Math.floor(1000 + Math.random() * 9000)}`,
    title: title,
    category: category,
    status: status,
    price: price,
    pricePerCent: 'Verified Listing',
    city: city,
    address: address,
    area: area,
    roadWidth: roadWidth,
    beds: category.includes('Villa') ? 4 : (category.includes('Apartment') ? 3 : 0),
    baths: category.includes('Villa') ? 4 : (category.includes('Apartment') ? 3 : 0),
    classification: 'Verified Land Bank Parcel',
    featured: true,
    rating: 5.0,
    image: image,
    gallery: [image],
    amenities: ['Clear Title Deeds', 'Tar Road Frontage', 'Three-Phase Power'],
    description: desc,
    mapCoords: { top: '50%', left: '48%' },
    advisor: {
      name: 'Kerala Land Bank Desk',
      title: 'Verified Listing',
      phone: '+91 94960 12345',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80'
    }
  };

  // Prepend to active dataset
  allProperties.unshift(newProperty);

  // Persist custom listing to localStorage
  const existingCustom = JSON.parse(localStorage.getItem('bhoomika_custom_listings') || '[]');
  existingCustom.unshift(newProperty);
  localStorage.setItem('bhoomika_custom_listings', JSON.stringify(existingCustom));

  closeModals();
  renderProperties();
  scrollToProperties();

  showToast(`🎉 Property "${title}" published successfully!`);
}

// ==========================================================================
// 11. MORTGAGE & LOAN CALCULATOR ENGINE
// ==========================================================================
function updateMortgageCalculator() {
  const priceInput = document.getElementById('calcPrice');
  const downPaymentInput = document.getElementById('calcDownPayment');
  const tenureInput = document.getElementById('calcTenure');
  const interestInput = document.getElementById('calcInterest');

  if (!priceInput || !downPaymentInput || !tenureInput || !interestInput) return;

  const price = parseFloat(priceInput.value);
  const downPaymentPct = parseFloat(downPaymentInput.value);
  const tenureYears = parseInt(tenureInput.value, 10);
  const annualInterest = parseFloat(interestInput.value);

  // Update slider label tags
  document.getElementById('calcPriceVal').innerText = `₹${(price / 100000).toFixed(0)} Lakh`;
  document.getElementById('calcDownPaymentVal').innerText = `${downPaymentPct}% (₹${((price * downPaymentPct / 100) / 100000).toFixed(1)}L)`;
  document.getElementById('calcTenureVal').innerText = `${tenureYears} Years`;
  document.getElementById('calcInterestVal').innerText = `${annualInterest}% p.a.`;

  // Financial EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const principal = price * (1 - downPaymentPct / 100);
  const monthlyRate = annualInterest / (12 * 100);
  const months = tenureYears * 12;

  let emi = 0;
  if (monthlyRate > 0) {
    emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  } else {
    emi = principal / months;
  }

  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  document.getElementById('calcMonthlyEMI').innerText = `₹${Math.round(emi).toLocaleString('en-IN')}`;
  document.getElementById('calcLoanPrincipal').innerText = `₹${(principal / 100000).toFixed(1)} Lakh`;
  document.getElementById('calcTotalInterest').innerText = `₹${(totalInterest / 100000).toFixed(1)} Lakh`;
  document.getElementById('calcTotalPayable').innerText = `₹${(totalPayment / 100000).toFixed(1)} Lakh`;
}

// ==========================================================================
// 12. UTILITIES & MODAL CONTROLS
// ==========================================================================
function closeModals() {
  document.querySelectorAll('.rh-modal-overlay').forEach(m => m.classList.remove('open'));
}

function openSubmitModal() {
  const modal = document.getElementById('submitModal');
  if (modal) modal.classList.add('open');
}

function openAdvisorModal() {
  const modal = document.getElementById('advisorModal');
  if (modal) modal.classList.add('open');
}

function openTrainingModal() {
  const modal = document.getElementById('trainingModal');
  if (modal) modal.classList.add('open');
}

function openAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.classList.add('open');
}

function toggleMobileNav() {
  const drawer = document.getElementById('mobileNavDrawer');
  if (drawer) drawer.classList.toggle('open');
}

function closeMobileNav() {
  const drawer = document.getElementById('mobileNavDrawer');
  if (drawer) drawer.classList.remove('open');
}

function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'rh-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'rh-toast';
  toast.innerHTML = `<span>✓</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================================================
// HERO SLIDER & QUICK ACTIONS LOGIC
// ==========================================================================
let currentHeroSlide = 0;
let heroSliderInterval = null;

function goToHeroSlide(index) {
  const slides = document.querySelectorAll('.rh-hero-slide');
  const dots = document.querySelectorAll('.rh-slider-dot');
  if (!slides.length) return;

  currentHeroSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentHeroSlide);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentHeroSlide);
  });
}

function nextHeroSlide() {
  goToHeroSlide(currentHeroSlide + 1);
}

function prevHeroSlide() {
  goToHeroSlide(currentHeroSlide - 1);
}

function startHeroAutoSlide() {
  if (heroSliderInterval) clearInterval(heroSliderInterval);
  heroSliderInterval = setInterval(() => {
    nextHeroSlide();
  }, 6500);

  // Pause on hover over hero section
  const heroWrap = document.querySelector('.rh-hero-slider-wrap');
  if (heroWrap) {
    heroWrap.addEventListener('mouseenter', () => {
      if (heroSliderInterval) clearInterval(heroSliderInterval);
    });
    heroWrap.addEventListener('mouseleave', () => {
      startHeroAutoSlide();
    });
  }
}

function handleQuickAction(action) {
  switch (action) {
    case 'buy':
      setSearchStatus('For Sale');
      scrollToProperties();
      showToast('Showing verified properties & land for sale');
      break;
    case 'sell':
      openSubmitModal();
      showToast('Submit your property to Kerala Land Bank');
      break;
    case 'rent':
      setSearchStatus('For Rent');
      scrollToProperties();
      showToast('Showing properties for rent & commercial lease');
      break;
    case 'develop':
      setCategoryFilter('Development Projects');
      showToast('Showing joint venture & land development projects');
      break;
    case 'invest':
      setSearchStatus('Land Bank');
      scrollToProperties();
      showToast('Showing high-yield Land Bank & investment acreage');
      break;
    case 'partners':
      openAdvisorModal();
      showToast("Join Kerala's Certified Land Advisors & Partner Network");
      break;
    default:
      scrollToProperties();
  }
}

// Global Modal Backdrop Click to Close
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('rh-modal-overlay')) {
    closeModals();
  }
});

// ESC key to close modal
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModals();
});

// ==========================================================================
// 13. INITIALIZATION ON DOM READY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderProperties();
  updateWishlistBadge();
  updateCompareBadge();
  updateMortgageCalculator();
  startHeroAutoSlide();
});

