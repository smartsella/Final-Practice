export default function Dashboard({ user, onLogout }) {
  if (!user)
    return (
      <section>
        <h2>No user logged in</h2>
      </section>
    );

  return (
    <section className="dashboard">
      <h2>Dashboard</h2>
      <p>
        Welcome, {user.fullName} ({user.email})
      </p>
      <div>
        <button onClick={onLogout}>Logout</button>
      </div>
    </section>
  );
}
