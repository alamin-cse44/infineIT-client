import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

import { createContext, useEffect, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import "./App.scss";

const queryClient = new QueryClient();

export const InfineContext = createContext("context api");
export const PostContext = createContext("posts");

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data[0].address.street);
      });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <InfineContext.Provider value={[users, setUsers]}>
        <PostContext.Provider value={[posts, setPosts]}>
          <div>
            <RouterProvider router={router} />
          </div>
        </PostContext.Provider>
      </InfineContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
