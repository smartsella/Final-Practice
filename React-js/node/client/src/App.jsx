import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./controller/Sigin";
import Signup from "./controller/Sigup";
import Dashboard from "./controller/Dashboard";
import Errorpage from "./controller/Errorpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
