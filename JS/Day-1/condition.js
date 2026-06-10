const studentName = "Sella";

const tamil = 85;
const english = 78;
const maths = 92;
const science = 88;
const social = 65;

const total = tamil + english + maths + science + social;

const average = total;

let result;

if (tamil < 35 || english < 35 || maths < 35 || science < 35 || social < 35) {
  result = "Fail";
} else {
  result = "Pass";
}

// Grade
let grade;

if (result === "Fail") {
  grade = "No Grade";
} else if (average >= 90) {
  grade = "A+";
} else if (average >= 80) {
  grade = "A";
} else if (average >= 70) {
  grade = "B";
} else if (average >= 60) {
  grade = "C";
} else if (average >= 50) {
  grade = "D";
} else {
  grade = "E";
}

let scholarship;

if (
  average >= 85 &&
  tamil >= 75 &&
  english >= 75 &&
  maths >= 75 &&
  science >= 75 &&
  social >= 75
) {
  scholarship = "Eligible";
} else {
  scholarship = "Not Eligible";
}

// Rank
let rank;

if (average >= 90) {
  rank = "Rank 1";
} else if (average >= 80) {
  rank = "Rank 2";
} else if (average >= 70) {
  rank = "Rank 3";
} else {
  rank = "No Rank";
}

console.log("========== STUDENT REPORT ==========");
console.log("Name:", studentName);
console.log("------------------------------------");
console.log("Tamil:", tamil);
console.log("English:", english);
console.log("Maths:", maths);
console.log("Science:", science);
console.log("Social:", social);
console.log("------------------------------------");
console.log("Total:", total);
console.log("Average:", average.toFixed(2));
console.log("Result:", result);
console.log("Grade:", grade);
console.log("Scholarship:", scholarship);
console.log("Rank:", rank);
console.log("====================================");
