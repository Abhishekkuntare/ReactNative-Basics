import React, { useState } from "react";

const Todo = () => {
  // const [todos, setTodos] = useState([<li>Abhishek</li>, <li>Aniket</li>]);
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(["Abhishek", "Aniket"]);

  // with out form and submit button
  // function createTodo() {
  //   setTodos((oldTodos) => {
  //     setTask("");
  //     return [...oldTodos, task];
  //   });
  // }

  function createTodo(e) {
    e.preventDefault();
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, task];
    });
  }

  function pressEnter(e) {
    // console.log(e);
    if (e.keyCode == 13) {
      createTodo();
    }
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
        {/* <button onClick={createTodo}>Create Todo</button> */}
        <button type="submit">Create Todo</button>
        <ul>
          {/* {todos} */}
          {todos.map((todo, index) => {
            return (
              <div key={index}>
                <li>{todo}</li>
              </div>
            );
          })}
        </ul>
      </form>
    </>
  );
};

export default Todo;
