import { useEffect, useState } from "react";
import Header from "../../components/IS_Components/header/Header";
import Posts from "../../components/IS_Components/posts/Posts";
import "./BlogHome.css";
import axios from "axios";
import { useLocation } from "react-router";
import Button from "@material-ui/core/Button";
import Footer from "../../components/Layouts/footer";
import NavBar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/footer";

export default function BlogHome() {
  const [posts, setPosts] = useState([]);

  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `http://localhost:8070/blog/readblogs` + search
      );
      setPosts(res.data.existingblogs);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <NavBar />
      <Header />
      <br /> <br />
      <Button
        variant="contained"
        className="w-8"
        href="/addblogs"
        style={{
          marginLeft: "1200px",
          background: "#8BC0FF",
          width: 10 + "%",
          color: "BLACK",
          borderRadius: 10,
        }}
        disableElevation
        type="submit"
      >
        CREATE BLOG
      </Button>
      <br />
      <br /> <br />
      <div className="home">
        <div style={{ marginLeft: "60px" }}>
          <Posts posts={posts} />
        </div>
      </div>
      <Footer />
    </>
  );
}
