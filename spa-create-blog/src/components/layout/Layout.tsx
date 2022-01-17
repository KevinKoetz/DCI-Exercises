import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Layout.scss"


export const Layout = ({className}: {className?: string}) => {
  return (
    <div className={className ? className + " Layout" : "Layout"}>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Create a Post</NavLink>
        <NavLink to="/posts">Show Current Posts</NavLink>
      </nav>
      <main>
          <Outlet />
      </main>
    </div>
  );
};
