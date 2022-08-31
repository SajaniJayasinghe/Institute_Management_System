import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateNewCourses from './components/SS_Components/CreateNewCourses';
import CourseDetails from './components/SS_Components/CourseDetails';
import UpdateCourseDetails from './components/SS_Components/UpdateCourseDetails';
import SpecificCourse from './components/SS_Components/SpecificCourse';
import CoursesDisplay from './components/SS_Components/CoursesDisplay';
import AdminDashboard from './components/SS_Components/adminDashboard';
import HomePage from './components/SS_Components/HomePage';

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

             
             {/* Randy */}



             {/* Aroshini */}


             {/* Imaya */}


            </Routes>
        </Router>

      )
    }
}

