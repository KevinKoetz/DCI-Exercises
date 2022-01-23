import { v4 as createId } from "uuid";

/* const post = {
    id: string, 
    title: string, 
    creator: user.username, 
    content: string,
    date: DateString
} 
*/

const posts = [];

export const getPosts = () => [...posts];

export const createPost = (title, content, username) => {
  const newPost = {
    id: createId(),
    title,
    content,
    creator: username,
    date: Date().toString(),
  };
  posts.push(newPost);
  return newPost;
};

/**
 * 
editPost(ID, { title: "new title" });
editPost(ID, { title: "new title", content: "new Content" });
 */

export const editPost = (id, { title, content }) => {
  const post = posts.find((post) => post.id === id);
  Object.assign(post, {
    title: title ? title : post.title,
    content: content ? content : post.content,
  });
  return post;
};
