import React, { useEffect, useState } from "react";
import axios from "axios";
import Feedback from "./feedback.component";
import CreateFeedback from "./create-feedback.component";
import Ratings from "./ratings.component";
import FadeIn from "react-fade-in";
import "../AA_Components/product-page.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const Feedbacks = (courseID) => {
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedbacks] = useState([]);
  const [ratings, setRatings] = useState({});
  const [error, setError] = useState(null);
  const [filterComments, setFilterComments] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchFeedbacks = async () => {
      await axios
        .get(`http://localhost:8070/feedbacks/read/${courseID.courseID}`)
        .then((res) => {
          setFeedbacks(res.data.feedbacks);
          setRatings(res.data.ratings);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          console.log(error.message);
        });
    };
    fetchFeedbacks();
  }, []);

  useEffect(() => {
    setFilterComments(
      feedback.filter(
        (feedback) =>
          feedback.comment.toLowerCase().includes(search.toLowerCase()) ||
          feedback.studentName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, feedback]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ paddingTop: 400 }}
      >
        <CircularProgress hidden={true} />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="col-lg-10 col-sm-12 col-md-8 col-xs-12 product-col">
        <CreateFeedback courseID={courseID} />
        <hr />
        <Ratings ratings={ratings} courseID={courseID} />
        <h3 className="pb-3 text-color">Reviews</h3>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search Customer Comments"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">
              Search
            </span>
          </div>
        </div>
        <hr />
        <FadeIn>
          {filterComments.map((feedback, index) => (
            <div key={feedback._id}>
              <Feedback
                id={feedback._id}
                courseID={courseID.courseID}
                studentId={feedback.studentId}
                studentName={feedback.studentName}
                studentPicture={feedback.studentPicture}
                rating={feedback.rating}
                comment={feedback.comment}
              />
            </div>
          ))}
        </FadeIn>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Feedbacks;
