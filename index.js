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

 var newItem = {[item]: Math.floor( Math.random(1, 101) * 100 ) };
for(var i = 0; i < cart.length; i++) {
     newItem += cart[i];
}
  return `${newItem} has been added to your cart.`;
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
