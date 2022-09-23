const express = require("express");
const router = express.Router();
const Feedback = require("../../models/AA_models/feedback");
const Courses = require("../../models/SS_models/courses");

router.get("/getchart", async (req, res) => {
  try {
    const courses = await Courses.find({});
    res.status(200).send({ courses: courses });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/getcomments", async (req, res) => {
  try {
    const feedbacks = await Feedback.find({}).sort({ _id: -1 }).limit(5);
    res.status(200).send({ feedbacks: feedbacks });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
