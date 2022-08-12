import React from "react";
import Todo from "./Todo";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import User from "./User";
import ReactQuery from "./ReactQuery";
import Blog from "./Blog/Blog";
import { Example } from "./Example";

const App = () => {
  return (
    <>
      <h1>React Query</h1>
      {/* <Blog /> */}
      <Example />
      {/* <ReactQuery /> */}
      {/* <div>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/user/home">home 1</Link>
              <Link to="/user/help">home 2</Link>
              <Link to="/user/contact">home 3</Link>
              <Link to="/user/nope">home 4</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" />
            <Route exact path="/todo" element={<Todo />} />
            <Route exact path="/user/:username" element={<User />} />
          </Routes>
        </BrowserRouter>
      </div> */}
    </>
  );
};

export default App;
