import { useState } from "react";

function StudentForm() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [city, setCity] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("http://localhost:5000/api/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, course, city }),
      });

      const data = await res.json();
      setResponse({ status: res.status, data });
    } catch (error) {
      setResponse({
        status: 500,
        data: { success: false, message: "Server error" },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="card">
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="student-name">Name</label>
          <input
            id="student-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Priya"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="student-course">Course</label>
          <input
            id="student-course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="MERN"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="student-city">City</label>
          <input
            id="student-city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Chennai"
            required
          />
        </div>
        <div className="actions">
          <button className="primary" type="submit" disabled={loading}>
            {loading ? "Saving..." : "Submit"}
          </button>
        </div>
      </form>
      {response && (
        <div
          className={`response-box ${response.data.success ? "success" : "error"}`}
        >
          <pre>{JSON.stringify(response.data, null, 2)}</pre>
        </div>
      )}
    </section>
  );
}

export default StudentForm;
