import ArrayState from "./components/ArrayState";
import ObjectState from "./components/ObjectState";
import ArrayObjectState from "./components/ArrayObjectState";

const App = () => {
  return (
    <div>
      <h1>React State Update Tasks</h1>

      <ArrayState />

      <hr />

      <ObjectState />

      <hr />

      <ArrayObjectState />
    </div>
  );
};

export default App;

// React Task 1: Array State Update
// Initial State
// const [fruits, setFruits] = useState([
//   "Apple",
//   "Orange",
//   "Mango"
// ]);
// Task

// // Create:

// addFruit()
// Requirements
// Add "Banana" to the array.
// Update state using Spread Operator.
// Display all fruits using map().
// Expected Output
// Apple
// Orange
// Mango
// Banana

// React Task 2: Object State Update
// Initial State
// const [student, setStudent] = useState({
//   name: "Ravi",
//   course: "MERN",
//   city: "Chennai"
// });
// Task

// Create:

// updateStudent()
// Requirements

// When button clicked:

// Update city from:

// Chennai

// to

// Bangalore

// Use:

// setStudent({
//   ...student,
//   city: "Bangalore"
// });
// Display
// Name : Ravi
// Course : MERN
// City : Bangalore

// React Task 3: Array of Objects State Update
// Initial State
// const [employees, setEmployees] = useState([
//   {
//     id: 1,
//     name: "Ravi",
//     salary: 25000
//   },
//   {
//     id: 2,
//     name: "Priya",
//     salary: 30000
//   },
//   {
//     id: 3,
//     name: "Arun",
//     salary: 35000
//   }
// ]);
// Task

// Create:

// updateSalary(id)
// Requirements

// When clicking Update button for Employee ID 2:

// Change salary:

// 30000

// to

// 50000
// Expected Output
// [
//   {
//     id: 1,
//     name: "Ravi",
//     salary: 25000
//   },
//   {
//     id: 2,
//     name: "Priya",
//     salary: 50000
//   },
//   {
//     id: 3,
//     name: "Arun",
//     salary: 35000
//   }
// ]
// Hint

// Use:

// map()

// and

// setEmployees()
