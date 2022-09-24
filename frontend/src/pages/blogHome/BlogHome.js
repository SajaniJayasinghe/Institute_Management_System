import { useEffect, useState } from "react";
import Header from "../../components/IS_Components/header/Header";
import Posts from "../../components/IS_Components/posts/Posts";

import "./BlogHome.css";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

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
      <Header /><br/>
<Link to = {`/addblogs`} >
  <Button  variant="contained"
                     
                      className="w-8"
                      style={{
                        background: "#8BC0FF",
                        width: 15 + "%",
                        color: "BLACK",
                        borderRadius: 10,
                       
                      }}
                      disableElevation
                      type="submit" >CREATE BLOG</Button>
</Link><br/>

      

      <div className="home">
     
        <Posts posts={posts} />
       
      </div>
    </>
  );
}
