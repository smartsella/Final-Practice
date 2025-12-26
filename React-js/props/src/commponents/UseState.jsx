import { useState } from "react";

const UseState = () => {
  //state manage
  const [sum, setSum] = useState(0);

  //btn handle
  const btnhandle = (e) => {
    e.preventDefault();

    setSum((prev) => prev + 1);
  };

  return (
    <>
      <div>
        <h1>Sum the value</h1>
        <h2>{sum}</h2>
        <button onClick={btnhandle}>submit</button>
      </div>
    </>
  );
};
export default UseState;
