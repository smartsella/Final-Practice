import { useState } from "react";

const Todo = () => {
  //state manage
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  //btnsubmit
  const btnsubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    setTodo([...todo, text]);
    setText("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter the text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={btnsubmit}>Submit</button>
      <ul>
        {todo.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </>
  );
};
export default Todo;
