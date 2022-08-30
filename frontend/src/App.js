import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StudentLogin from './components/RD_Components/StudentLogin';

export default class App extends Component {
    render() {
        return (
          <Router>
            <Routes>
            
             {/* Sajani */}



             {/* Randy */}
             <Route path= "/" element={<StudentLogin/>}exact></Route>


             {/* Aroshini */}


             {/* Imaya */}


            </Routes>
        </Router>

      )
    }
}
