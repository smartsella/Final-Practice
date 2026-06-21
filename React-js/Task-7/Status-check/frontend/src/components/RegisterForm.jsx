import { useState } from "react";

function RegisterForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, age: Number(age) }),
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
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="register-name">Name</label>
          <input
            id="register-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ravi"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="register-age">Age</label>
          <input
            id="register-age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="22"
            required
          />
        </div>
        <div className="actions">
          <button className="primary" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Register"}
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

export default RegisterForm;
