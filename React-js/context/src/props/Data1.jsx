import React from "react";
import Data2 from "./Data2";

const Data1 = () => {
  const user = [1, 2, 3];
  return (
    <div>
      <h1>Data1</h1>
      <Data2 data={user} />
    </div>
  );
};

export default Data1;
