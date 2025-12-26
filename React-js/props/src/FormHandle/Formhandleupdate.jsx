import { useState } from "react";

const Formhandleupdate = () => {
  //state manage
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneno: "",
    age: "",
  });
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);

  //input handle
  const inputhandle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //submit handle
  const btnhandle = (e) => {
    e.preventDefault();

    if (edit == false) {
      //data send
      setData([...data, form]);
    } else {
      //data correct updata
      const update = [...data];
      update[edit] = form;
      setData(update);
      setEdit(false);
    }
    //reset
    setForm({ name: "", email: "", phoneno: "", age: "" });
  };

  //edit handle
  const edithandle = (i) => {
    setForm(data[i]);
    setEdit(i);
  };

  //delete handle
  const deletehandle = (i) => {
    setData(data.filter((_, index) => index !== i));
  };

  return (
    <>
      <div>
        <form action="">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={inputhandle}
            value={form.name}
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={inputhandle}
            value={form.email}
          />
          <input
            type="number"
            placeholder="Enter your phone no"
            name="phoneno"
            onChange={inputhandle}
            value={form.phoneno}
          />
          <input
            type="number"
            placeholder="Enter your age"
            name="age"
            onChange={inputhandle}
            value={form.age}
          />
          <button onClick={btnhandle}>
            {edit == false ? "submit" : "update"}
          </button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => (
              <tr key={i}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phoneno}</td>
                <td>{e.age}</td>
                <td>
                  <button onClick={() => edithandle(i)}>Edit</button>
                </td>
                <td>
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
export default Formhandleupdate;
