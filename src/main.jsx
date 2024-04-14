import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import CardDetails from "./Components/CardDetails/CardDetails";
import ContactUs from "./Components/ContactUs/ContactUs";
import Error from "./Components/Error/Error";
import FireBaseProvider from "./Components/FireBaseProvider/FireBaseProvider";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";
import Registar from "./Components/Registar/Registar";
import Root from "./Components/Root/Root";
import UserProfille from "./Components/UserProfile/UserProfille";
import UserUpdate from "./Components/UserUpdate/UserUpdate";

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
        element:<PrivetRoute><UserUpdate/></PrivetRoute>
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
      {
        path: "/contactUs",
        element: <ContactUs/>
      },
      {
        path: "/about",
        element: <About/>
      }
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
