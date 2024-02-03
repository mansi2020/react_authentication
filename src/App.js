import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import AuthProvider from "./Context/AuthProvider";
import firebase from "./firebase";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
