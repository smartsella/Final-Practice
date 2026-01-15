// //find minimum and maximum num

// const findMinMax=(arr)=> {
//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//     if (arr[i] > max) max = arr[i];
//   }

//   return { min, max };
// }

// console.log(findMinMax([3, 5, 1, 9, 2]));

// const findMinMax = (arr) => {
//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//     if (arr[i] > max) max = arr[i];
//   }
//   return { min, max };
// };
// console.log(findMinMax([3, 4, 5, 1, 6, 9]));

//reverse a string
// const str = 12345;

// const data = String(str).split("").reverse().join("");

// console.log(data);

//remove duplicate form array
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

// function countFrequency(arr) {
//   let freq = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (freq[arr[i]]) {
//       freq[arr[i]]++;
//     } else {
//       freq[arr[i]] = 1;
//     }
//   }

//   return freq;
// }

// console.log(countFrequency([1, 2, 2, 3, 1, 1]));

//coundt frequency
// const countfrequency = (arr) => {
//   const freq = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (freq[arr[i]]) {
//       freq[arr[i]]++;
//     } else {
//       freq[arr[i]] = 1;
//     }
//   }
//   return freq;
// };
// console.log(countfrequency([2, 3, 4, 1, 8, 9, 3, 5]));

// function moveZeros(arr) {
//   let index = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[index] = arr[i];
//       index++;
//     }
//   }

//   while (index < arr.length) {
//     arr[index] = 0;
//     index++;
//   }

//   return arr;
// }

// console.log(moveZeros([0, 1, 0, 3, 12]));
