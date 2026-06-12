const cart = [
  { product: "Laptop", price: 50000 },
  { product: "Mouse", price: 500 },
  { product: "Keyboard", price: 1500 },
];

const totalAmount = cart.reduce((total, item) => total + item.price, 0);

console.log(totalAmount);
