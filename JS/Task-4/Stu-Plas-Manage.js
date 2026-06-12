// Create a Student Placement Management System using: Spread Operator Rest Parameter Template Literals Object Destructuring Array Destructuring Default Parameters Enhanced Object Literal Optional Chaining Nullish Coalescing Import / Export File Structure src/ │ ├── students.js ├── utils.js └── app.js students.js Create and Export: const students = [ { id: 1, name: "Ravi", skills: ["HTML", "CSS", "React"], company: { name: "TCS" } }, { id: 2, name: "Priya", skills: ["JavaScript", "Node"], company: {} } ]; Export this array. utils.js Create and Export: Function 1 calculateTotalMarks(...marks) Use Rest Parameter. Return total marks. Function 2 welcomeUser(name = "Guest") Use Default Parameter. Return: Welcome Ravi or Welcome Guest app.js Import everything. Task 1 Using Array Destructuring: Get first and second student. Task 2 Using Object Destructuring: Extract: name skills from first student. Task 3 Using Spread Operator: Add new skill: MongoDB to first student's skills. Store in a new array. Task 4 Using Template Literals: Print: Hello Ravi, Your skills are HTML, CSS, React, MongoDB Task 5 Using Optional Chaining: Access company name. student.company?.name Task 6 Using Nullish Coalescing: If company name does not exist show: Not Assigned Task 7 Call: calculateTotalMarks(80, 90, 85, 95) Print result. Task 8 Call: welcomeUser() welcomeUser("Priya") Task 9 Create a Placement Object using Enhanced Object Literal. const studentName = "Ravi"; const role = "MERN Developer"; const location = "Chennai"; Create object using shorthand properties. Expected Final Output First Student : Ravi Updated Skills : HTML CSS React MongoDB Hello Ravi, Your skills are HTML, CSS, React, MongoDB Company : TCS Company : Not Assigned Total Marks : 350 Welcome Guest Welcome Priya { studentName: 'Ravi', role: 'MERN Developer', location: 'Chennai' }
// Student Data
const students = [
  {
    id: 1,
    name: "Ravi",
    skills: ["HTML", "CSS", "React"],
    company: { name: "TCS" },
  },
  {
    id: 2,
    name: "Priya",
    skills: ["JavaScript", "Node"],
    company: {},
  },
];

// Arrow Function + Rest Parameter
const calculateTotalMarks = (...marks) =>
  marks.reduce((total, mark) => total + mark, 0);

// Arrow Function + Default Parameter
const welcomeUser = (name = "Guest") => `Welcome ${name}`;

// Array Destructuring
const [firstStudent, secondStudent] = students;

// Object Destructuring
const { name, skills } = firstStudent;

// Spread Operator
const updatedSkills = [...skills, "MongoDB"];

// Template Literals
console.log(`Hello ${name}, Your skills are ${updatedSkills.join(", ")}`);

// Optional Chaining
const company1 = firstStudent.company?.name;

// Nullish Coalescing
const company2 = secondStudent.company?.name ?? "Not Assigned";

// Total Marks
const totalMarks = calculateTotalMarks(80, 90, 85, 95);

// Enhanced Object Literal
const studentName = "Ravi";
const role = "MERN Developer";
const location = "Chennai";

const placement = {
  studentName,
  role,
  location,
};

// Output
console.log("First Student :", name);
console.log("Updated Skills :", updatedSkills.join(" "));
console.log("Company :", company1);
console.log("Company :", company2);
console.log("Total Marks :", totalMarks);
console.log(welcomeUser());
console.log(welcomeUser("Priya"));
console.log(placement);
