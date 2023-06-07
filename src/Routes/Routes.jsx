import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";




 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'instructors',
            element:<PrivateRoute><Instructors></Instructors></PrivateRoute>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'registration',
          element:<Registration></Registration>
        },
        
      ]
    },
  ]);

  