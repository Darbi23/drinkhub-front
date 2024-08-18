// product-details.js

function changeImage(imageUrl) {
  document.getElementById('mainImage').src = imageUrl;
}

function increaseQuantity() {
  let quantity = document.getElementById('quantity').value;
  document.getElementById('quantity').value = parseInt(quantity) + 1;
}

function decreaseQuantity() {
  let quantity = document.getElementById('quantity').value;
  if (quantity > 1) {
    document.getElementById('quantity').value = parseInt(quantity) - 1;
  }
}
