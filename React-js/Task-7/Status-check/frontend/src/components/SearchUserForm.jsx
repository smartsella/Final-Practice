import { useState } from "react";

function SearchUserForm() {
  const [searchName, setSearchName] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!searchName) return;

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch(
        `http://localhost:5000/api/search?name=${encodeURIComponent(searchName)}`,
      );
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
      <h2>Search User</h2>
      <form onSubmit={handleSearch}>
        <div className="form-field">
          <label htmlFor="search-name">Search Name</label>
          <input
            id="search-name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Ravi"
            required
          />
        </div>
        <div className="actions">
          <button className="primary" type="submit" disabled={loading}>
            {loading ? "Searching..." : "Search"}
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

export default SearchUserForm;
