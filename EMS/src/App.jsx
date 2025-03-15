import { Link, Outlet } from "react-router-dom";
export const App = () => {
  console.log("App is rendering...");
  return (
    <>
      <div className="body_cont">
        <div className="header">
          <h1>Employee Management System</h1>
          <nav>
            <ul>
              <li> <Link to='/'> Home </Link> </li>
              <li> <Link to='/dashboard'> Dashboard </Link> </li>
              <li> <Link to='/Employees'> Employee </Link> </li>
            </ul>

            <button><Link to='/Login'>Login</Link></button>
          </nav>
        </div>
        <div className="body">
          <Outlet/>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
};
