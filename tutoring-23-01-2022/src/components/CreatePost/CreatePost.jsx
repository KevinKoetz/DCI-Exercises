import { useState } from "react";
import { useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { blogContext } from "../../App";
import { createPost } from "../../posts";

function CreatePost() {
  const { blogState, setBlogState } = useContext(blogContext);
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      createPost(title, content, blogState.user.username)
      history.push("/posts")
  }

  return (
    <div className="CreatePost">
      {blogState.user ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Content:</label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}></textarea>
          </div>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}

export default CreatePost;
