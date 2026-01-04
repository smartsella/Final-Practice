export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const removeUser = () => {
  localStorage.removeItem("user");
};

// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:3000/api/auth",
//   headers: { "Content-Type": "application/json" },
// });

// export default API;

// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:3000/api/auth",
//   headers: { "Content-Type": "application/json" },
// });

// export default API;
