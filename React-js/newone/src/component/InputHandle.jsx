import { useState } from "react";

const InputHandle = () => {
  //state manage
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobilenum: "",
    password: "",
  });
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);

  //input handle
  const inputhandle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //btn handle
  const btnsubmit = (e) => {
    e.preventDefault();

    //submit data
    if (edit == null) {
      setData([...data, form]);
    } else {
      const updata = [...data];
      updata[edit] = form;
      setData(updata);
      setEdit(null);
    }

    //reset data
    setForm({ name: "", email: "", mobilenum: "", password: "" });
  };

  //edit handle
  const edithandle = (i) => {
    setForm(data[i]);
    setEdit(i);
  };

  //delete handle
  const deletehandle = (i) => {
    setData(data.filter((_, index) => index != i));
  };

  return (
    <>
      {/* form handle */}
      <form action="" onSubmit={btnsubmit}>
        <label htmlFor="">Name :</label>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Enter the Name"
          required
          onChange={inputhandle}
        />
        <label htmlFor="">Email :</label>
        <input
          type="text"
          name="email"
          value={form.email}
          placeholder="Enter the email"
          required
          onChange={inputhandle}
        />
        <label htmlFor="">Mobile Num :</label>
        <input
          type="text"
          name="mobilenum"
          value={form.mobilenum}
          placeholder="Enter the mobile number"
          required
          onChange={inputhandle}
        />
        <label htmlFor="">Password : </label>
        <input
          type="text"
          name="password"
          value={form.password}
          placeholder="Enter the password"
          required
          onChange={inputhandle}
        />
        <button>{edit == null ? "Submit" : "Update"}</button>
      </form>

      {/* tablem handle */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Num</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.mobilenum}</td>
              <td>{e.password}</td>
              <td>
                <button onClick={() => edithandle(i)}>Edit</button>
                <button onClick={() => deletehandle(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default InputHandle;
