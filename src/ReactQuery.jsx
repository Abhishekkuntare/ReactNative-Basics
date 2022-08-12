import React, { useState } from "react";
import { useQuery } from "react-query";

const fetcher = (repo) => {
  //return the promise
  return fetch(`https://jsonplaceholder.typicode.com/${repo}`).then((res) =>
    res.json()
  );
};

const ReactQuery = () => {
  const [repoName, setRepoName] = useState("");

  const { isLoading, data } = useQuery(["todo-data", repoName], () =>
    fetcher(repoName)
  );

  if (isLoading) {
    return (
      <div>
        <input
          type="text"
          value={repoName}
          onChange={(e) => setRepoName(e.target.value)}
        />
        {/* <h1>loadiing...</h1> */}
      </div>
    );
  }

  return (
    <div>
      <input
        type="text"
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
      />
      <h1>userId: {data.userId}</h1>
      <h2>id: {data.id}</h2>
      <h3>title: {data.title}</h3>
      <h3>status: {data.completed}</h3>
    </div>
  );
};

export default ReactQuery;

// useQuery takes two arguments 1st is key, and  2nd is function to give the promices
// const {
//   error,
//   data,
//   isLoading,
//   isIdle,
//   isSuccess,
//   isError,
//   isFetched,
//   isStale,
//   isPreviousData,
// } = useQuery("hello world", () => {
//   return new Promise((resolve) => setTimeout(resolve, 1000));
// });
// console.log({
//   error,
//   data,
//   isLoading,
//   isIdle,
//   isSuccess,
//   isError,
//   isFetched,
//   isStale,
//   isPreviousData,
// });
