import { createBrowserRouter } from "react-router-dom";
import HomePage from "./view/HomePage/HomePage";
import LogIn from "./view/LogInPage/LogIn";
import Register from './view/register/Register';

export const router = createBrowserRouter([
  
  {
    path: "/",
    element:<HomePage />,
    children:[
     
      {
        element:<Register />,
        path:"element-register"
      },

      {
        element:<LogIn />,
        path:"element-logIn"
      }
    ]
  }
  ]);