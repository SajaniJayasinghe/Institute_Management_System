const express = require("express");
const Blog = require("../../models/IS_models/blog");
const auth = require("../../middleware/auth");
const Student = require("../../models/RD_models/student");

const router = express.Router();

router.post("/addblogs", auth, async (req, res) => {
  let { title, description, photo } = req.body;
  let date = new Date();

  try {
    const user = await Student.findOne({ email: req.Stu.email });
    if (!user) {
      throw new Error("There is no student");
    }

    let blog = {
      studentId: req.Stu._id,
      // studentPicture: req.Stu.imageUrl,
      studentName: req.Stu.studentName,
      title: title,
      description: description,
      photo: photo,
      // date: date.toISOString().slice(0, 10),
    };

    const newBlog = new Blog(blog);

    await newBlog.save();
    res.status(200).send({ status: "Blog Added", blogs: newBlog });
  } catch (err) {
    res
      .status(500)
      .send({ status: "Error with insert Blog", error: err.message });
    console.log(err);
  }
});

// // @url           GET /blog/read/:id
// // @description   display all blogs of a course
// // @Action        public
router.get("/readblogs", async (req, res) => {
  Blog.find().exec((err, blogs) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingblogs: blogs,
    });
  });
});

// //get specific blog
router.get("/:blogID", async (req, res) => {
  let blogID = req.params.blogID;
  Blog.findById(blogID, (err, blogs) => {
    if (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
    return res.status(200).json({
      success: true,
      existingBlogs: blogs,
    });
  });
});

// // @url           PUT /blog/update/:id
// // @description   update blog details by id
// // @Action        private
router.put("/update/:blogID", auth, async (req, res) => {
  const blogID = req.params.blogID;
  const { title, description } = req.body;

  try {
    const user = await Student.findOne({ email: req.Stu.email });
    if (!user) {
      throw new Error("There is no user");
    }

    const updateBlog = await Blog.findOneAndUpdate(
      { _id: blogID },
      { title: title, description: description }
    );
    res.status(200).send({ status: "Blog Updated", blogs: updateBlog });
  } catch (err) {
    res
      .status(500)
      .send({ status: "Error with update Blog", error: err.message });
  }
});

// // @url           DELETE /blog/delete/:blogID/:blogID
// // @description   delete blog details by id
// // @Action        private
router.delete("/delete/:blogID", auth, async (req, res) => {
  const blogID = req.params.blogID;

  try {
    const user = await Student.findOne({ email: req.Stu.email });
    if (!user) {
      throw new Error("There is no student");
    }

    const blog = await Blog.findById(blogID);
    if (!blog) {
      throw new Error("There is no blog");
    }

    const deleteBlog = await Blog.findByIdAndDelete(blogID);
    res.status(200).send({ status: "Blog Deleted", blogs: deleteBlog });
  } catch (err) {
    res
      .status(500)
      .send({ status: "Error with delete Blog", error: err.message });
    console.log(err);
  }
});

module.exports = router;
