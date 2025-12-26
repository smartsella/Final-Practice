import React, { useContext } from "react";
import { Createcontext } from "./Createcontext";

const Data3 = () => {
  //create context
  const context = useContext(Createcontext);
  const user = context;
  return (
    <>
      <div>
        <div>Data3</div>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <h1>{user.role}</h1>
        <h1>{user.status}</h1>
      </div>
      <h1>rajkumar</h1>
    </>
  );
};

export default Data3;
