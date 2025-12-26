import { useState } from "react";

const Formhandle = () => {
  //input handle
  const [form, setForm] = useState({ name: "", age: "", phone: "", role: "" });
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);

  //input handle
  const inputhandle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //btn handle
  const btnhandle = (e) => {
    e.preventDefault();
    if (edit === false) {
      // add the data
      setData([...data, form]);
    } else {
      //updata the data
      const updata = [...data];
      updata[edit] = form;
      setData(updata);
      setEdit(false);
    }

    //reset the data
    setForm({ name: "", age: "", role: "", phone: "" });
  };

  //edit the data
  const edithandle = (i) => {
    setForm(data[i]);
    setEdit(i);
  };

  //delete the data
  const deletehandle = (i) => {
    setData(data.filter((_, index) => i !== index));
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Enter your name"
          onChange={inputhandle}
        />
        <input
          type="number"
          name="age"
          value={form.age}
          placeholder="Enter your age"
          onChange={inputhandle}
        />
        <input
          type="number"
          name="phone"
          value={form.phone}
          placeholder="Enter your phone"
          onChange={inputhandle}
        />
        <input
          type="text"
          name="role"
          value={form.role}
          placeholder="Enter your role"
          onChange={inputhandle}
        />
        {edit === false ? (
          <button onClick={btnhandle}>Add</button>
        ) : (
          <button onClick={btnhandle}>Updata</button>
        )}
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.phone}</td>
              <td>{e.role}</td>
              <td>
                <button onClick={() => edithandle(i)}>Edit</button>
                <button onClick={() => deletehandle(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Formhandle;
