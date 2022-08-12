import React, { useState } from "react";

let globalId = 0;

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function createTodo(event) {
    event.preventDefault();
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, { todo: task, id: globalId++ }]; // passes array of the  objects
    });
  }

  function pressEnter(e) {
    // console.log(e);
    if (e.keyCode == 13) {
      createTodo();
    }
  }

  function deleteItem(itemId) {
    setTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemId));
  }
  return (
    <>
      <h1>Best todo app here</h1>
      <form onSubmit={createTodo}>
        <input
          onKeyDown={pressEnter}
          type="text"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button type="submit">Create Todo</button>
        <ul>
          {todos.map((item, index) => {
            return (
              <div key={item.id}>
                <li>
                  {item.todo} {item.id}
                </li>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </form>
    </>
  );
};

export default Todo;
