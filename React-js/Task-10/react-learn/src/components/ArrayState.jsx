import { useState } from "react";

const ArrayState = () => {
  const [fruits, setFruits] = useState(["Apple", "Orange", "Mango"]);

  const addFruit = () => {
    setFruits([...fruits, "Banana"]);
  };

  return (
    <div>
      <h2>Array State</h2>

      <button onClick={addFruit}>Add Banana</button>

      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </div>
  );
};

export default ArrayState;
