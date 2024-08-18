// script.js

const products = [
  {
    id: 1,
    name: 'Whiskey - Product 1',
    price: 10.0,
    category: 'Whiskey',
    image:
      'https://cdn11.bigcommerce.com/s-e6b77/images/stencil/1280x1280/products/33279/48521/jim-beam-kentucky-straight-bourbon-whiskey__34476.1720274546.jpg?c=2',
    rating: 4,
  },
  {
    id: 2,
    name: 'Vodka - Product 2',
    price: 15.0,
    category: 'Vodka',
    image: 'vodka1.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Wine - Product 3',
    price: 20.0,
    category: 'Wine',
    image: 'wine1.jpg',
    rating: 3,
  },
  {
    id: 4,
    name: 'Gin - Product 4',
    price: 25.0,
    category: 'Gin',
    image: 'gin1.jpg',
    rating: 4,
  },
  {
    id: 5,
    name: 'Liquor - Product 5',
    price: 30.0,
    category: 'Liquor',
    image: 'liquor1.jpg',
    rating: 5,
  },
  {
    id: 6,
    name: 'Non-alcohol - Product 6',
    price: 35.0,
    category: 'Non-alcohol drink',
    image: 'non-alcohol1.jpg',
    rating: 2,
  },
  {
    id: 7,
    name: 'Whiskey - Product 7',
    price: 40.0,
    category: 'Whiskey',
    image: 'whiskey2.jpg',
    rating: 4,
  },
  {
    id: 8,
    name: 'Vodka - Product 8',
    price: 45.0,
    category: 'Vodka',
    image: 'vodka2.jpg',
    rating: 3,
  },
];

let currentIndex = 0;

function loadProducts(category = 'All') {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  const filteredProducts =
    category === 'All'
      ? products
      : products.filter((p) => p.category === category);

  filteredProducts.forEach((product) => {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
    productItem.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <div class="product-info">
              <h3>${product.name}</h3>
              <p>$${product.price.toFixed(2)}</p>
              <div class="reviews">${renderStars(product.rating)}</div>
          </div>
          <div class="add-to-cart" onclick="addToCart(${
            product.id
          })">Add to Cart</div>
      `;
    productList.appendChild(productItem);
  });

  updateSlider();
}

function renderStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    stars +=
      i < rating
        ? '<i class="fas fa-star"></i>'
        : '<i class="far fa-star"></i>';
  }
  return stars;
}

function filterProducts(category) {
  loadProducts(category);
}

function addToCart(productId) {
  alert('Product added to cart: ' + productId);
}

function nextSlide() {
  const productList = document.getElementById('product-list');
  const productsToShow = 4;
  const totalProducts = products.length;

  if (currentIndex < totalProducts - productsToShow) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  updateSlider();
}

function prevSlide() {
  const productList = document.getElementById('product-list');
  const productsToShow = 4;
  const totalProducts = products.length;

  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalProducts - productsToShow;
  }

  updateSlider();
}

function updateSlider() {
  const productList = document.getElementById('product-list');
  const productWidth =
    productList.querySelector('.product-item').offsetWidth + 20; // Include margin
  const offset = currentIndex * productWidth;

  productList.style.transform = `translateX(-${offset}px)`;
}

window.onload = () => loadProducts();
