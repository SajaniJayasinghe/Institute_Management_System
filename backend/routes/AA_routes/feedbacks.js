const express = require("express");
const Feedback = require("../../models/AA_models/feedback");
const auth = require("../../middleware/auth");
const Courses = require("../../models/SS_models/courses");
const Student = require("../../models/RD_models/student");

const router = express.Router();

router.post("/add/:courseId", auth, async (req, res) => {
  let courseId = req.params.courseId;
  let { rating, comment } = req.body;
  let date = new Date();

  try {
    const user = await Student.findOne({ email: req.Stu.email });
    if (!user) {
      throw new Error("There is no student");
    }

    const course = await Courses.findById(courseId);
    if (!course) {
      throw new Error("There is no course");
    }

    let feedback = {
      courseId: courseId,
      studentId: req.Stu._id,
      //   userPicture: req.Stu.imageUrl,
      studentName: req.Stu.studentName,
      rating: rating,
      comment: comment,
      date: date.toISOString().slice(0, 10),
    };

    const newFeedback = new Feedback(feedback);

    await newFeedback.save().then(async () => {
      let feedbackCollection = await Feedback.find({ courseId: courseId });
      let number = 0;
      let feedbackCount = feedbackCollection.length;
      let totalRating = 0;

      if (feedbackCollection.length != 0) {
        for (number; number < feedbackCollection.length; number++) {
          totalRating = totalRating + feedbackCollection[number].rating;
        }
        let average = totalRating / feedbackCount;
        let averageRating = Math.round(average * 10) / 10;
        console.log(averageRating);
        await Courses.findOneAndUpdate(
          { _id: courseId },
          { averageRating: averageRating }
        );
      } else {
        let average = (totalRating + rating) / feedbackCount;
        let averageRating = Math.round(average * 10) / 10;
        console.log(averageRating);
        await Courses.findOneAndUpdate(
          { _id: courseId },
          { averageRating: averageRating }
        );
      }
    });
    res.status(200).send({ status: "Feedback Added", feedbacks: newFeedback });
  } catch (err) {
    res
      .status(500)
      .send({ status: "Error with insert Feedback", error: err.message });
    console.log(err);
  }
});

// @url           GET /feedback/read/:id
// @description   display all feedbacks of a course
// @Action        public
router.get("/read/:courseId", async (req, res) => {
  const courseId = req.params.courseId;

  try {
    let number = 0;
    let one = 0,
      oneAndHalf = 0;
    let two = 0,
      twoAndHalf = 0;
    let three = 0,
      threeAndHalf = 0;
    let four = 0,
      fourAndHalf = 0;
    let five = 0;
    // validate course
    const course = await Courses.findById(courseId);
    if (!course) {
      throw new Error("There is no course");
    }

    const feedbacks = await Feedback.find({ courseId: courseId });

    for (number; number < feedbacks.length; number++) {
      switch (feedbacks[number].rating) {
        case 1:
          one++;
          break;
        case 1.5:
          oneAndHalf++;
          break;
        case 2:
          two++;
          break;
        case 2.5:
          twoAndHalf++;
          break;
        case 3:
          three++;
          break;
        case 3.5:
          threeAndHalf++;
          break;
        case 4:
          four++;
          break;
        case 4.5:
          fourAndHalf++;
          break;
        case 5:
          five++;
          break;
      }
    }
    const ratings = {
      one: one,
      oneAndHalf: oneAndHalf,
      two: two,
      twoAndHalf: twoAndHalf,
      three: three,
      threeAndHalf: threeAndHalf,
      four: four,
      fourAndHalf: fourAndHalf,
      five: five,
      ratings: feedbacks.length,
    };
    //console.log(ratings);
    res.status(200).send({ feedbacks: feedbacks, ratings: ratings });
  } catch (error) {
    res
      .status(500)
      .send({ status: "Error with read Feedbacks", error: error.message });
    console.log(error);
  }
});

// @url           PUT /feedback/update/:id
// @description   update feedback details by id
// @Action        private
router.put("/update/:courseId/:feedbackID", auth, async (req, res) => {
  const courseId = req.params.courseId;
  const feedbackID = req.params.feedbackID;
  const { rating, comment } = req.body;

  try {
    const user = await Student.findOne({ email: req.Stu.email });
    if (!user) {
      throw new Error("There is no user");
    }

    const course = await Courses.findById(courseId);
    if (!course) {
      throw new Error("There is no course");
    }

    const updateFeedbck = await Feedback.findOneAndUpdate(
      { _id: feedbackID },
      { rating: rating, comment: comment }
    ).then(async () => {
      let feedbackCollection = await Feedback.find({ courseId: courseId });
      let number = 0;
      let feedbackCount = feedbackCollection.length;
      let totalRating = 0;

      if (feedbackCollection.length != 0) {
        for (number; number < feedbackCollection.length; number++) {
          totalRating = totalRating + feedbackCollection[number].rating;
        }
        let average = totalRating / feedbackCount;
        let averageRating = Math.round(average * 10) / 10;
        console.log(averageRating);
        await Courses.findOneAndUpdate(
          { _id: courseId },
          { averageRating: averageRating }
        );
      } else {
        let average = (totalRating + rating) / feedbackCount;
        let averageRating = Math.round(average * 10) / 10;
        console.log(averageRating);
        await Courses.findOneAndUpdate(
          { _id: courseId },
          { averageRating: averageRating }
        );
      }
    });
    res
      .status(200)
      .send({ status: "Feedback Updated", feedbacks: updateFeedbck });
  } catch (err) {
    res
      .status(500)
      .send({ status: "Error with update Feedback", error: err.message });
  }
});

// @url           DELETE /feedback/delete/:courseId/:feedbackId
// @description   delete feedback details by id
// @Action        private
router.delete("/delete/:courseId/:feedbackID", auth, async (req, res) => {
  const courseId = req.params.courseId;
  const feedbackID = req.params.feedbackID;

  try {
    const user = await Student.findOne({ email: req.Stu.email });
    if (!user) {
      throw new Error("There is no student");
    }

    const course = await Courses.findById(courseId);
    if (!course) {
      throw new Error("There is no course");
    }

    const feedback = await Feedback.findById(feedbackID);
    if (!feedback) {
      throw new Error("There is no feedback");
    }

    const deleteFeedback = await Feedback.findByIdAndDelete(feedbackID).then(
      async () => {
        let feedbackCollection = await Feedback.find({ courseId: courseId });
        let number = 0;
        let feedbackCount = feedbackCollection.length;
        let totalRating = 0;

        if (feedbackCollection.length != 0) {
          for (number; number < feedbackCollection.length; number++) {
            totalRating = totalRating + feedbackCollection[number].rating;
          }
          let average = totalRating / feedbackCount;
          let averageRating = Math.round(average * 10) / 10;
          console.log(averageRating);
          await Courses.findOneAndUpdate(
            { _id: courseId },
            { averageRating: averageRating }
          );
        } else {
          let average = (totalRating + rating) / feedbackCount;
          let averageRating = Math.round(average * 10) / 10;
          console.log(averageRating);
          await Courses.findOneAndUpdate(
            { _id: courseId },
            { averageRating: averageRating }
          );
        }
      }
    );
    res
      .status(200)
      .send({ status: "Feedback Deleted", feedbacks: deleteFeedback });
  } catch (err) {
    res
      .status(500)
      .send({ status: "Error with delete Feedback", error: err.message });
    console.log(err);
  }
});

module.exports = router;
