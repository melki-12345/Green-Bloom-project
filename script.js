// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Gallery images
const galleryImages = [
    'factory1.jpg',
    'factory2.jpg',
    'production1.jpg',
    'production2.jpg',
    'sample1.jpg',
    'sample2.jpg'
];

const galleryGrid = document.querySelector('.gallery-grid');

galleryImages.forEach(image => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.style.backgroundImage = `url(${image})`;
    galleryGrid.appendChild(div);
});

// Form submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message. We will get back to you soon!');
    contactForm.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Product Data
const products = [
    {
        id: 1,
        name: "Monstera Deliciosa",
        price: 49.99,
        category: "indoor",
        image: "https://images.unsplash.com/photo-1614594075929-b23f9f422b8b",
        description: "Popular indoor plant known for its distinctive split leaves"
    },
    {
        id: 2,
        name: "Snake Plant",
        price: 29.99,
        category: "indoor",
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
        description: "Low-maintenance plant perfect for air purification"
    },
    {
        id: 3,
        name: "Peace Lily",
        price: 34.99,
        category: "indoor",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355",
        description: "Elegant flowering plant that thrives in low light"
    },
    {
        id: 4,
        name: "Modern Ceramic Planter",
        price: 24.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
        description: "Minimalist ceramic pot with drainage hole, perfect for indoor plants"
    },
    {
        id: 5,
        name: "Fiddle Leaf Fig",
        price: 59.99,
        category: "indoor",
        image: "https://images.unsplash.com/photo-1597055181300-e7c3c06df2c3",
        description: "Trendy indoor plant with large, violin-shaped leaves"
    },
    {
        id: 6,
        name: "Premium Garden Tool Set",
        price: 39.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
        description: "Essential tools for plant care and maintenance"
    },
    {
        id: 7,
        name: "Japanese Maple",
        price: 89.99,
        category: "outdoor",
        image: "https://images.unsplash.com/photo-1584587727565-a154d7e9ff0c",
        description: "Beautiful ornamental tree with stunning red foliage"
    },
    {
        id: 8,
        name: "Hydrangea Bush",
        price: 45.99,
        category: "outdoor",
        image: "https://images.unsplash.com/photo-1530968033775-2c92736b131e",
        description: "Flowering shrub with large, showy blooms in blue or pink"
    },
    {
        id: 9,
        name: "Potting Soil Premium Mix",
        price: 19.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1631233859262-0d7b12ea7d4c",
        description: "High-quality potting mix for healthy plant growth"
    },
    {
        id: 10,
        name: "Philodendron Brasil",
        price: 32.99,
        category: "indoor",
        image: "https://images.unsplash.com/photo-1632321046354-cdc5dc8f00bb",
        description: "Trailing plant with variegated heart-shaped leaves"
    },
    {
        id: 11,
        name: "Rose Bush 'Double Delight'",
        price: 49.99,
        category: "outdoor",
        image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322",
        description: "Fragrant hybrid tea rose with red and white blooms"
    },
    {
        id: 12,
        name: "Hanging Macrame Planter",
        price: 29.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1628952936222-b56f8b5b0b1e",
        description: "Handcrafted macrame plant hanger with wooden beads"
    },
    {
        id: 13,
        name: "ZZ Plant",
        price: 35.99,
        category: "indoor",
        image: "https://images.unsplash.com/photo-1632207030774-811aee499da7",
        description: "Nearly indestructible indoor plant with glossy leaves"
    },
    {
        id: 14,
        name: "Lavender 'Hidcote'",
        price: 15.99,
        category: "outdoor",
        image: "https://images.unsplash.com/photo-1498814117408-e396f5507073",
        description: "Fragrant herb with purple flowers, perfect for borders"
    },
    {
        id: 15,
        name: "Self-Watering Plant Pot",
        price: 34.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1594576722512-582bcd46fba3",
        description: "Smart pot with water reservoir for easy plant care"
    }
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Update cart drawer
    const cartDrawer = document.querySelector('.cart-drawer');
    const cartContent = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" width="50">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>$${item.price} x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})">×</button>
        </div>
    `).join('');
    
    cartDrawer.innerHTML = `
        <h3>Your Cart</h3>
        ${cartContent}
        <div class="cart-total">
            <h4>Total: $${cartTotal.toFixed(2)}</h4>
            <button class="cta-button" onclick="checkout()">Checkout</button>
        </div>
    `;
    
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    showNotification('Added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Filter Functionality
function initFilters() {
    // Featured section filters
    const featuredFilters = document.querySelectorAll('.filter-pill');
    featuredFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const filterValue = filter.dataset.filter;
            
            // Update active state
            featuredFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            // Filter products
            const filteredProducts = filterValue === 'all' 
                ? products 
                : products.filter(product => {
                    if (filterValue === 'trending') {
                        return product.trending === true;
                    }
                    return product.category === filterValue;
                });
            
            displayFeaturedProducts(filteredProducts);
        });
    });

    // Collection filters
    const collectionFilters = document.querySelectorAll('.collection-filter');
    collectionFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const category = filter.dataset.category;
            
            // Update active state
            collectionFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            // Filter products
            const filteredProducts = category === 'all' 
                ? products 
                : products.filter(product => product.category === category);
            
            displayProducts(filteredProducts);
        });
    });
}

// Display Featured Products
function displayFeaturedProducts(productsToShow = products) {
    const featuredGrid = document.querySelector('.featured-grid');
    featuredGrid.innerHTML = productsToShow.slice(0, 6).map(product => `
        <div class="product-card fade-in-up">
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price}</span>
                    <button class="cta-button" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Display Products in Collection
function displayProducts(productsToShow = products) {
    const productGrid = document.querySelector('.products-grid');
    productGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card fade-in-up">
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price}</span>
                    <button class="cta-button" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Intersection Observer for Animations
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.product-card, .feature-card, .stat-card').forEach(el => {
        observer.observe(el);
    });
}

// Search Functionality
function initSearch() {
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) || 
            product.description.toLowerCase().includes(query)
        );
        displayFilteredProducts(filteredProducts);
    });
}

function displayFilteredProducts(filteredProducts) {
    const productGrid = document.querySelector('.product-grid');
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p class="no-results">No products found</p>';
        return;
    }
    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card fade-in">
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price}</span>
                    <button class="cta-button" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Newsletter Subscription
function subscribeNewsletter(e) {
    e.preventDefault();
    const email = document.querySelector('.newsletter-form input').value;
    if (email) {
        showNotification('Thank you for subscribing!');
        document.querySelector('.newsletter-form').reset();
    }
}

// Mobile Menu
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Cart Drawer Toggle
function toggleCart() {
    const cartDrawer = document.querySelector('.cart-drawer');
    cartDrawer.classList.toggle('open');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedProducts();
    displayProducts();
    initFilters();
    initAnimations();
    initSearch();
    updateCart();
    
    // Event Listeners
    document.querySelector('.cart-icon').addEventListener('click', toggleCart);
    document.querySelector('.hamburger').addEventListener('click', toggleMobileMenu);
    document.querySelector('.newsletter-form').addEventListener('submit', subscribeNewsletter);
});