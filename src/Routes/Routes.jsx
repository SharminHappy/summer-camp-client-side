import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../LayOut/Dashboard";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses/MySelectedClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";
import ManageClasses from "../Pages/ManageClasses/ManageClasses";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'instructors',
        element: <PrivateRoute><Instructors></Instructors></PrivateRoute>,
       
      },
      {
        path: 'classes',
        element: <PrivateRoute><Classes></Classes></PrivateRoute>,

      },
      
      

    ]
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'registration',
    element: <Registration></Registration>
  },

  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'myselectedclasses',
        element: <StudentRoute><MySelectedClasses></MySelectedClasses></StudentRoute>
      },
      {
        path: 'manageusers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },{
        path:'addclass',
        element:<AddClass></AddClass>

      },
      {
        path:'manageclasses',
        element:<ManageClasses></ManageClasses>
      }
    ]
  }

]);

