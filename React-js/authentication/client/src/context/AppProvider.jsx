// AppProvider.js

import CreateContext from "./CreateContext";

const AppProvider = ({ children }) => {
  const contextData = {
    name: "selladurai",
    age: 23,
    role: "mern stack developer",
    email: "sella@gmail.com",
    phone: 1234456778,
    city: "chennai",
    state: "tamil nadu",
    country: "india",
    experience: "2year",
    skill: ["react.js", "node.js", "express.js", "mongodb"],
  };

  return (
    <>
      <CreateContext.Provider value={contextData}>
        {children}
      </CreateContext.Provider>
    </>
  );
};
export default AppProvider;

// import CreateContext from "../context/CreateContext";

// const AppProvider = ({ children }) => {
//   const contextData = {
//     name: "Selladurai",
//     age: 23,
//     role: "Full Stack Developer",
//     email: "sellaa@gmail.com",
//     phone: "9999999999",
//     city: "Salem",
//     state: "Tamil Nadu",
//     country: "India",
//     experience: 1,
//     skills: ["HTML", "CSS", "JS", "React", "Node"],
//     isEmployed: false,
//     salaryExpectation: 500000,
//     company: "NA",
//     projectCount: 5,
//     availableForJob: true,
//   };

//   return (
//     <CreateContext.Provider value={contextData}>
//       {children}
//     </CreateContext.Provider>
//   );
// };

// export default AppProvider;
