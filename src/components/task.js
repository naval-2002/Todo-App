import { useState } from "react";

function Task(props) {
  const { handleChange, addTask, task } = props;

  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <div className="modal-container">
        <div className="modal">
          <h4>Add TODO</h4>
          <div>
            <form>
              <label>Title</label>

              <input
                type="text"
                value={task.title}
                onChange={(e) => handleChange(e)}
                name="title"
              />
              <label>Status</label>
              <select
                onChange={(e) => handleChange(e)}
                name="status"
                value={task.status}
              >
                <option>Select</option>
                <option value="InComplete">InComplete</option>
                <option value="Complete">Complete</option>
              </select>
            </form>
            <div className="btn-container">
              <button
                disabled={!task.title}
                className="confirm-btn"
                onClick={() => addTask()}
              >
                Add Task
              </button>
              <button onClick={() => setShowForm(false)}> Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button className="addTask" onClick={() => setShowForm(true)}>
        Add Task
      </button>
    </div>
  );
}

export default Task;
