// const TodoApp = ()=>{

//   //state manage
//   const [todo,]
//   return(
//     <>
//       <div>

//       </div>
//     </>
//   )
// }
// export default TodoApp

// import { useState } from "react";

// const TodoApp = () => {
//   //state manage
//   const [todo, setTodo] = useState([]);
//   const [task, setTask] = useState("");

//   //submit handle
//   const addtodo = (e) => {
//     e.preventDefault();

//     if (task.trim() === "") return;

//     const newTodo = {
//       id: Date.now(),
//       text: task,
//       completed: false,
//     };

//     setTodo([...todo, newTodo]);
//     setTask("");
//   };

//   //delete todo
//   const deletetodo = (i) => {
//     setTodo(todo.filter((_, index) => index !== i));
//   };

//   return (
//     <>
//       <div>
//         <h1>Todo Application</h1>
//         <input
//           type="text"
//           placeholder="Enter a Node"
//           onChange={(e) => setTask(e.target.value)}
//           value={task}
//         />
//         <button onClick={addtodo}>Add</button>

//         {/* data added */}
//         <ul>
//           {todo.map((e, i) => (
//             <li key={i}>
//               <span>{e.text}</span>
//               <button onClick={() => deletetodo(i)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };
// export default TodoApp;

// import { useState } from "react";

// function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [task, setTask] = useState("");

//   const addTodo = () => {
//     if (task.trim() === "") return;

//     const newTodo = {
//       id: Date.now(),
//       text: task,
//       completed: false,
//     };

//     setTodos([...todos, newTodo]);
//     setTask("");
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   return (
//     <div style={{ width: "300px", margin: "20px auto" }}>
//       <h2>Todo List</h2>

//       <input
//         type="text"
//         placeholder="Enter task"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />

//       <button onClick={addTodo}>Add</button>

//       {todos.length === 0 ? (
//         <p>No tasks added</p>
//       ) : (
//         <ul>
//           {todos.map((todo) => (
//             <li key={todo.id}>
//               <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>

//               <button onClick={() => deleteTodo(todo.id)}>❌</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default TodoApp;
