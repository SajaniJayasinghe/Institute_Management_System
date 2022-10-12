const express = require ('express');
const router = express.Router();
let student = require('../../models/RD_models/student');

//Get student Details

router.route('/getstudent').get((req,res) =>{
    student.find().exec((err,student) =>{
        
        if(err){
            return res.status(400),json({
                error:err
            });
        }
        
        return res.status(200).json({
            success:true,
            existingstudent:student
        });
    
    });
});

//Delete Students details
router.route('/studentdelete/:studentID').delete((req,res)=>{
student.findByIdAndRemove(req.params.studentID).exec((err,deletestudent)=>{
    
    if(err) return res.status(400).json({
        message: "Delete Unsuccessfully",err
    });
   
    return res.json({
        message: "Delete Successfull",deletestudent
    });
});
});

module.exports = router;
