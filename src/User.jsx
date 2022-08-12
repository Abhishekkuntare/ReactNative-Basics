import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { username } = useParams();
  const { userData, setUserData } = useState({});

  // useEffect(() => {
  //   fetch("/user.json")
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((data) => {
  //       setUserData(data[username]);
  //     });
  // }, [username]);

  // useEffect(() => {
  //   fetch("/user.json")
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((data) => {
  //       setUserData(data[username]);
  //     });
  // }, [username]);
  return (
    <div>
      <h1>{username}</h1>
      <h1>Name: {userData?.name}</h1>
      <h1>Age: {userData?.age}</h1>
    </div>
  );
};

export default User;
