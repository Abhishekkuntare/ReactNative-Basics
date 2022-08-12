import React, { useState } from "react";
import { useQuery } from "react-query";
import Post from "./Post";
import client from "./react-query-client";

//1.fetch the api
const fetcher = (url) => fetch(url).then((res) => res.json());

const Blog = () => {
  const [postId, setPostId] = useState(null);

  //2.setting up the query as posts
  const { isLoading, data: posts } = useQuery(
    "posts",
    () => fetcher("https://jsonplaceholder.typicode.com/posts"),
    {
      select: (result) => result.slice(0, 5),
    }
  );

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (postId !== null) {
    return <Post postId={postId} goBack={() => setPostId(null)} />;
  }
  // console.log("cache post?", { cachedPost });

  return (
    <div className="App">
      {posts.map((post) => {
        const cachedPost = client.getQueryData(["post", post.id]);

        return (
          <p key={post.id}>
            <b>{cachedPost ? "(visited)" : ""} </b>
            <a onClick={() => setPostId(post.id)} href="#">
              {post.id}- {post.title}
            </a>
            <p>{post.body}</p>
          </p>
        );
      })}
    </div>
  );
};

export default Blog;
