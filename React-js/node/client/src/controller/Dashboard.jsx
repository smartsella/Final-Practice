import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, removeUser } from "../services/API.js";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = getUser();

    if (!storedUser) {
      navigate("/signin");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const logout = () => {
    removeUser();
    navigate("/signin");
  };

  if (!user) return null;

  return (
    <div>
      <h2>Dashboard</h2>

      <p>
        <b>Name:</b> {user.name}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Password :</b> {user.password}
      </p>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
