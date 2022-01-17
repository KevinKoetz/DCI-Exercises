import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Layout.scss";

export const Layout = ({ className }: { className?: string }) => {
  return (
    <div className={className ? className + " Layout" : "Layout"}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/create">Create a Post</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Show Current Posts</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
