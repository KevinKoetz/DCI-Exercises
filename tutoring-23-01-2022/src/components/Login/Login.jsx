import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { blogContext } from "../../App";
import { authenticateUser } from "../../users";

function Login() {
  const { blogState, setBlogState } = useContext(blogContext);
  const history = useHistory();

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = authenticateUser(username, password);
    if (user) {
      setBlogState({ ...blogState, user });
      setIsInvalid(false);
      history.goBack();
    } else {
      setIsInvalid(true);
    }
  };
  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Login" />
        <span style={{ visibility: isInvalid ? "visible" : "hidden" }}>
          Username or Password are invalid!
        </span>
      </form>
    </div>
  );
}

export default Login;
