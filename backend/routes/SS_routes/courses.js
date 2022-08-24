const express = require("express");
const Courses = require("../../models/SS_models/courses");
const router = express.Router();

//add new courses
router.route("/courseadd").post((req,res)=>{
    let newCourses = new Courses(req.body);
    newCourses.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: "New courses add successfully!!!"
        });
    });
});


module.exports = router;
