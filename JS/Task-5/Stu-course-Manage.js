// Student Array
let students = [
  {
    id: 1,
    name: "Sella",
    age: 22,
    course: "React",
  },
  {
    id: 2,
    name: "Kumar",
    age: 21,
    course: "JavaScript",
  },
];

// Add Student
const addStudent = (name, age, course) => {
  const newStudent = {
    id: Date.now(),
    name,
    age,
    course,
  };

  students = [...students, newStudent];
  console.log("Student Added");
};

// Display Students
const displayStudents = () => {
  students.forEach(({ id, name, age, course }) => {
    console.log(`ID: ${id}, Name: ${name}, Age: ${age}, Course: ${course}`);
  });
};

// Edit Student
const editStudent = (id, updatedData) => {
  students = students.map((student) =>
    student.id === id ? { ...student, ...updatedData } : student,
  );

  console.log("Student Updated");
};

// Delete Student
const deleteStudent = (id) => {
  students = students.filter((student) => student.id !== id);

  console.log("Student Deleted");
};

// Search Student
const searchStudent = (name) => {
  const result = students.filter((student) =>
    student.name.toLowerCase().includes(name.toLowerCase()),
  );

  console.log(result);
};

// Find Student
const findStudent = (id) => {
  const student = students.find((student) => student.id === id);

  console.log(student);
};

// Object Methods
const studentKeys = (id) => {
  const student = students.find((student) => student.id === id);

  if (student) {
    console.log("Keys:", Object.keys(student));
    console.log("Values:", Object.values(student));
  }
};

// Testing
displayStudents();

addStudent("Arun", 23, "NodeJS");

displayStudents();

searchStudent("Sella");

editStudent(1, {
  age: 25,
  course: "MERN Stack",
});

displayStudents();

deleteStudent(2);

displayStudents();

findStudent(1);

studentKeys(1);
