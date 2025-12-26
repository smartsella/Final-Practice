import { useRef, useState } from "react";

const UseRef = () => {
  //state manage
  const [input, setInput] = useState("");

  //ref manage
  const inputref = useRef();

  //btn handle
  const displayshow = (e) => {
    e.preventDefault();
    setInput(inputref.current.value);
    console.log(inputref.current.value);
    console.log(inputref.current.focus());
    console.log(inputref.current.name);
  };
  return (
    <>
      <div>
        <form action="">
          <label htmlFor="">Name :</label>
          <input type="text" placeholder="Enter your name" ref={inputref} />
          <button onClick={displayshow}>Submit</button>
          <p>My name is {input}</p>
        </form>
      </div>
    </>
  );
};

export default UseRef;

// import { useRef, useState } from "react";

// const UseRef = () => {
//   //state manage
//   const [input, setInput] = useState("");

//   //ref manage
//   const inputRef = useRef(null);
//   console.log("commonent rerendaring");

//   const display = (e) => {
//     e.preventDefault();

//     console.log("Name attribute:", inputRef.current.name);
//     console.log("Focus:", inputRef.current.focus());
//     console.log("Input Value:", inputRef.current.value);

//     // update state from ref
//     setInput(inputRef.current.value);
//   };

//   return (
//     <div>
//       <form>
//         <label>Name:</label>

//         <input
//           type="text"
//           placeholder="Enter Your Name"
//           ref={inputRef}
//           name="username"
//         />

//         <p>My name is: {input}</p>

//         <button onClick={display}>Show output</button>
//       </form>
//     </div>
//   );
// };

// export default UseRef;
