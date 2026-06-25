import { useState } from "react";
import FormComponent from "./components/FormComponent";
import ListComponent from "./components/ListComponent";
import "./App.css";

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleFormSubmit = () => {
    // Trigger list refresh
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Form Management System</h1>
        <p>Submit forms and manage submissions</p>
      </header>

      <main className="app-main">
        <div className="form-section">
          <FormComponent onFormSubmit={handleFormSubmit} />
        </div>

        <div className="list-section">
          <ListComponent refreshTrigger={refreshTrigger} />
        </div>
      </main>
    </div>
  );
}

export default App;
