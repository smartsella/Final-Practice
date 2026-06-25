import { useState } from "react";

const API = "http://localhost:4000";

export default function Register({ onRegister, navigate }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!fullName || !email || !password || !confirm) {
      setError("Please fill all fields");
      return;
    }
    if (password !== confirm) {
      setError("Password and Confirm Password do not match");
      return;
    }

    try {
      const res = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      if (onRegister && data.user) onRegister(data.user);
      setSuccess("Registration successful");
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirm("");
    } catch (err) {
      setError("Network error");
    }
  }

  return (
    <section className="form-card">
      <h2>Register</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
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
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>
        <div className="form-actions">
          <button type="submit">Register</button>
          <button type="button" onClick={() => navigate("login")}>
            Go to Login
          </button>
        </div>
      </form>
    </section>
  );
}
