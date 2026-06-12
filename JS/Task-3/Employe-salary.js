const employees = [
  { id: 1, name: "John", salary: 25000 },
  { id: 2, name: "David", salary: 45000 },
  { id: 3, name: "Sam", salary: 60000 },
  { id: 4, name: "Peter", salary: 30000 },
];

const highSalaryEmployees = employees.filter(
  (employee) => employee.salary > 40000,
);

console.log(highSalaryEmployees);
