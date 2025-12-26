import { useState } from "react";

const Inputhandle = () => {
  //state manage
  const [form, setForm] = useState({ name: "", age: "", phone: "", email: "" });
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);

  //input handle
  const inputhandle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //submit handle
  const submithandle = (e) => {
    e.preventDefault();

    if (edit == false) {
      setData([...data, form]);
    } else {
      const updata = [...data];
      updata[edit] = form;
      setData(updata);
      setEdit(false);
    }

    //reset data
    setForm({ name: "", age: "", phone: "", email: "" });
  };

  //edit handle
  const edithandle = (i) => {
    setForm(data[i]);
    setEdit(i);
  };

  //delete handle
  const deletehandle = (i) => {
    setData(data.filter((_, index) => i !== index));
  };
  return (
    <>
      <div>
        <form action="">
          <input
            type="text"
            placeholder="Enter the Name"
            name="name"
            value={form.name}
            onChange={inputhandle}
          />
          <input
            type="number"
            placeholder="Enter the Age"
            name="age"
            value={form.age}
            onChange={inputhandle}
          />
          <input
            type="phone"
            placeholder="Enter the Mobile number"
            name="phone"
            value={form.phone}
            onChange={inputhandle}
          />
          <input
            type="email"
            placeholder="Enter the Email"
            name="email"
            value={form.email}
            onChange={inputhandle}
          />
          <button onClick={submithandle}>
            {edit === false ? "Add" : "Updata"}
          </button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => (
              <tr key={i}>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.phone}</td>
                <td>{e.email}</td>
                <td>
                  <button onClick={() => edithandle(i)}>Edit</button>
                  <button onClick={() => deletehandle(i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Inputhandle;
