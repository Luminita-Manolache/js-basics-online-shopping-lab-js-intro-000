var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 item = {};
 cart.push(item);
 var addCart = [];
 var newItem = {[item]: Math.floor( Math.random(1, 101) * 100 ) };
for(var i = 0; i < cart.length; i++) {
     addCart = cart[i];
}
  return `${addCart} has been added to your cart.`;
}

function viewCart() {
  // write your code here
}

function total() {

  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
