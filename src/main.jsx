import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error/Error";
import FireBaseProvider from "./Components/FireBaseProvider/FireBaseProvider";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Registar from "./Components/Registar/Registar";
import Root from "./Components/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/registar",
        element: <Registar/>
      },
      {
        path: "/login",
        element:<Login/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FireBaseProvider>
      <RouterProvider router={router} />
    </FireBaseProvider>
  </React.StrictMode>
);
