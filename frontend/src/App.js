import React, { Component } from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


// import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import CreateNewCourses from './components/SS_Components/CreateNewCourses';
import CourseDetails from './components/SS_Components/CourseDetails';
import UpdateCourseDetails from './components/SS_Components/UpdateCourseDetails';
import SpecificCourse from './components/SS_Components/SpecificCourse';
import CoursesDisplay from './components/SS_Components/CoursesDisplay';
import AdminDashboard from './components/SS_Components/adminDashboard';
import HomePage from './components/SS_Components/HomePage';
import Programs from './components/SS_Components/Programs';
import StudentProfile from './components/RD_Components/StudentProfile';
import StudentRegistration from './components/RD_Components/StudentRegistration';
import StudentUpdateProfile from './components/RD_Components/StudentUpdateProfile';
import StudentLogin from './components/RD_Components/StudentLogin';
import AdminLogin from './components/RD_Components/AdminLogin';
import AdminRegistration from './components/RD_Components/AdminRegistration';
import AdminUpdateProfile from './components/RD_Components/AdminUpdateProfile';
import AdminProfile from './components/RD_Components/AdminProfile';
import Studentsremove from './components/RD_Components/studentsremove';

export default class App extends Component {
    render() {
        return (
          <Router>
            <Routes>

           

            
             {/* Sajani */}
             <Route path = "/createCourse" element= {<CreateNewCourses/>} exact/>
             <Route path = "/courseDetails" element={<CourseDetails/>}/>
             <Route path = "/update/:courseID" element={<UpdateCourseDetails/>}/>
             <Route path = "/specific/:courseID" element={<SpecificCourse/>}/>
             <Route path = "/coursesdisplay" element={<CoursesDisplay/>}/>
             <Route path = "/admindashboard" element={<AdminDashboard/>}/>
             <Route path = "/" element={<HomePage/>}/>
             <Route path = "/programs" element={<Programs/>}/>
             
             {/* Randy */}
             <Route path= "/signin" element={<StudentLogin/>}/>
             <Route path = "/profile" element={<StudentProfile/>}/>
             <Route path = "/signup" element={<StudentRegistration/>}/>
             <Route path = "/update" element={<StudentUpdateProfile/>}/>
             <Route path= "/adminsignin" element={<AdminLogin/>}/>
             <Route path= "/adminsignup" element={<AdminRegistration/>}/>
             <Route path = "/adminupdate" element={<AdminUpdateProfile/>}/>
             <Route path = "/adminprofile" element={<AdminProfile/>}/>
             <Route path = "/getstudent" element={<Studentsremove/>}/>



             {/* Aroshini */}


             {/* Imaya */}


            </Routes>
        </Router>

      )
    }
}
