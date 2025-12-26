import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forminput = () => {
  //navigate
  const navigate = useNavigate();
  //state manage
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneno: "",
    address: "",
    val: "",
    reason: "",
  });

  //input manage
  const inputhandle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //btn handle
  const btnhandle = (e) => {
    e.preventDefault();
    navigate("/formbody", { state: data });
  };

  return (
    <>
      <div>
        <form action="">
          <label htmlFor="">Name :</label>
          <input
            type="text"
            placeholder="Enter the name"
            name="name"
            onChange={inputhandle}
          />
          <label htmlFor="">Email :</label>
          <input
            type="email"
            placeholder="Enter the email"
            name="email"
            onChange={inputhandle}
          />
          <label htmlFor="">Phone no :</label>
          <input
            type="number"
            placeholder="Enter the phone no"
            name="phoneno"
            onChange={inputhandle}
          />
          <label htmlFor="">Address :</label>
          <input
            type="text"
            placeholder="Enter the address"
            name="address"
            onChange={inputhandle}
          />
          <label htmlFor="">Manage :</label>
          <select name="val" id="" onChange={inputhandle}>
            <option value="">Select one...</option>
            <option value="Genaral Manage">Genaral Manager</option>
            <option value="Team Leader">Team Leader</option>
            <option value="Human resources">Human Resources</option>
          </select>
          <label htmlFor="">Reason</label>
          <textarea
            name="reason"
            id=""
            onChange={inputhandle}
            placeholder="Enter your reason"
          ></textarea>
          <button onClick={btnhandle}>Show form</button>
        </form>
      </div>
    </>
  );
};
export default Forminput;
