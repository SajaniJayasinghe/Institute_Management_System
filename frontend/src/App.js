
import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentLogin from "./components/RD_Components/StudentLogin";
import CreateNewCourses from "./components/SS_Components/CreateNewCourses";
import CourseDetails from "./components/SS_Components/CourseDetails";
import UpdateCourseDetails from "./components/SS_Components/UpdateCourseDetails";
import SpecificCourse from "./components/SS_Components/SpecificCourse";
import CoursesDisplay from "./components/SS_Components/CoursesDisplay";
import AdminDashboard from "./components/SS_Components/adminDashboard";
import HomePage from "./components/SS_Components/HomePage";
import StudentProfile from "./components/RD_Components/StudentProfile";
import StudentRegistration from "./components/RD_Components/StudentRegistration";
import StudentUpdateProfile from "./components/RD_Components/StudentUpdateProfile";
// import CreateFeedback from "./components/AA_Components/create-feedback.component";
import Feedbacks from "./components/AA_Components/feedbacks.component";
import CreateBlogs from "./components/IS_Components/createBlogs";
import BlogsDisplay from "./components/IS_Components/BlogsDispaly";
import SpecificBlog from "./components/IS_Components/SpecificBlog";
import AdminFeedbacks from "./components/AA_Components/Admin_Feedback_Section";
//import Blogs from "./components/IS_Components/BlogPage";
import Programs from './components/SS_Components/Programs';
import AddDocument from './components/SS_Components/AddDocument';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          {/* Sajani */}
          <Route path="/createCourse" element={<CreateNewCourses />} exact />
          <Route path="/courseDetails" element={<CourseDetails />} />
          <Route path="/update/:courseID" element={<UpdateCourseDetails />} />
          <Route path="/specific/:courseID" element={<SpecificCourse />} />
          <Route path="/coursesdisplay" element={<CoursesDisplay />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/" element={<HomePage />} />
          <Route path = "/programs" element={<Programs/>}/>
          <Route path = "/addDocument/:id" element={<AddDocument/>}/>
             

          {/* Randy */}
          <Route path="/signin" element={<StudentLogin />} />
          <Route path="/profile" element={<StudentProfile />} />
          <Route path="/signup" element={<StudentRegistration />} />
          <Route path="/update" element={<StudentUpdateProfile />} />

          {/* Aroshini */}

          {/* <Route path="/specific/:courseID" element={<CreateFeedback />} /> */}
          <Route path="/specific/:courseID" component={Feedbacks} />

          {/* Admin(Aroshini) */}
          <Route path="/feedback" element={<AdminFeedbacks />} />

          {/* Imaya */}
          {/* <Route path="/addblogs" element={<CreateBlogs />} />
          <Route path="/readblogs" element={<BlogsDisplay />} />
          <Route path="/specificBlog/:blogID" element={<SpecificBlog />} /> */}
          {/* <Route path="/specific/:blogID" element={<AllBlog />} /> */}
        </Routes>
      </Router>
    );
  }
}
