import React, { useState, useEffect } from "react";
import axios from "axios";
import Course from "./CoursesPage";
import Paginat from "./paginationComponent";
import NavBar from "../Layouts/Navbar";
import Footer from "../Layouts/footer";

const CoursesDisplay = () => {
  const [isLoading, setLoading] = useState(true);
  const [course, setcourse] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  useEffect(() => {
    setLoading(true);
    const getCourses = async () => {
      try {
        await axios
          .get(`http://localhost:8070/course/getDetails`)
          .then((res) => {
            setcourse(res.data.existingCourses);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error.message);
          });
      } catch (error) {
        console.log(error.message);
      }
    };
    getCourses();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = course.slice(indexOfFirstPost, indexOfLastPost);

  let paginate = (pageNumber) => {
    return setCurrentPage(pageNumber);
  };
  return (
    <div>
      <NavBar />
      <br />
      <div style={{ backgroundColor: "#fff", height: "1000px" }}>
        <div className="container" align="center">
          <div className="row" style={{ paddingTop: 15 }}>
            {currentPost.map((course) => (
              <div key={course._id} className="col-lg-3 col-md-6">
                <div className="ui link cards">
                  <br />
                  <Course
                    key={course._id}
                    courseID={course._id}
                    course_name={course.course_name}
                    lecture_name={course.lecture_name}
                    course_thumbnail={course.course_thumbnail}
                  />
                </div>
              </div>
            ))}
          </div>{" "}
          <br />
          <div className="d-flex justify-content-center customPagination">
            <Paginat
              postPerPage={postPerPage}
              totalPosts={course.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default CoursesDisplay;
