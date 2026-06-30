import { useState } from "react";

const ArrayObjectState = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Ravi",
      salary: 25000,
    },
    {
      id: 2,
      name: "Priya",
      salary: 30000,
    },
    {
      id: 3,
      name: "Arun",
      salary: 35000,
    },
  ]);

  const updateSalary = (id) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === id) {
        return {
          ...employee,
          salary: 50000,
        };
      }

      return employee;
    });

    setEmployees(updatedEmployees);
  };

  return (
    <div>
      <h2>Array of Objects State</h2>

      {employees.map((employee) => (
        <div key={employee.id}>
          <p>ID : {employee.id}</p>
          <p>Name : {employee.name}</p>
          <p>Salary : {employee.salary}</p>

          <button onClick={() => updateSalary(employee.id)}>
            Update Salary
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default ArrayObjectState;
