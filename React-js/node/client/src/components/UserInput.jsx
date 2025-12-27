import { useState, useEffect } from "react";
import API from "../services/API.js";

const UserInput = () => {
  //state manage
  const [inputdata, setInputData] = useState({
    name: "",
    email: "",
    place: "",
  });
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  //input handle
  const inputhandle = (e) => {
    setInputData({ ...inputdata, [e.target.name]: e.target.value });
  };

  //submit handle
  const submithandle = async (e) => {
    try {
      e.preventDefault();
      if (editId) {
        const response = await API.put(`/update/${editId}`, inputdata);
        alert(response.data.msg || "Updated");
        setEditId(null);
      } else {
        const response = await API.post("/posted", inputdata);
        alert(response.data.msg || "Created");
      }
      //reset data
      setInputData({ name: "", email: "", place: "" });
      // refresh table data
      fetchAll();
    } catch (error) {
      console.log(`Error msg ${error}`);
    }
  };

  const fetchAll = async () => {
    try {
      const res = await API.get("/geted");
      // controller returns { data: getdata }
      setUsers(res.data.data || []);
    } catch (err) {
      console.error("Fetch error", err);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleEdit = (u) => {
    setInputData({
      name: u.name || "",
      email: u.email || "",
      place: u.place || "",
    });
    setEditId(u._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    try {
      const ok = window.confirm("Delete this record?");
      if (!ok) return;
      const res = await API.delete(`/delete/${id}`);
      alert(res.data.msg || "Deleted");
      fetchAll();
    } catch (err) {
      console.error("Delete error", err);
    }
  };
  return (
    <>
      <div>
        {/* form data */}
        <form onSubmit={submithandle}>
          <input
            type="text"
            placeholder="Enter the name"
            onChange={inputhandle}
            name="name"
            value={inputdata.name}
            required
          />
          <input
            type="email"
            placeholder="Enter the email"
            onChange={inputhandle}
            name="email"
            value={inputdata.email}
            required
          />
          <input
            type="text"
            placeholder="Enter the Place"
            onChange={inputhandle}
            name="place"
            value={inputdata.place}
            required
          />
          <button type="submit">{editId ? "Update" : "Submit"}</button>
        </form>

        {/* table data */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Place</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.place}</td>
                <td>
                  <button onClick={() => handleEdit(u)}>Edit</button>
                  <button onClick={() => handleDelete(u._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default UserInput;
