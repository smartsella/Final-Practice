// import { useEffect, useState } from "react";
// import API from "./services/api";
// import "./index.css";

// const App = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     email: "",
//     address: "",
//   });

//   const [users, setUsers] = useState([]);
//   const [editId, setEditId] = useState("");

//   // Fetch Users
//   const getUsers = async () => {
//     const res = await API.get();
//     setUsers(res.data);
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   // Handle Input
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (editId === "") {
//       await API.post("/", formData);
//     } else {
//       await API.put(`/${editId}`, formData);
//       setEditId("");
//     }

//     setFormData({
//       name: "",
//       age: "",
//       email: "",
//       address: "",
//     });

//     getUsers();
//   };

//   // Edit
//   const handleEdit = (user) => {
//     setEditId(user._id);

//     setFormData({
//       name: user.name,
//       age: user.age,
//       email: user.email,
//       address: user.address,
//     });
//   };

//   // Delete
//   const handleDelete = async (id) => {
//     await API.delete(`/${id}`);
//     getUsers();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 animate-gradient flex justify-center items-center p-10">
//       <div className="w-full max-w-6xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">
//         <h1 className="text-center text-5xl font-extrabold text-white mb-8 tracking-wider">
//           ✨ MERN CRUD Dashboard
//         </h1>

//         <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
//           <input
//             type="text"
//             name="name"
//             placeholder="👤 Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="bg-white/20 text-white placeholder-gray-300 rounded-xl p-4 outline-none border border-white/20 focus:ring-4 focus:ring-pink-500 transition"
//           />

//           <input
//             type="number"
//             name="age"
//             placeholder="🎂 Age"
//             value={formData.age}
//             onChange={handleChange}
//             className="bg-white/20 text-white placeholder-gray-300 rounded-xl p-4 outline-none border border-white/20 focus:ring-4 focus:ring-pink-500 transition"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="📧 Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="bg-white/20 text-white placeholder-gray-300 rounded-xl p-4 outline-none border border-white/20 focus:ring-4 focus:ring-pink-500 transition"
//           />

//           <input
//             type="text"
//             name="address"
//             placeholder="🏠 Address"
//             value={formData.address}
//             onChange={handleChange}
//             className="bg-white/20 text-white placeholder-gray-300 rounded-xl p-4 outline-none border border-white/20 focus:ring-4 focus:ring-pink-500 transition"
//           />

//           <button className="md:col-span-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-lg py-4 rounded-xl font-bold hover:scale-105 duration-300 shadow-lg">
//             {editId ? "🚀 Update User" : "➕ Add User"}
//           </button>
//         </form>

//         <div className="overflow-x-auto mt-10 rounded-xl">
//           <table className="w-full text-white">
//             <thead>
//               <tr className="bg-white/20">
//                 <th className="p-4">Name</th>
//                 <th className="p-4">Age</th>
//                 <th className="p-4">Email</th>
//                 <th className="p-4">Address</th>
//                 <th className="p-4">Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {users.map((user) => (
//                 <tr
//                   key={user._id}
//                   className="hover:bg-white/10 duration-300 text-center"
//                 >
//                   <td className="p-4">{user.name}</td>
//                   <td>{user.age}</td>
//                   <td>{user.email}</td>
//                   <td>{user.address}</td>

//                   <td className="space-x-3">
//                     <button
//                       onClick={() => handleEdit(user)}
//                       className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg font-semibold"
//                     >
//                       ✏ Edit
//                     </button>

//                     <button
//                       onClick={() => handleDelete(user._id)}
//                       className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-semibold"
//                     >
//                       🗑 Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
  });

  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = form;
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, form]);
    }

    setForm({
      name: "",
      email: "",
      date: "",
    });
  };

  const handleEdit = (index) => {
    setForm(users[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>React CRUD</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <hr />

      {users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Date: {user.date}</p>

          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default App;
