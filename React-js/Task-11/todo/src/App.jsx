import { useState } from "react";

const App = () => {
  const [taskData, setTaskData] = useState({
    taskName: "",
    taskStatus: "",
  });

  const [updateTask, setUpdateTask] = useState([]);

  // Handle Input Change
  const taskhandle = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };

  // Add Task
  const submitTask = (e) => {
    e.preventDefault();

    if (!taskData.taskName || !taskData.taskStatus) {
      alert("Please fill all fields");
      return;
    }

    setUpdateTask((prev) => [...prev, taskData]);

    setTaskData({
      taskName: "",
      taskStatus: "",
    });
  };

  return (
    <>
      <h2>Todo App</h2>

      <form onSubmit={submitTask}>
        <input
          type="text"
          name="taskName"
          value={taskData.taskName}
          placeholder="Enter Task"
          onChange={taskhandle}
        />

        <select
          name="taskStatus"
          value={taskData.taskStatus}
          onChange={taskhandle}
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <button type="submit">ADD</button>
      </form>

      <hr />

      {updateTask.length === 0 ? (
        <h3>No Tasks Found</h3>
      ) : (
        updateTask.map((task, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{task.taskName}</h3>
            <p>Status: {task.taskStatus}</p>
          </div>
        ))
      )}
    </>
  );
};

export default App;
