import { useEffect, useRef, useState } from "react";

const PreviousSearchTracker = () => {
  const [search, setSearch] = useState("");
  const previousSearch = useRef("");

  useEffect(() => {
    previousSearch.current = search;
  }, [search]);

  return (
    <div className="page-card">
      <h2>Search Tracker</h2>
      <input
        className="form-input"
        type="text"
        placeholder="Search Here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="status-row">
        <p>
          Current Search: <strong>{search}</strong>
        </p>
        <p>
          Previous Search: <strong>{previousSearch.current}</strong>
        </p>
      </div>
    </div>
  );
};

export default PreviousSearchTracker;
