import { useCallback, useState } from "react";
import List from "./List";

const UseCallback = () => {
  //state manage
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  //theme manage
  const toggletheme = {
    backgroundColor: dark ? "white" : "black",
    color: dark ? "black" : "white",
  };

  //usecall back working on for with argument and parameter
  const getnum = useCallback(
    (val) => {
      return [num + val + 1, num + val + 2, num + val + 3];
    },
    [num]
  );

  return (
    <>
      <div style={toggletheme}>
        <input
          type="number"
          value={num}
          placeholder="Enter your name"
          onChange={(e) => setNum(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((cur) => !cur)}>
          Toogle Theme change
        </button>
        <div>
          <List getItem={getnum} />
        </div>
      </div>
    </>
  );
};
export default UseCallback;
