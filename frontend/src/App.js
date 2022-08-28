import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import CreateNewCourses from './components/SS_Components/CreateNewCourses';
import CourseDetails from './components/SS_Components/CourseDetails';

export default class App extends Component {
    render() {
        return (
          <Router>
           <Routes>
            
             {/* Sajani */}
             <Route path = "/" element= {<CreateNewCourses/>} exact/>
             <Route path = "/courseDetails" element={<CourseDetails/>}/>

             {/* Randy */}



             {/* Aroshini */}


             {/* Imaya */}


            </Routes>
        </Router>

      )
    }
}
