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
 var newItem = {[item]: Math.floor( Math.random(1, 101) * 100 ) };
  //cart.push(newItem);

  var structureCart = {};

  Object.keys(newItem).forEach(function(itemName) {
      structureCart[itemName] = newItem[itemName];
  });

   cart.push(structureCart);
  //return `${item} has been added to your cart.`;
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
