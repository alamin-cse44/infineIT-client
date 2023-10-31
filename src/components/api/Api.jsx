import React, { useContext, useEffect } from "react";
import { InfineContext, PostContext } from "../../App";
import Query from "../../hooks/Query";

const Api = () => {
  const [users] = useContext(InfineContext);
  const [posts, setPosts] = useContext(PostContext);
  const [allPost] = Query();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="mx-20 mt-5 text-center">
      <h1>Context Api Testing</h1>
      <h1>Query posts : {allPost.length}</h1>
      <h1>Number of Posts : {posts.length}</h1>
      <h2>Total user : {users.length}</h2>
      <div className="flex flex-wrap gap-10 justify-center mt-5">
        {users.map((user) => (
          <div key={user.id} className="shadow-lg p-5">
              <h1 className="font-bold">name : {user.name}</h1>
              <h2>{user.email}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Api;
