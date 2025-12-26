import { useContext } from "react";
import { CreateContext } from "./CreateContext";

const UsethatContext = () => {
  //use that context
  const user = useContext(CreateContext);
  return (
    <>
      <div>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <h1>{user.role}</h1>
      </div>
    </>
  );
};
export default UsethatContext;
