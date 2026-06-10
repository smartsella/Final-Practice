import { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "page-card dark" : "page-card light"}>
      <h2>{darkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button className="button" onClick={() => setDarkMode(!darkMode)}>
        Switch Mode
      </button>
    </div>
  );
};

export default DarkModeToggle;
