import { useState } from "react";

const ObjectState = () => {
  const [student, setStudent] = useState({
    name: "Ravi",
    course: "MERN",
    city: "Chennai",
  });

  const updateStudent = () => {
    setStudent({
      ...student,
      city: "Bangalore",
    });
  };

  return (
    <div>
      <h2>Object State</h2>

      <p>Name : {student.name}</p>
      <p>Course : {student.course}</p>
      <p>City : {student.city}</p>

      <button onClick={updateStudent}>Update City</button>
    </div>
  );
};

export default ObjectState;
