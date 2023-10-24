import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

import "./App.css";
import { createContext } from "react";

export const InfineContext = createContext("context api");
const test = "test title";

function App() {
  return (
    <InfineContext.Provider value={[test]}>
      <div>
        <RouterProvider router={router} />
      </div>
    </InfineContext.Provider>
  );
}

export default App;
