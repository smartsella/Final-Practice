// Update.jsx
import { useDispatch } from "react-redux";
import { updateCity, updateEmployment } from "../store/UseSlice";

const Update = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(updateCity("Chennai"))}>
        Change City
      </button>

      <button onClick={() => dispatch(updateEmployment(true))}>
        Mark Employed
      </button>
    </>
  );
};

export default Update;
