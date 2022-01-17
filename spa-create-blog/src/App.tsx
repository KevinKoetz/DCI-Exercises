import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./components/home/Home";
import { CreatePost } from "./components/createPost/CreatePost";
import { IPost } from "./types";
import { ShowPosts } from "./components/showPosts/ShowPosts";
import { Post } from "./components/post/Post";

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const posts = localStorage.getItem("posts");
    if (!posts) return;
    setPosts(JSON.parse(posts));
  }, []);

  const handleCreatePost = (post: IPost) => {
    setPosts([...posts, post]);
  };

  useEffect(
    () => localStorage.setItem("posts", JSON.stringify(posts)),
    [posts]
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="create"
              element={<CreatePost onCreatePost={handleCreatePost} />}
            />
            <Route path="posts" element={<ShowPosts posts={posts} />} />
            <Route path="post/:id" element={<PostWithId posts={posts} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

function PostWithId({ posts }: { posts: IPost[] }) {
  const { id } = useParams();
  if (!id) return null;

  const getPostForId = (id: string, posts: IPost[]) => {
    const post = posts.find((post) => post.id === id);
    if (!post) return null;
    return post;
  };

  const post = getPostForId(id, posts);
  if (!post) return null;

  return <Post shorten={false} {...post} />;
}
