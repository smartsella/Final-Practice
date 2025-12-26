import { useContext } from "react";
import CreateContext from "./CreateContext";

const Data3 = () => {
  const { user, theme, setTheme } = useContext(CreateContext);
  // console.log(user);
  // console.log(theme);
  // console.log(setTheme);

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <h1>Day3</h1>
      <h1>Theme: {theme}</h1>

      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </button>

      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h2>{user.role}</h2>
    </div>
  );
};

export default Data3;
