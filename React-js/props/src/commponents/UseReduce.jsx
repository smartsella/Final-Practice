import { useState } from "react";

const UseReduce = () => {
  //state manage
  const [count, setCount] = useState(0);

  //btn handle
  const increment = () => {
    setCount((cur) => cur + 1);
  };

  const decrement = () => {
    setCount((cur) => cur + 1);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={increment}>+</button>
        <h1>{count}</h1>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
};
export default UseReduce;
