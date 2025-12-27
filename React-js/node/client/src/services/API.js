import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  headers: { "Content-Type": "application/json" },
});

export default API;

// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:3000/api/auth",
//   headers: { "Content-Type": "application/json" },
// });

// export default API;
