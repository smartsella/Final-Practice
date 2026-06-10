import { useState } from "react";

const EmployeeRegistration = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [employees, setEmployees] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: Date.now(),
      name,
      department,
      salary,
    };

    setEmployees([...employees, newEmployee]);
    setName("");
    setDepartment("");
    setSalary("");
  };

  return (
    <div className="page-card">
      <h2>Employee Registration</h2>

      <form className="form-grid" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="form-input"
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
        <input
          className="form-input"
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />
        <button className="button" type="submit">
          Add Employee
        </button>
      </form>

      <h3>Total Employees: {employees.length}</h3>

      <div className="item-list">
        {employees.map((emp) => (
          <div className="card" key={emp.id}>
            <p>Name: {emp.name}</p>
            <p>Department: {emp.department}</p>
            <p>Salary: ₹{emp.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeRegistration;
