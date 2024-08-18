// product-list.js

const products = [
  {
    id: 1,
    name: 'Whiskey - Product 1',
    price: 10.0,
    category: 'Whiskey',
    image: 'whiskey1.jpg',
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
  {
    id: 9,
    name: 'Whiskey - Product 9',
    price: 10.0,
    category: 'Whiskey',
    image: 'whiskey1.jpg',
    rating: 4,
  },
  {
    id: 10,
    name: 'Vodka - Product 10',
    price: 15.0,
    category: 'Vodka',
    image: 'vodka1.jpg',
    rating: 5,
  },
  {
    id: 11,
    name: 'Wine - Product 11',
    price: 20.0,
    category: 'Wine',
    image: 'wine1.jpg',
    rating: 3,
  },
  {
    id: 12,
    name: 'Gin - Product 12',
    price: 25.0,
    category: 'Gin',
    image: 'gin1.jpg',
    rating: 4,
  },
];

const productsPerPage = 8;
let currentPage = 1;

function loadProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  paginatedProducts.forEach((product) => {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
    productItem.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <div class="product-info">
              <h3>${product.name}</h3>
              <p>$${product.price.toFixed(2)}</p>
              <div class="reviews">${renderStars(product.rating)}</div>
          </div>
      `;
    productList.appendChild(productItem);
  });

  renderPagination();
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

function renderPagination() {
  const totalPages = Math.ceil(products.length / productsPerPage);
  const paginationNumbers = document.getElementById('pagination-numbers');
  paginationNumbers.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.innerText = i;
    pageButton.classList.add('page-number');
    if (i === currentPage) {
      pageButton.classList.add('active');
    }
    pageButton.addEventListener('click', () => goToPage(i));
    paginationNumbers.appendChild(pageButton);
  }
}

function goToPage(page) {
  currentPage = page;
  loadProducts();
}

function nextPage() {
  const totalPages = Math.ceil(products.length / productsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    loadProducts();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    loadProducts();
  }
}

window.onload = loadProducts;
