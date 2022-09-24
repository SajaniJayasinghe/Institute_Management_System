import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//import { Context } from "../../context/Context";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const params = useParams();
  const id = params.blogID;

  const config = {
    headers: {
      Authorization: localStorage.getItem("Authorization"),
      "content-type": "application/json",
    },
  };

  useEffect(() => {
    axios.get("http://localhost:8070/student/profile", config).then((res) => {
      if (res.data) {
        setAuthor(res.data.Stu.studentName);
      }
    });
  }, []);

  useEffect(() => {
    const getPost = async () => {
      await axios
        .get(`http://localhost:8070/blog/${id}`)
        .then((res) => {
          setPost(res.data.existingBlogs);
          setTitle(res.data.existingBlogs.title);
          setDescription(res.data.existingBlogs.description);
        })
        .catch((error) => {
          // setError(error.message);
          console.log(error.message);
        });
    };
    getPost();
  }, []);

  const handleDelete = async () => {
    try {
      await axios
        .delete(`http://localhost:8070/blog/delete/${post._id}`, config)
        .then((res) => {
          alert("Your description Deleted");
          window.location = `/readblogs`;
        });
    } catch (err) {}
  };

  const handleUpdate = async () => {
    const updatepost = {
      studentName: author,
      title,
      description,
    };

    try {
      await axios.put(
        `http://localhost:8070/blog/update/${post._id}`,
        updatepost,
        config
      );

      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.studentName === author && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: {post.studentName}</span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{description}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
