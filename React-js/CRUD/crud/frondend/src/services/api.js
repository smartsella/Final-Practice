import axios from "axios";

const API = axios.create({
  baseURL: "https://crud-backend-1-8ai5.onrender.com/api/users",
});

export default API;
