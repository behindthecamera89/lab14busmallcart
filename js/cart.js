/* global Cart */
'use strict';

var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

function clearCart() {
  table.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  var itemEl = document.getElementById('cart');
  for (var i=0;i<cart.items.length; i++) {
    var row = document.createElement('tr');
    var data = document.createElement('td');
    itemEl.appendChild(row);
    data.textContent = 'X';
    data.setAttribute('X', `   ${i}`);
    row.appendChild(data);

    data = document.createElement('td');
    data.textContent = `${cart.items[i].quantity}`;
    row.appendChild(data);
    data = document.createElement('td');
    data.textContent = `${cart.items[i].product}`;
    row.appendChild(data);
  }



}

function removeItemFromCart(event) {
  Cart.removeItem(this.item);  //? probably.----
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  // TODO. Save the cart back to local storage
  Cart.saveToLocalStorage();
  // TODO. Re-draw the cart table
  showCart(); // ?--- maybe
}

// This will initialize the page and draw the cart on screen
renderCart();
