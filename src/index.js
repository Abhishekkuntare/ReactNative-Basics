// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
// import client from "./Blog/react-query-client";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <QueryClientProvider client={client}>
//     <App />
//     <ReactQueryDevtools />
//   </QueryClientProvider>
// );

import * as React from "react";
import { render } from "react-dom";
import { Example1 } from "./Example1";

import "./styles.css";

const App = () => (
  <div className="example-container">
    <Example1 />
  </div>
);

render(<App />, document.getElementById("root"));

// import * as React from "react";
// import { render } from "react-dom";
// import { Example } from "./Example";
// import "./styles.css";

// render(<Example />, document.getElementById("root"));
