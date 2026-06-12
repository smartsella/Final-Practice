const students = [
  { id: 1, name: "Arun", mark: 85 },
  { id: 2, name: "Karthik", mark: 45 },
  { id: 3, name: "Vijay", mark: 92 },
  { id: 4, name: "Ajay", mark: 35 },
];

// map()
students.map((student) => {
  console.log(student.name);
});

// filter()
const passedStudents = students.filter((student) => student.mark >= 50);

console.log(passedStudents);

// find()
const foundStudent = students.find((student) => student.id === 3);

console.log(foundStudent);

// reduce() - total marks
const totalMarks = students.reduce((total, student) => total + student.mark, 0);

console.log(totalMarks);

// reduce() - average marks
const average =
  students.reduce((total, student) => total + student.mark, 0) /
  students.length;

console.log(average);
