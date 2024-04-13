import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardDetails from "./Components/CardDetails/CardDetails";
import Error from "./Components/Error/Error";
import FireBaseProvider from "./Components/FireBaseProvider/FireBaseProvider";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";
import Registar from "./Components/Registar/Registar";
import Root from "./Components/Root/Root";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
import UserProfille from "./Components/UserProfile/UserProfille";

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
        path: '/updateProfile',
        element:<PrivetRoute> <UpdateProfile/></PrivetRoute>
      },
      {
        path: "/userProfile",
        element: <PrivetRoute><UserProfille/></PrivetRoute>
      },
      {
        path: "/registar",
        element: <Registar/>
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path: "/details/:id",
        element:<PrivetRoute><CardDetails/></PrivetRoute>
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
