let i;
for (i = 1; i <= 20; i += 2) {
  console.log(i);
}
console.log(i);

for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// // let a = 0;
// // for (let i = 0; i <= 10; i++) {
// //   a = a + i;
// //   console.log(i);
// // }
// // console.log(a);

// // for (let i = 0; i <= 10; i++) {
// //   console.log(i * 5);
// // }

// // let fact = 1;
// // for (let i = 1; i <= 5; i++) {
// //   console.log((fact = fact *= i));
// // }

// // function num(num) {
// //   return Number(String(num).split("").reverse().join(""));
// // }
// // console.log(num(123));

// let num = 7;
// let count = 0;
// for (let i = 0; i <= num; i++) {
//   if (num % i === 0) {
//     count++;
//   }
// }
// if (count === 2) {
//   console.log("prime num");
// } else {
//   console.log("not a prime num");
// }

// //----------

// // for (let num = 2; num <= 100; num++) {
// //   let isPrime = true;

// //   for (let i = 2; i < num; i++) {
// //     if (num % i === 0) {
// //       isPrime = false;
// //       break;
// //     }
// //   }

// //   if (isPrime) {
// //     console.log(num);
// //   }
// // }

// let sum = 0;

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= i; j++) {
//     sum += j;
//   }
// }

// console.log(sum);

// let star = "";
// for (let i = 0; i < 5; i++) {
//   console.log((star = star + "*"));
// }

// let star = "";
// for (let i = 0; i < 5; i++) {
//   console.log((star = star + "*"));
// }

// for (let i = 1; i <= 5; i++) {
//   console.log("*****");
// }

// let star = "";
// for (let i = 0; i <= 5; i++) {
//   console.log((star = star + "*"));
// }

// let year = 2016;
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Leap year");
// } else {
//   console.log("None leap year");
// }

// let year = 2026;
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Leap year");
// } else {
//   console.log("non of leap year");
// }

// let star = "";
// for (let i = 0; i < 5; i++) {
//   console.log((star = star + "*"));
// }
