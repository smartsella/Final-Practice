// function outer() {
//   let count = 10;

//   function inner() {
//     console.log(count);
//   }

//   return inner;
// }

// const result = outer();
// result();

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 5000);
}
