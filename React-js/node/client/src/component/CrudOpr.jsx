import { useState } from "react";

const CrudOpr = () => {
  //state manage
  const [form, setForm] = useState({ name: "", age: "", email: "" });
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);

  //input handle
  const inputhandle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //btn handle
  const submithandle = (e) => {
    e.preventDefault();

    if (edit == null) {
      setData([...data, form]);
    } else {
      const updata = [...data];
      updata[edit] = form;
      setData(updata);
      setEdit(null);
    }

    //reset data
    setForm({ name: "", age: "", email: "" });
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
        <form action="" onSubmit={submithandle}>
          <input
            type="text"
            placeholder="Enter the name"
            name="name"
            value={form.name}
            onChange={inputhandle}
          />
          <input
            type="text"
            placeholder="Enter the age"
            name="age"
            value={form.age}
            onChange={inputhandle}
          />
          <input
            type="text"
            placeholder="Enter the email"
            name="email"
            value={form.email}
            onChange={inputhandle}
          />
          <button>{edit === null ? "Add" : "Updata"}</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => (
              <tr key={i}>
                <td>{e.name}</td>
                <td>{e.age}</td>
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
export default CrudOpr;
// import { useState } from "react";

// const CrudOpr = () => {
//   //state manage
//   const [form, setForm] = useState({ name: "", age: "", place: "", email: "" });
//   const [data, setData] = useState([]);
//   const [edit, setEdit] = useState(null);

//   //input handle
//   const inputhandle = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   //submithandle
//   const submithandle = (e) => {
//     e.preventDefault();
//     if (edit == null) {
//       setData([...data, form]);
//     } else {
//       const updata = [...data];
//       updata[edit] = form;
//       setData(updata);
//       setEdit(null);
//     }

//     //reset data
//     setForm({ name: "", age: "", place: "", email: "" });
//   };

//   //edithandle
//   const edithandle = (i) => {
//     setForm(data[i]);
//     setEdit(i);
//   };

//   //deletehandle
//   const deletehandle = (i) => {
//     setData(data.filter((_, index) => index !== i));
//   };

//   return (
//     <>
//       <div>
//         <h1>Form Data</h1>
//         <form action="" onSubmit={submithandle}>
//           <input
//             type="text"
//             placeholder="Enter the Name"
//             required
//             name="name"
//             onChange={inputhandle}
//             value={form.name}
//           />
//           <input
//             type="text"
//             placeholder="Enter the Place"
//             required
//             name="place"
//             onChange={inputhandle}
//             value={form.place}
//           />
//           <input
//             type="text"
//             placeholder="Enter the age"
//             required
//             name="age"
//             onChange={inputhandle}
//             value={form.age}
//           />
//           <input
//             type="text"
//             placeholder="Enter the Email"
//             required
//             name="email"
//             onChange={inputhandle}
//             value={form.email}
//           />
//           <button>{edit === null ? "Submit" : "Updata"}</button>
//         </form>
//         <h1>Table Data</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Place</th>
//               <th>Age</th>
//               <th>Email</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((e, i) => (
//               <tr key={i}>
//                 <td>{e.name}</td>
//                 <td>{e.place}</td>
//                 <td>{e.age}</td>
//                 <td>{e.email}</td>
//                 <td>
//                   <button onClick={() => edithandle(i)}>Edit</button>
//                   <button onClick={() => deletehandle(i)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };
// export default CrudOpr;
