import { useState, useEffect } from "react";
import API from "./api";
import "./App.css";

function App() {
  const COMPANY_ID = "TCS";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
  });

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch all employees
  const fetchEmployees = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await API.get(
        `/company/${COMPANY_ID}/employee?page=1&limit=10`,
      );
      setEmployees(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch employees");
    } finally {
      setLoading(false);
    }
  };

  // Fetch employees on mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const response = await API.post(
        `/company/${COMPANY_ID}/employee`,
        formData,
      );

      setSuccess("Employee added successfully!");
      setFormData({ name: "", email: "", department: "", salary: "" });
      fetchEmployees();

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add employee");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        setLoading(true);
        await API.delete(`/employee/${id}`);
        setSuccess("Employee deleted successfully!");
        fetchEmployees();
        setTimeout(() => setSuccess(""), 3000);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to delete employee");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container">
      <div className="form-section">
        <h2>Add New Employee</h2>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Employee"}
          </button>
        </form>
      </div>

      <div className="list-section">
        <h2>Employee List</h2>

        {loading && !employees.length && <p className="loading">Loading...</p>}

        {employees.length === 0 && !loading && (
          <p className="no-data">No employees found</p>
        )}

        {employees.length > 0 && (
          <table className="employee-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee._id}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.department}</td>
                  <td>${employee.salary}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(employee._id)}
                      disabled={loading}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
