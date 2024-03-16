import { Outlet, Link } from "react-router-dom";
import logo from "./assets/icons/events.svg";

const Layout = () => {
  console.log("Layout");
  return (
    <div>
      <div>Nav Bar</div>
      <Outlet />
    </div>
  );
};

export default Layout;
