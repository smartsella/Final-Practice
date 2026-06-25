import { useState } from "react";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [view, setView] = useState("home"); // 'home' | 'register' | 'login' | 'dashboard'
  const [users, setUsers] = useState([]); // store registered users in-memory
  const [currentUser, setCurrentUser] = useState(null);

  function handleRegister(user) {
    setUsers((prev) => [...prev, user]);
    setView("login");
  }

  function handleLogin(user) {
    setCurrentUser(user);
    setView("dashboard");
  }

  function handleLogout() {
    setCurrentUser(null);
    setView("home");
  }

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>React Interview Task — Register → Login → Dashboard</h1>
        <nav className="app-nav">
          <button onClick={() => setView("home")}>Home</button>
          <button onClick={() => setView("register")}>Register</button>
          <button onClick={() => setView("login")}>Login</button>
        </nav>
      </header>

      <main>
        {view === "home" && (
          <section>
            <h2>Welcome</h2>
            <p>Use the Register button to create an account.</p>
          </section>
        )}

        {view === "register" && (
          <Register onRegister={handleRegister} navigate={(v) => setView(v)} />
        )}

        {view === "login" && (
          <Login
            users={users}
            onLogin={handleLogin}
            navigate={(v) => setView(v)}
          />
        )}

        {view === "dashboard" && (
          <Dashboard user={currentUser} onLogout={handleLogout} />
        )}
      </main>
    </div>
  );
}

export default App;
