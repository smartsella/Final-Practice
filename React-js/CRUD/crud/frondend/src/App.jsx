import { useState } from "react";

const App = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  // Table Data
  const [users, setUsers] = useState([]);

  // Edit Index
  const [editIndex, setEditIndex] = useState(null);

  // Handle Input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add / Update
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex === null) {
      // Add
      setUsers([...users, formData]);
    } else {
      // Update
      const updatedUsers = [...users];
      updatedUsers[editIndex] = formData;
      setUsers(updatedUsers);
      setEditIndex(null);
    }

    // Clear Form
    setFormData({
      name: "",
      email: "",
      mobile: "",
      address: "",
    });
  };

  // Edit
  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
  };

  // Delete
  const handleDelete = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);

    // If deleting the editing row
    if (editIndex === index) {
      setEditIndex(null);
      setFormData({ name: "", email: "", mobile: "", address: "" });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="mobile"
          placeholder="Enter Mobile"
          value={formData.mobile}
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
        />

        <button type="submit">{editIndex === null ? "Add" : "Update"}</button>
      </form>

      <br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.address}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>

                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default App;
