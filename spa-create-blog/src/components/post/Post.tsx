import { IPost } from "../../types";
import { Link } from "react-router-dom";
import "./Post.scss";

type PostProps = IPost & {
  className?: string;
  shorten?: boolean;
  requestMore?: (id: string) => void;
};

export const Post = ({
  className,
  shorten = false,
  title,
  userName,
  content,
  creationDate,
  id,
}: PostProps) => {
  const isLong = (content: string) => content.length >= 50;
  const ContentWithMore = () => (
    <>
      {content.slice(0, 50)} <Link to={`/post/${id}`}>more...</Link>{" "}
    </>
  );

  return (
    <article className={className ? className + " Post" : "Post"}>
      <header><h5>{title}</h5></header>
      <main>{shorten && isLong(content) ? <ContentWithMore /> : content}</main>
      <footer>{`${userName} wrote at: ${new Date(creationDate).toLocaleDateString()} ${new Date(creationDate).toLocaleTimeString()}`}</footer>
    </article>
  );
};
