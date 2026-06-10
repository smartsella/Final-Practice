import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-card">
      <h1>React Mini Projects</h1>

      <ul className="link-list">
        <li>
          <Link to="/employee">Employee Registration Form</Link>
        </li>
        <li>
          <Link to="/product-search">Product Search System</Link>
        </li>
        <li>
          <Link to="/users">User Data Fetch and Display</Link>
        </li>
        <li>
          <Link to="/dark-mode">Dark Mode Toggle</Link>
        </li>
        <li>
          <Link to="/search-tracker">Previous Search Tracker</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
