import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Login from "../Authentication/Login";
import Home from "../Home/Home";
export const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children:[
        {
path:"/",
element:<Home/>
        }
     
      ]
    },
    {
      path:"/login",
      element:<Login/>
    }
  ]);

