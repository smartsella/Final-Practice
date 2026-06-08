// 1) practice
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i += 2;
// }

// 2)pattern problem while looping
let i = 5;
let r = 5;
while (i <= r) {
  let t = " ";
  let j = 1;
  while (j <= i) {
    t += "*";
    j++;
  }
  console.log(t);

  i++;
}

// 3)reverse patter

let i = 5;
while (i >= 1) {
  let t = " ";
  let j = 1;
  while (j <= i) {
    t += "*";
    j++;
  }
  console.log(t);

  i--;
}
