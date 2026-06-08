// //1) print 1 to 100 numbers
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// //2) print even number
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// //3) print odd number
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// //4) find sum fo numbers
// let sum = 1;
// for (let i = 0; i <= 5; i++) {
//   sum += i;
// }
// console.log(sum);

// //5) Multiplication table
// const table = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(table * i);
// }

// //6) Reverse an array
// let arr = [5, 3, 2, 0, 3, 3, 547, 7, 89, 4, 3, 12];
// // for (let i = arr.length; i >= 0; i--) {
// //   console.log(i);
// // }
// // arr.reverse();
// // console.log(arr);
//-------------------------
// let reversed = [...arr].reverse();
// console.log(reversed);
// console.log(arr);
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let reversed = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }
// console.log(reversed);
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let reversed = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }
// console.log(reversed);
// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// //7 count character in a string
// let str = "selladurai";
// let count = 0;
// for (let i = 0; i <= str.length - 1; i++) {
//   count++;
// }
// console.log(count);

// // 8) find largest value
// let arr = [22, 34, 531, 455, 633, 643, 21, 2];
// let largest = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }
// console.log(largest);

// // 9) count vowols
// let char = "selladurai";
// let count = 0;
// for (let i = 0; i < char.length; i++) {
//   let stor = char[i];
//   if (stor == "a" || stor == "e" || stor == "i" || stor == "u") {
//     count++;
//   }
// }
// console.log(count);

// // 10) Palindrome check
// let str = "appa";
// let reversed = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }
// if (reversed === str) {
//   console.log("this is palindrome");
// } else {
//   console.log("this is not palindrome");
// }

// // 11) find duplicate values
// let arr = [1, 2, 3, 2, 4, 5, 1, 3487, 923, 85];
// let duplicates = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       duplicates.push(arr[i]);
//     }
//   }
// }

// console.log(duplicates);

// 12) remove duplicate values
