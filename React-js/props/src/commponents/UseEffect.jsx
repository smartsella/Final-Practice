import { useEffect, useState } from "react";

const UseEffect = () => {
  //exam
  console.log("component rendaring");

  //state manage
  const [add, setAdd] = useState(0);
  const [mul, setMul] = useState(1);

  useEffect(() => {
    console.log("useeffect running");
  }, [add]);

  return (
    <>
      <div>
        <h1>{add}</h1>
        <button onClick={() => setAdd((cur) => cur + 1)}>ADD</button>
        <h1>{mul}</h1>
        <button onClick={() => setMul((cur) => cur * 2)}>MUL</button>
      </div>
    </>
  );
};
export default UseEffect;
