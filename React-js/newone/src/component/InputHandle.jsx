import { useState } from "react";

const InputHandle = () => {
  
  //state manage...
  const [form, setForm] = useState({ name: "", age: "", phone: "" });
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState("");
  const [edit, setEdit] = useState(null);

  //input handle.....
  const inputhandle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //btn handle.....
  const btnhandle = (e) => {
    e.preventDefault();

    if (edit == null) {
      setData([...data, form]);
    } else {
      const up()
      console.log("sella smart mass");
      
    }
  };

  //edit handle....
  const edithandlee = () => {};

  //delete handle....
  const deletehandlee = () => {};

  return (
    <>
      <div>
        {/* form handle */}
        <form action="" onSubmit={btnhandle}>
          <input
            type="text"
            placeholder="Enter name"
            onChange={inputhandle}
            name="name"
            value={form.name}
          />
          <input
            type="text"
            placeholder="Enter age"
            onChange={inputhandle}
            name="age"
            value={form.age}
          />
          <input
            type="text"
            placeholder="Enter phone"
            onChange={inputhandle}
            name="phone"
            value={form.phone}
          />
          <button>Submit</button>
        </form>
        {/* table handle */}
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => (
              <tr key={i}>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.phone}</td>
                <td>
                  <button onClick={edithandlee}>Edit</button>
                </td>
                <td>
                  <button onClick={deletehandlee}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default InputHandle;

// import { useState } from "react";

// const InputHandle = () => {
//   //state manage
//   const [form, setForm] = useState({ name: "", age: "", phone: "" });
//   const [data, setData] = useState([]);
//   const [edit, setEdit] = useState(null);

//   //input handle..
//   const Inputhandle = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   //submit handle..
//   const btnhandle = (e) => {
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
//     setForm({ name: "", age: "", phone: "" });
//   };

//   // edit handle
//   const edithandle = (e) => {
//     setForm(data[e]);
//     setEdit(e);
//   };

//   // delethandle
//   const deletehandle = (e) => {
//     setData(data.filter((_, index) => index !== e));
//   };

//   return (
//     <>
//       <form action="" onSubmit={btnhandle}>
//         <input
//           type="text"
//           placeholder="Enter the name"
//           name="name"
//           onChange={Inputhandle}
//           value={form.name}
//         />
//         <input
//           type="text"
//           placeholder="Enter the age"
//           name="age"
//           onChange={Inputhandle}
//           value={form.age}
//         />
//         <input
//           type="text"
//           placeholder="Enter the phone number"
//           name="phone"
//           onChange={Inputhandle}
//           value={form.phone}
//         />
//         <button>Submit</button>
//       </form>

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Phone</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((e, i) => (
//             <tr key={i}>
//               <td>{e.name}</td>
//               <td>{e.age}</td>
//               <td>{e.phone}</td>
//               <td>
//                 <button onClick={() => edithandle(i)}>Edit</button>
//                 <button onClick={() => deletehandle(i)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };
// export default InputHandle;

// import { useState } from "react";

// const Crudoperation = () => {
//   //state manage
//   const [form, setForm] = useState({ name: "", age: "", phone: "" });
//   const [data, setData] = useState([]);
//   const [edit, setEdit] = useState(null);

//   // input handle
//   const Inputhandle = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   //btnhandle
//   const btnhandle = (e) => {
//     e.preventDefault();
//     if (edit == null) {
//       setData([...data, form]);
//     } else {
//       const update = [...data];
//       update[edit] = form;
//       setData(update);
//       setEdit(null);
//     }
//     //reset
//     setForm({ name: "", age: "", phone: "" });
//   };

//   //edit handle
//   const edithandle = (i) => {
//     setForm(data[i]);
//     setEdit(i);
//   };

//   //delete handle
//   const deletehandle = (i) => {
//     setData(data.filter((_, index) => i !== index));
//   };

//   return (
//     <>
//       <div>
//         <form action="" onSubmit={btnhandle}>
//           <input
//             type="text"
//             placeholder="Enter name"
//             name="name"
//             onChange={Inputhandle}
//             value={form.name}
//           />
//           <input
//             type="text"
//             placeholder="Enter age"
//             name="age"
//             onChange={Inputhandle}
//             value={form.age}
//           />
//           <input
//             type="text"
//             placeholder="Enter phone"
//             name="phone"
//             onChange={Inputhandle}
//             value={form.phone}
//           />
//           <button>{edit == null ? "Submit" : "Add"}</button>
//         </form>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Phone</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((e, i) => (
//               <tr key={i}>
//                 <td>{e.name}</td>
//                 <td>{e.age}</td>
//                 <td>{e.phone}</td>
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
// export default Crudoperation;
