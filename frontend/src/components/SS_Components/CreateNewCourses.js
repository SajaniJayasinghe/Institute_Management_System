import React, { Component, useState } from 'react';
import axios from "axios";
import Button from '@material-ui/core/Button';

export default function CreateNewCourses() {

    const [course_name, setcourse_name] = useState("");
    const [course_code, setccourse_code] = useState("");
    const [subtitle, setsubtitle] = useState("");
    const [lecture_name, setlecture_name] = useState("");
    const [description, setdescription] = useState("");
    const [courseadded_date, setcourseadded_date] = useState("");
    const [course_thumbnail, setcourse_thumbnail] = useState("");
    const [course_content, setcourse_content] = useState("");

    const sendData = async (e)=>{
      e.preventDefault();

      let data = {
          course_name:course_name,
          course_code:course_code,
          subtitle:subtitle,
          lecture_name:lecture_name,
          description:description,
          courseadded_date:courseadded_date,
          course_thumbnail:course_thumbnail,
          course_content:course_content
      };

    axios.post("http://localhost:8070/course/courseadd",data)
    .then(()=>{
      alert("Course added successfully!!!")
      window.location.href = "/courseDetails" ;
   
    }).catch((err)=>{
      console.log(data)
     alert('Unsuccess!!!');
    })

    setcourse_name("");
    setccourse_code("");
    setsubtitle("");
    setlecture_name("");
    setdescription("");
    setcourseadded_date("");
    setcourse_thumbnail("");
    setcourse_content("");

  }

  return (
    <div> <br/><br/>
       <div class="row d-flex align-items-center justify-content-center">
         <div style={{width: 1000,background: "#F5F5F5",height:618}}>
            <div class="card-body" >  
              <form action="" method="post" name="form" onSubmit={sendData}>
                <div class="row g-0">
                  <h3 style={{fontFamily:"times new roman"}}> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 
                    <b><u>Create&nbsp;New Course</u></b></h3><br/><br/><br/>
                  <img src="" style={{width: 750}}></img>
                </div>
          
            <div class="col-xl-10" >
                <div class="form-outline mb-2" align="right" style={{fontFamily:"times new roman"}}>
                    1. Course Name  &emsp;&emsp; &nbsp;:  &emsp;&emsp;
                        <input type="text"   name="course_name" placeholder='Enter course name'
                                onChange={(e)=>{setcourse_name(e.target.value)}} /><br/><br/>
                    2. Course Code  &emsp;&emsp; &nbsp;   :  &emsp;&emsp;
                        <input type="text"   name="course_code" placeholder='Enter course code'
                                onChange={(e)=>{setccourse_code(e.target.value)}} /><br/><br/>
                    3. Subtitle     &emsp;&emsp; &emsp;&emsp;&nbsp; :  &emsp;&emsp;
                        <input type="text"   name="subtitle" placeholder='Enter subtitle '
                                onChange={(e)=>{setsubtitle(e.target.value)}} /><br/><br/>
                    4. Lecture Name &emsp;&nbsp; &nbsp;&nbsp; :  &emsp;&emsp;
                        <input type="text"   name="lecture_name" placeholder='Enter lecture name'
                                onChange={(e)=>{setlecture_name(e.target.value)}} /><br/><br/>
                    5. Description  &emsp;&emsp; &nbsp;&nbsp;&nbsp; :  &emsp;&emsp;
                        <input type="text"   name="description" placeholder='Enter description'
                                onChange={(e)=>{setdescription(e.target.value)}} /><br/><br/>
                    6. Course Added Date  : &emsp;&emsp;&emsp;&emsp;&emsp; 
                        <input type="date"   name="courseadded_date" placeholder='Enter Course added Date'
                                onChange={(e)=>{setcourseadded_date(e.target.value)}} /><br/><br/>
                    7. Course Thumbnail : 
                        <input type="text" name="course_thumbnail" 
                                onChange={(e)=>{setcourse_thumbnail(e.target.value)}} /><br/><br/> 
                    8. Course Content :  &emsp;&emsp;
                        <input type="text"   name="description" placeholder='Enter description'
                                onChange={(e)=>{setcourse_content(e.target.value)}} /><br/><br/>
                        
                  <Button variant="contained" className="w-10" style={{background: "#8BC0FF", width: 13+"%",color:"BLACK",borderRadius: 20,}}
                  disableElevation type="submit">CREATE</Button>&nbsp; &nbsp; 

                 <Button variant="contained" className="w-10" style={{background: "#8BC0FF", width: 13+"%",color:"BLACK",borderRadius: 20,}}
                  disableElevation type="submit">CANCEL</Button>

                </div>
             </div>
          
          </form>
        </div>
     </div>
   </div>
</div>
  )
}
