/* global Product, Cart */

'use strict';

var cart = new Cart([]);

function populateForm() {
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optionElement = document.createElement('option');
    optionElement.textContent = Product.allProducts[i].name;
    optionElement.value = Product.allProducts[i].name;
    selectElement.appendChild(optionElement);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

function addSelectedItemToCart() {
  var thingInCart = document.getElementById('items').value;
  var quantity = document.getElementById('quantity').value;
  cart.addItem(thingInCart, quantity);
}

function updateCounter() {
  var itemCount = document.getElementById('itemCount');
  itemCount.textContent = `(${cart.items.length})`;
}

function updateCartPreview() {
  var cartOutput = document.getElementById('cartContents');
  //var retrievedCount = localStorage.getItem('cart');
  cartOutput.createElement('div');
  // give that div textcontent:   product info/ itemName and qty
  cartOutput.textContent = `${thingInCart} x ${quantity}`;
  document.appendChild(cartOutput);
}

var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

populateForm();
