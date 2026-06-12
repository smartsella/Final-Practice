const orders = [
  { id: 1, customer: "John", amount: 5000, status: "Completed" },
  { id: 2, customer: "David", amount: 3000, status: "Pending" },
  { id: 3, customer: "Sam", amount: 7000, status: "Completed" },
  { id: 4, customer: "Peter", amount: 2000, status: "Pending" },
];

//map
orders.map((order) => {
  console.log(order);
});

//filter
const completedOrders = orders.filter((order) => order.status === "Completed");
console.log(completedOrders);

//find
const order = orders.find((order) => order.id === 3);
console.log(order);

//reduce
const revenue = orders.reduce((total, order) => total + order.amount, 0);
console.log(revenue);
