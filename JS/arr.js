// ===============================
// JS Array + Object Methods
// 10 Array Problems + 10 Object Problems
// Single file: app.js
// ===============================

// ---------- ARRAY METHOD PROBLEMS ----------

// 1. Active user names (filter + map)
const users1 = [
  { id: 1, name: "A", active: true },
  { id: 2, name: "B", active: false },
  { id: 3, name: "C", active: true },
];
const activeuser = users1.filter((a) => a.active).map((u) => u.name);
console.log("active users", activeuser);

// const activeUserNames = users1.filter((u) => u.active).map((u) => u.name);
// console.log("Active Users:", activeUserNames);

// 2. Frequency count (reduce)
const letters = ["a", "b", "a", "c", "b", "a"];
const freq = letters.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log("Frequency:", freq);

// 3. Remove duplicates (Set)
const nums = [1, 2, 2, 3, 3, 4];
const uniqueNums = [...new Set(nums)];
console.log("Unique:", uniqueNums);

// 4. Group by department (reduce)
const employees = [
  { name: "A", dept: "IT" },
  { name: "B", dept: "HR" },
  { name: "C", dept: "IT" },
];
const grouped = employees.reduce((acc, emp) => {
  (acc[emp.dept] ||= []).push(emp.name);
  return acc;
}, {});
console.log("Grouped:", grouped);

// 5. Max priced product (reduce)
const products = [
  { name: "P1", price: 100 },
  { name: "P2", price: 300 },
  { name: "P3", price: 150 },
];
const maxProduct = products.reduce((acc, cur) =>
  cur.price > acc.price ? cur : acc,
);
console.log("Max Product:", maxProduct);

// 6. Flatten array (flat)
const nested = [1, [2, 3], [4, 5]];
console.log("Flat:", nested.flat());

// 7. Validate all passed (every)
const students = [
  { name: "A", score: 80 },
  { name: "B", score: 60 },
  { name: "C", score: 40 },
];
const allPassed = students.every((s) => s.score >= 50);
console.log("All Passed:", allPassed);

// 8. Check out of stock (some)
const items = [
  { id: 1, qty: 2 },
  { id: 2, qty: 0 },
  { id: 3, qty: 5 },
];
console.log(
  "Has Out of Stock:",
  items.some((i) => i.qty === 0),
);

// 9. Sort by date (sort)
const orders = [
  { id: 1, date: "2023-02-10" },
  { id: 2, date: "2023-01-20" },
  { id: 3, date: "2023-03-01" },
];
orders.sort((a, b) => new Date(a.date) - new Date(b.date));
console.log("Sorted Orders:", orders);

// 10. Find user by ID (find)
const users2 = [
  { id: 1, name: "X" },
  { id: 2, name: "Y" },
  { id: 3, name: "Z" },
];
console.log(
  "Find User:",
  users2.find((u) => u.id === 2),
);

//11. for of used
const forr = ["selladurai", "rajkumar", "jayakumar"];

for (const arr of forr) {
  console.log(arr);
}

//12. string method used for of loop
// const str = "selladurai";
// for (const key in str) {
//   console.log(str[key]);
// }
