import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import AddCoffee from "./Components/AddCoffee";
import DeleteCoffee from "./Components/DeleteCoffee";
import UpdateCoffee from "./Components/UpdateCoffee";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import AuthProvider from "../public/Firebase/AuthProvider";
import Users from "./Components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("http://localhost:8000/coffee"),
  },
  {
    path: "addCoffee",
    element: <AddCoffee />,
  },
  {
    path: "updateCoffee/:id", // Add :id to the path
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`http://localhost:8000/coffee/${params.id}`), // Correctly destructure params
  },
  {
    path: "deleteCoffee",
    element: <DeleteCoffee />,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: <LogIn></LogIn>,
  },
  {
    path: "/user",
    element: <Users></Users>,
    loader: () => fetch("http://localhost:8000/users"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
