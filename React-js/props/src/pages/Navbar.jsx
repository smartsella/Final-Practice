import { Link } from "react-router-dom";

const Navbar = () => {
  // Rounded button style
  const navBtn = {
    color: "#fff",
    backgroundColor: "rgba(255,255,255,0.25)",
    padding: "8px 18px",
    borderRadius: "20px", // rounded buttons
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    transition: "0.3s",
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#0a58ff",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        {/* Logo / Title */}
        <h1
          style={{
            margin: 0,
            color: "#fff",
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          React Application
        </h1>

        {/* Navigation Links */}
        <div
          style={{
            display: "flex",
            gap: "18px",
          }}
        >
          <Link style={navBtn} to="/">
            Home
          </Link>
          <Link style={navBtn} to="/usestate">
            UseState
          </Link>
          <Link style={navBtn} to="/useeffect">
            UseEffect
          </Link>
          <Link style={navBtn} to="/useref">
            UseRef
          </Link>
          <Link style={navBtn} to="/usememo">
            UseMemo
          </Link>
          {/* <Link to="/praps" style={navBtn}>
            Praps Method
          </Link>
          <Link to="/forminput" style={navBtn}>
            Leave Form
          </Link>
          <Link to="/formhandle" style={navBtn}>
            Form Update and Edit
          </Link>
          <Link to="/form" style={navBtn}>
            Form
          </Link>
          <Link to="/usecallback" style={navBtn}>
            UseCallBack
          </Link>
          <Link to="/usereduce" style={navBtn}>
            UseReduce
          </Link> */}
          <Link to="/usecontext" style={navBtn}>
            UseContext
          </Link>
          <Link to="/todo" style={navBtn}>
            Todo
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
