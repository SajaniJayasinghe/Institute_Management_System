const express = require("express");
const Courses = require("../../models/SS_models/courses");
const router = express.Router();

//add new courses
router.route("/courseadd").post((req, res) => {
  let newCourses = new Courses(req.body);
  newCourses.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "New courses add successfully!!!",
    });
  });
});

//upload document
router.put("/document/:ID", async (req, res) => {
  try {
    const id = req.params.ID;
    let { course_content } = req.body;
    const data = {
      course_content: course_content,
    };
    const result = await Courses.findByIdAndUpdate(id, data);
    if (result) {
      return res.status(200).json({
        success: true,
        message: "Course content Successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//update course details
router.route("/update/:courseID").put((req, res) => {
  Courses.findByIdAndUpdate(
    req.params.courseID,
    {
      $set: req.body,
    },
    (err, courses) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "Update Successfully",
      });
    }
  );
});

//get course details
router.route("/getDetails").get((req, res) => {
  Courses.find().exec((err, courses) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingCourses: courses,
    });
  });
});

//get specific details
router.route("/:courseID").get((req, res) => {
  let courseID = req.params.courseID;
  Courses.findById(courseID, (err, courses) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingCourses: courses,
    });
  });
});

//delete course
router.route("/delete/:courseID").delete((req, res) => {
  Courses.findByIdAndRemove(req.params.courseID).exec((err, deletecourses) => {
    if (err)
      return res.status(400).json({
        message: "Delete Unsuccessfully",
        err,
      });

    return res.json({
      message: "Delete Successfull",
      deletecourses,
    });
  });
});

module.exports = router;
