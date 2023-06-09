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
        loader: async () => {
          try {
            const response = await fetch('http://localhost:5000/instructors');
            const data = await response.json();
            return data;
          } catch (error) {
            console.log(error.message);
          }
        }
      },
      {
        path: 'classes',
        element: <Classes></Classes>,
        loader: async () => {
          try {
            const response = await fetch('http://localhost:5000/classes');
            const data = await response.json();
            return data;
          } catch (error) {
            console.log(error.message);
          }
        }


      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      },

    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'myselectedclasses',
        element: <MySelectedClasses></MySelectedClasses>
      }
    ]
  }

]);

