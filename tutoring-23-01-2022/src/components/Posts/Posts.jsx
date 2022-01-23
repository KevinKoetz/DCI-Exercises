import { getPosts } from "../../posts";
import Post from "../Post/Post";

function Posts() {
  const posts = getPosts();
  return (
    <div className="Posts">
      {posts.map((post) => (
          /** <Post {...post} /> 
           * === 
           * <Post 
           * id={post.id} 
           * content={post.content}
           * title={post.title}
           * date={post.date}
           * creator={post.creator} 
           * /> */
        <Post {...post} key={post.id}/>
      ))}
    </div>
  );
}

export default Posts;
