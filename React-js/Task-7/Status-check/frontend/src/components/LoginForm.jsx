import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
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
      <h2>Login User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@gmail.com"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="12345"
            required
          />
        </div>
        <div className="actions">
          <button className="primary" type="submit" disabled={loading}>
            {loading ? "Checking..." : "Login"}
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

export default LoginForm;
