import { useState } from "react";
import Task from "./task";
import TodoList from "./todolist";

function Todo() {
  const [allTask, setAllTask] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [task, setTask] = useState({
    title: "",
    status: " ",
    id: 0,
  });
  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setTask((prevstate) => ({
      ...prevstate,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addTask = () => {
    setAllTask((prevstate) => [...prevstate, { ...task, id: allTask.length }]);
    setTask({ title: "", status: " " });
  };

  const remove = (idx) => {
    const taskRemain = allTask.filter((val, index) => index !== idx);

    setAllTask(taskRemain);
  };
  const edit = (id) => {
    const editTask = allTask.find((val) => val.id === id);

    if (editTask) {
      setTask(editTask);
      setAllTask(allTask.filter((val) => val.id !== id));
    }
  };

  // const handlecheck = (event) => {
  //   const checked = event.target.checked;
  //   setAllTask(allTask);
  // };
  const handleStatusChange = (event, id) => {
    if (event.target.checked) {
      let status = allTask.map((val) => {
        if (val.id === id) {
          val.status = "Complete";
        }

        return val;
      });
      setAllTask(status);
    } else if (!event.target.checked) {
      let status = allTask.map((val) => {
        if (val.id === id) {
          val.status = "InComplete";
        }
        return val;
      });
      setAllTask(status);
    }
  };
  const handleStatus = (event) => {
    setSelectedStatus(event.target.value);
  };
  return (
    <div className="todo-container">
      <h3>TODO LIST</h3>
      <div className="func-container">
        {" "}
        <div className="addtask-cont">
          <Task task={task} handleChange={handleChange} addTask={addTask} />
        </div>
        <div className="select">
          <select
            className="frontSelect"
            value={selectedStatus}
            onChange={handleStatus}
          >
            <option value="All">All</option>
            <option value="InComplete">InComplete</option>
            <option value="Complete"> Complete</option>
          </select>
        </div>
      </div>
      <div>
        <TodoList
          todo={allTask}
          remove={remove}
          handleStatusChange={handleStatusChange}
          selectedStatus={selectedStatus}
          handleChange={handleChange}
          edit={edit}
        />
      </div>
    </div>
  );
}

export default Todo;
