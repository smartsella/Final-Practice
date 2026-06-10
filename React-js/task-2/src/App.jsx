import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import EmployeeRegistration from "./components/EmployeeRegistration";
import ProductSearch from "./components/ProductSearch";
import Users from "./components/Users";
import DarkModeToggle from "./components/DarkModeToggle";
import PreviousSearchTracker from "./components/PreviousSearchTracker";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<EmployeeRegistration />} />
          <Route path="/product-search" element={<ProductSearch />} />
          <Route path="/users" element={<Users />} />
          <Route path="/dark-mode" element={<DarkModeToggle />} />
          <Route path="/search-tracker" element={<PreviousSearchTracker />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
