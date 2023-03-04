function TodoList(props) {
  const {
    remove,
    todo,

    selectedStatus,
    edit,
    handleStatusChange,
  } = props;
  const filteredTodo =
    selectedStatus === "All"
      ? todo
      : todo.filter((t) => t.status === selectedStatus);
  return (
    <div className="todosContainer">
      {!todo.length ? (
        <p>No Todos</p>
      ) : (
        filteredTodo.map((val, idx) => {
          return (
            <div>
              <div className="todos">
                <input
                  key={val.id}
                  type="checkbox"
                  name="tasks"
                  checked={val.status === "Complete"}
                  onChange={(event) => handleStatusChange(event, val.id)}
                ></input>
                <div>{val.title}</div>
                <div>
                  <button className="edit" onClick={() => edit(val.id)}>
                    Edit
                  </button>
                  <button className="remove" onClick={() => remove(idx)}>
                    ➖
                  </button>{" "}
                  {val.status}{" "}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
export default TodoList;
