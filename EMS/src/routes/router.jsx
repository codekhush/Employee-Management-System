import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Home } from "../pages/Home";
import {Dashboard} from "../pages/Dashboard"
import { Employee } from "../pages/Employees";
import { Login } from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />
  },
  {
    path: 'Employees',
    element: <Employee/>
  },
  {
    path: 'Login',
    element: <Login/>
  }
]);
