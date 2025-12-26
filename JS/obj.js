// ---------- OBJECT METHOD EXAMPLES ----------

const obj = { a: 1, b: 2, c: 3 };

// 1. Object.keys
console.log("Keys:", Object.keys(obj));

// 2. Object.values
console.log("Values:", Object.values(obj));

// 3. Object.entries
console.log("Entries:", Object.entries(obj));

// 4. Object.assign (shallow copy)
const copy = Object.assign({}, obj);
console.log("Copy:", copy);

// 5. Object.freeze
const frozen = Object.freeze({ x: 10 });
console.log("Frozen:", frozen);

// 6. Object.seal
const sealed = Object.seal({ p: 100 });
sealed.p = 200; // allowed
console.log("Sealed:", sealed);

// 7. Object.create
const proto = {
  greet() {
    return "Hello";
  },
};
const child = Object.create(proto);
console.log("Proto Call:", child.greet());

// 8. Object.hasOwn
console.log("Has Own a:", Object.hasOwn(obj, "a"));

// 9. Object.getOwnPropertyDescriptors
console.log("Descriptors:", Object.getOwnPropertyDescriptors(obj));

// 10. Object.fromEntries
const arrToObj = Object.fromEntries([
  ["name", "Sellaa"],
  ["age", 25],
]);
console.log("fromEntries:", arrToObj);

//11 . object for in used
const objdata = { name: "sella", age: 21, passout: 2025 };
for (const key in objdata) {
  console.log(objdata[key]);
}
