/* const post = {
    id: string, 
    title: string, 
    creator: user.username, 
    content: string,
    date: DateString} 
*/

import { useContext, useState } from "react";
import { blogContext } from "../../App";
import { editPost } from "../../posts";

function Post({ id, title, content, creator, date }) {
  const { blogState, setBlogState } = useContext(blogContext);
  const [isMinimized, setIsMinimized] = useState(true);
  const [editing, setEditing] = useState(false);

  const [editabeleTitle, setEditabeleTitle] = useState(title);
  const [editableContent, setEditabeleContent] = useState(content);

  const longContentLength = 20;
  const isLongContent = content.length > longContentLength;

  const handleSave = () => {
    const editedPost = editPost(id, {
      title: editabeleTitle,
      content: editableContent,
    });
    const notEditedPosts = blogState.posts.filter((post) => post.id !== id);
    setBlogState({ ...blogState, posts: [...notEditedPosts, editedPost] });
    setEditing(false)
  };

  return (
    <article className="Post">
      <h3>
        <input
          type="text"
          value={editabeleTitle}
          onChange={(e) => setEditabeleTitle(e.target.value)}
          disabled={!editing}
        />
      </h3>
      <p>
        {isLongContent && isMinimized && !editing ? (
          <>
            {content.slice(0, longContentLength)}
            <input
              type="button"
              value="...more"
              onClick={() => setIsMinimized(false)}
            />
          </>
        ) : isLongContent && !isMinimized && !editing ? (
          <>
            {content}
            <input
              type="button"
              value="...less"
              onClick={() => setIsMinimized(true)}
            />
          </>
        ) : (
          <textarea
            disabled={!editing}
            value={editableContent}
            onChange={(e) => setEditabeleContent(e.target.value)}
          >
            {content}
          </textarea>
        )}
      </p>
      <footer>
        {creator} wrote this post on {new Date(date).toLocaleDateString()} at{" "}
        {new Date(date).toLocaleTimeString()}
      </footer>
      {blogState.user?.username === creator ? (
        <input
          type="button"
          value={editing ? "Cancel" : "Edit"}
          onClick={() => {
            setEditing(!editing);
            setEditabeleContent(content);
            setEditabeleTitle(title);
          }}
        />
      ) : null}{" "}
      {editing ? (
        <input type="button" value="Save" onClick={handleSave} />
      ) : null}
    </article>
  );
}

export default Post;
