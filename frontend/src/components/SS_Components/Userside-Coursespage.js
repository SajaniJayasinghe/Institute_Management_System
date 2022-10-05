import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";

const Course = ({ courseID, course_name, lecture_name, course_thumbnail }) => {
  const [open, setOpen] = useState(false);

  const CourseHome = () => {
    window.location = `/specific/${courseID}`;
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div class="card" style={{ background: "white", color: "black" }}>
      <div style={{ overflow: "hidden", height: 300 }}>
        <img
          src={course_thumbnail}
          height={300}
          width={280}
        />
      </div>

      <div
        class="content text-color p-2"
        style={{ backgroundColor: "#DAE7F8" }}
      >
        <div style={{ fontSize: 23, fontWeight: "bold" }} align="left">
          {course_name.length > 13 ? (
            <div>{course_name.substr(0, 14)}...</div>
          ) : (
            course_name
          )}{" "}
        </div>

        <Typography component={"span"} variant={"body2"}>
          <div className="row" style={{ paddingLeft: 0 }}>
            <div
              className="text-color"
              style={{ fontSize: 18, paddingBottom: 8 }}
              align="left"
            >
              {lecture_name}
            </div>
          </div>
        </Typography>
      </div>
    </div>
  );
};
export default Course;
