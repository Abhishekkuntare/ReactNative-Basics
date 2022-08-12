import React from "react";
import { useQuery } from "react-query";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Post = ({ postId, goBack }) => {
  const { data, isLoading } = useQuery(["post", postId], () =>
    fetcher(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      cacheTime: 0,
    })
  );

  if (isLoading) {
    return <img src="https://i.gifer.com/PbY4.gif" alt="" />;
  }
  return (
    <div>
      <a onClick={goBack} href="#">
        Go Back
      </a>
      {/* <li>Post id : {postId}</li> */}
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default Post;
