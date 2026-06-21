import { useState } from "react";

function GetUserForm() {
  const [userId, setUserId] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchUser = async (event) => {
    event.preventDefault();
    if (!userId) return;

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch(`http://localhost:5000/api/user/${userId}`);
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
      <h2>Get User by ID</h2>
      <form onSubmit={handleFetchUser}>
        <div className="form-field">
          <label htmlFor="user-id">User ID</label>
          <input
            id="user-id"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="101"
            required
          />
        </div>
        <div className="actions">
          <button className="primary" type="submit" disabled={loading}>
            {loading ? "Fetching..." : "Fetch"}
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

export default GetUserForm;
