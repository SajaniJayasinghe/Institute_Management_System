const mongoose = require("mongoose");
const coursesSchema = new mongoose.Schema({
  course_name: {
    type: String,
    required: true,
  },

  course_code: {
    type: String,
    required: true,
  },

  subtitle: {
    type: String,
    required: true,
  },

  lecture_name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  courseadded_date: {
    type: Date,
    required: true,
  },

  course_thumbnail: {
    type: String,
    required: false,
  },

  course_content: {
    type: String,
    required: false,
  },
});

const Courses = mongoose.model("courses", coursesSchema);
module.exports = Courses;
