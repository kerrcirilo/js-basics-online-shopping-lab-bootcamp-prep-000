var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
   let price = Math.floor(Math.random()*(100-1)+1);
   item = 
  {itemName: item,
   itemPrice: price,}
  cart.push(item);
  return (`${item.itemName} has been added to your cart.`);
}

function viewCart() {
  // write your code here
  if c  i;
  return `In your cart, you have ${itemName} at ${itemPrice},`
  else =
  return "Your shopping cart is empty."
  
  
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
