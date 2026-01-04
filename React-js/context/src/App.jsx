// import Data1 from "./props/Data1";
import { useState } from "react";
import CreateContext from "./prop-drilling/CreateContext";
import Data1 from "./prop-drilling/Data1";
import ProductsPage from "./process/ProductsPage";
import Inputhandle from "./process/Inputhandle";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const user = { name: "rajkumar", age: 21, role: "electrons" };
  return (
    <>
      <div>
        <CreateContext.Provider value={{ user, theme, setTheme }}>
          {/* <h1 style={{ backgroundColor: "blue" }}>Selladurai</h1> */}
          {/* <Data1 /> */}
          {/* <Data1 /> */}
          {/* <ProductsPage /> */}
          <Inputhandle />
        </CreateContext.Provider>
      </div>
    </>
  );
};
export default App;
