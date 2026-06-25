import { useState } from "react";

export default function Login({ users, onLogin, navigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const API = import.meta.env.VITE_API_URL || "http://localhost:4000";
    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) return setError(data.message || "Login failed");
      // persist token
      if (data.token) localStorage.setItem("token", data.token);
      if (onLogin && data.user) onLogin(data.user);
    } catch (err) {
      setError("Network error");
    }
  }

  return (
    <section className="form-card">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-actions">
          <button type="submit">Login</button>
          <button type="button" onClick={() => navigate("register")}>
            Go to Register
          </button>
        </div>
      </form>
    </section>
  );
}
