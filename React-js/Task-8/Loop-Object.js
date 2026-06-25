// for in method
const person = {
  name: "Sella",
  age: 22,
  city: "Chennai",
  course: "MERN Stack",
};

for (let key in person) {
  console.log(key, ":", person[key]);
}
