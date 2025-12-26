import { useEffect, useState } from "react";

const List = ({ getItem }) => {
  //state manage
  const [item, setItem] = useState([]);

  //effecting
  useEffect(() => {
    console.log("setting item");
    setItem(getItem(10));
  }, [getItem]);

  return (
    <>
      <div>
        {item.map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      </div>
    </>
  );
};
export default List;
