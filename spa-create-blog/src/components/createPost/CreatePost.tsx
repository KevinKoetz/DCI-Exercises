import React, { useState } from "react";
import { IPost } from "../../types";
import "./CreatePost.scss";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export const CreatePost = ({
  className,
  onCreatePost,
}: {
  className?: string;
  onCreatePost: (post: IPost) => void;
}) => {
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("here");
    if (!isValidForm(userName, title, content)) return;
    onCreatePost(createPost(userName, title, content));

    navigate("/posts");
  };

  return (
    <div className={className ? className + " CreatePost" : "CreatePost"}>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Must be 4 Characters long or longer."
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Must be 4 Characters long or longer."
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Must be 4 Characters long or longer."
          />
        </div>
        <input type="submit" value="Create a Post" />
      </form>
    </div>
  );
};

function createPost(userName: string, title: string, content: string): IPost {
  return {
    id: uuid(),
    title,
    userName,
    content,
    creationDate: new Date().toUTCString(),
  };
}

function isValidForm(userName: string, title: string, content: string) {
  return (
    isValidUserName(userName) && isValidTitle(title) && isValidContent(content)
  );
}

function isValidUserName(userName: string) {
  return userName.length >= 4;
}

function isValidTitle(title: string) {
  return title.length >= 4;
}

function isValidContent(content: string) {
  return content.length >= 4;
}
