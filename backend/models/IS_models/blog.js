const mongoose = require("mongoose");
 
const blogSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "student",
  },
 
  studentName: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: false,
  },
  
},
{ timestamps: true }
);
 

 
const Blog = mongoose.model("blog", blogSchema);
 
module.exports = Blog;
















// const mongoose = require("mongoose");

// const PostSchema = new mongoose.Schema({
//     title:{
//         type: String,
//         required: true,
//         unique: true,
//     },
//     description:{
//         type: String,
//         required: true,
//     },
//     photo:{
//         type: String,
//         required: false,
//     },
//     username:{
//         type: String,
//         required: false,
//     },
//     userId:{
//         type: mongoose.Schema.Types.ObjectId,
        
//         required: false,
//         ref:"student"
//     },
    
// });

// module.exports = mongoose.model("Post", PostSchema);