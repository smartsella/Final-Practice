import { useMemo, useState } from "react";

const UseMemo = () => {
  //state manage
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  //style manage
  const themestyle = {
    backgroundColor: dark ? "white" : "black",
    color: dark ? "black" : "white",
  };

  //slow func
  const slowfunc = (num) => {
    console.log("running slow");

    for (let i = 0; i < 10000; i++) return num * 2;
  };

  //use Memo used reduced memory for altrenety used for useEffect method
  const doublenum = useMemo(() => {
    return slowfunc(num);
  }, [num]);

  return (
    <>
      <div>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <button onClick={() => setDark((cur) => !cur)}>Toggle Theme</button>
        <div style={themestyle}>{doublenum}</div>
      </div>
    </>
  );
};
export default UseMemo;
