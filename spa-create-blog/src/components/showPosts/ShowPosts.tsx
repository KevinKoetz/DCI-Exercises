
import { IPost } from "../../types";
import { Post } from "../post/Post";
import "./ShowPosts.scss"


export const ShowPosts = ({className, posts}: {className?: string; posts: IPost[]}) => {
  return (
    <div className={className ? className + " ShowPosts" : "ShowPosts"}>
      <ul>
        {posts.map(post => <li key={post.id}><Post {...post} shorten /></li>)}
      </ul>
    </div>
  );
};
