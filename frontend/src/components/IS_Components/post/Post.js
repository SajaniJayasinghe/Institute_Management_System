import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="post">
      <Link to={`/${post._id}`} className="link">
        {post.photo && <img className="postImg" src={post.photo} alt="" />}
      </Link>
      <div className="postInfo">
        <span className="postTitle">{post.title}</span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
  );
}
