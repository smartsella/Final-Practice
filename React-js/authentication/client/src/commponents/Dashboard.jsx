// Dashboard.jsx

// Profile.jsx
import { useSelector } from "react-redux";

const Dashboard = () => {
  const {
    name,
    role,
    city,
    skills,
    projectCount,
    availableForJob,
    isEmployed,
  } = useSelector((state) => state.user);

  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>City: {city}</p>
      <p>Projects: {projectCount}</p>
      <p>Available: {availableForJob ? "Yes" : "No"}</p>
      <p>Skills: {skills.join(", ")}</p>
      <p>Employee: {isEmployed}</p>
    </div>
  );
};

export default Dashboard;

// import { useContext } from "react";
// import CreateContext from "../context/CreateContext";

// const Dashboard = () => {
//   const { name, email, phone, role, skill, age, city, state } =
//     useContext(CreateContext);
//   return (
//     <>
//       <div>
//         <p>{name}</p>
//         <p>{email}</p>
//         <p>{phone}</p>
//         <p>{role}</p>
//         <p>{skill}</p>
//         <p>{age}</p>
//         <p>{city}</p>
//         <p>{state}</p>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

// import { useContext } from "react";
// import CreateContext from "../context/CreateContext";

// const Dashboard = () => {
//   const { name, role, city, skills, projectCount, availableForJob } =
//     useContext(CreateContext);

//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>Role: {role}</p>
//       <p>City: {city}</p>
//       <p>Projects: {projectCount}</p>
//       <p>Available: {availableForJob ? "Yes" : "No"}</p>
//       <p>Skills: {skills.join(", ")}</p>
//     </div>
//   );
// };

// export default Dashboard;
