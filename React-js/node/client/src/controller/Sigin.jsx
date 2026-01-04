import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../services/API";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = getUser();
    if (
      !storedUser ||
      storedUser.email !== email ||
      storedUser.password !== password
    ) {
      setError("Invalid email or password");
      return;
    }

    console.log("Signin:", { email, password });

    // API call here
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Signin</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Signin</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Signin;
