// const arr = [10, 20, 30, 20, 40, 50, 10, 60, 30];

// const duplicates = arr.filter((item, index) => {
//   return arr.indexOf(item) !== index;
// });

// console.log(duplicates);

const arr = [1, 2, 3, 2, 4, 5, 1, 6];

let duplicate = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j] && !duplicate.includes(arr[i])) {
      duplicate.push(arr[i]);
    }
  }
}

console.log(duplicate);
