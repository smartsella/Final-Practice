import { useLocation } from "react-router-dom";

const Formbody = () => {
  //location
  const location = useLocation();

  //manage locate
  const { state } = location;
  const { name, email, phoneno, address, val, reason } = state;

  return (
    <>
      <div>
        <h1>From :</h1>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phoneno}</p>
        <h1>To :</h1>
        <p>The {val}</p>
        <p>{address}</p>
        <h1>Dear Sir,</h1>
        <p>{reason}</p>
        <h1>Thank you</h1>
      </div>
    </>
  );
};
export default Formbody;
