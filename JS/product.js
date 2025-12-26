const products = [
  { id: 1, productName: "Laptop", city: "Chennai", salesPrice: 58000 },
  { id: 2, productName: "Mobile Phone", city: "Bangalore", salesPrice: 22500 },
  { id: 3, productName: "Headphones", city: "Chennai", salesPrice: 2499 },
  { id: 4, productName: "Smartwatch", city: "Hyderabad", salesPrice: 5999 },
  { id: 5, productName: "Laptop", city: "Mumbai", salesPrice: 61000 },
  { id: 6, productName: "Mobile Phone", city: "Chennai", salesPrice: 21800 },
  {
    id: 7,
    productName: "Bluetooth Speaker",
    city: "Bangalore",
    salesPrice: 3200,
  },
  { id: 8, productName: "Smartwatch", city: "Chennai", salesPrice: 6200 },
  { id: 9, productName: "Laptop", city: "Hyderabad", salesPrice: 59500 },
  { id: 10, productName: "Headphones", city: "Mumbai", salesPrice: 2699 },
];

// // 1. even number
// const evens = products.filter((product) => product.id % 2 === 0);
// console.log(evens);

// // 2. Remove duplicate values
// const uniqueProducts = [
//   ...new Map(products.map((p) => [p.productName, p])).values(),
// ];

// console.log(uniqueProducts);

// // 3. total value for return for array fo object
// const total = products.reduce((acc, cur) => {
//   return acc + cur.salesPrice;
// }, 0);
// console.log(total);

//4. transform every element and without mutating
// const mutal = products.map((x) => x.salesPrice * 2);
// console.log(mutal);

// //5. find the first matching the condition
// const finding = products.find((x) => x.salesPrice > 60000);
// console.log(finding);

//6.  check all element satisfing the condition
const alll = products.every((x) => x.city === "chennai");
console.log(alll);

//7. check if one element satisfing the condition
const one = products.some((x) => x.city == "Chennai");
console.log(one);

// 8. return only matching element
const filterfire = products.filter((x) => {
  x.salesPrice > 40000;
});
console.log(filterfire);
