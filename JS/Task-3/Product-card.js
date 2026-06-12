const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Keyboard", price: 1500 },
];

products.map((product) => {
  console.log(`Product: ${product.name}, Price: ₹${product.price}`);
});
