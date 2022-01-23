import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { blogContext } from "../../App";

function NavBar() {
  const { blogState, setBlogState } = useContext(blogContext);
  return (
    <div className="NavBar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/create">Create Post</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      {blogState.user ? <span>Hello {blogState.user.username}</span> : null}
      {blogState.user ? (
        <input type="button" value="Logout" onClick={() => setBlogState({...blogState, user: null})} />
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </div>
  );
}

export default NavBar;
