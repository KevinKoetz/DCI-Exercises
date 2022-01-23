import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import CreatePost from "./components/CreatePost/CreatePost";
import Posts from "./components/Posts/Posts";
import Login from "./components/Login/Login";
import Error404 from "./components/Error404/Error404";
import { createContext, useState } from "react";

/* const user = { username: string, email: string, id: string }; */

/* const post = {id: string, title: string, creator: user.username, date: DateString} */

const initialBlogState = {
  user: null,
  posts: [],
};

export const blogContext = createContext({
  blogState: initialBlogState,
  setBlogState: () => {},
});

function App() {
  const [blogState, setBlogState] = useState(initialBlogState);
  return (
    <blogContext.Provider
      value={{ blogState, setBlogState }}
    >
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/create" component={CreatePost} />
              <Route path="/posts" component={Posts} />
              <Route path="/login" component={Login} />
              <Route path="*" component={Error404} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </blogContext.Provider>
  );
}

export default App;
