import React, { useState } from "react";

let gloabot = 0;
const List = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function createTodo(event) {
    event.preventDefault();
    setTodos((oldTodos) => {
      setTask(""); // after creating todo the input bar is empty with this
      return [...oldTodos, { todo: task, id: gloabot++ }];
    });
  }

  return (
    <>
      <form action="" onSubmit={createTodo}>
        <div>
          <h1>Todo</h1>
          <input
            type="text"
            value={task}
            onChange={(event) => {
              setTask(event.target.value);
            }}
          />
          <button type="submit">create todo</button>
          {todos.map((item) => {
            return (
              <div key={item.id}>
                <li>{item.todo}</li>
                <li>{item.id}</li>
              </div>
            );
          })}
        </div>
      </form>
    </>
  );
};

export default List;
