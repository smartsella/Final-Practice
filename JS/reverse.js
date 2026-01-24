const num = [1, 2, 3, 5, 6];
const n = 6;
const sum = (n * (n + 1)) / 2;
console.log(sum - num.reduce((a, b) => a + b, 0));

const arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      console.log("worked");

      console.log(([arr[i], arr[j]] = [arr[j], arr[i]]));
    }
    console.log("middle");
  }
  console.log("last");
}

const num1 = 134;
console.log(Number(String(num).split("").reverse().join("")));

const arr1 = [1, 2, 1, 3, 3, 4];

console.log(arr.filter((v, i) => arr.indexOf(v) !== i));
