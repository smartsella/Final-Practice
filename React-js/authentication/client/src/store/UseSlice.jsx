// store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Selladurai",
  age: 23,
  role: "Full Stack Developer",
  email: "sellaa@gmail.com",
  phone: "9999999999",
  city: "Salem",
  state: "Tamil Nadu",
  country: "India",
  experience: 1,
  skills: ["HTML", "CSS", "JS", "React", "Node"],
  isEmployed: false,
  salaryExpectation: 500000,
  company: "NA",
  projectCount: 5,
  availableForJob: true,
  github: "github.com/sellaa",
  linkedin: "linkedin.com/in/sellaa",
  language: "English",
  preferredRole: "MERN Developer",
  noticePeriod: 30,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateCity(state, action) {
      state.city = action.payload;
    },
    updateEmployment(state, action) {
      state.isEmployed = action.payload;
    },
  },
});

export const { updateCity, updateEmployment } = userSlice.actions;
export default userSlice.reducer;
