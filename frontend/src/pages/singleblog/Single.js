import "./single.css";
import NavBar from "../../components/Layouts/NavBar";

import SinglePost from "../../components/IS_Components/singlePost/SinglePost";

export default function Single() {
  return (
    <div>
      <NavBar/> <br/>
    <div className="single">
      <SinglePost />
     
    </div>
    </div>
  );
}
