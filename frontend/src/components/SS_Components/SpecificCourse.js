import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Footer from "../Layouts/footer";
import AdminNavBar from "../Layouts/AdminNavBar";

export default function SpecificCourse() {
    const [course_name,setcourse_name] = useState("");
    const [course_code,setcourse_code] = useState("");
    const [subtitle,setsubtitle] = useState("");
    const [lecture_name, setlecture_name] = useState("");
    const [description, setdescription] = useState("");
    const [courseadded_date, setcourseadded_date] = useState("");
    const [course_thumbnail, setcourse_thumbnail] = useState("");
    const [course_content, setcourse_content]  = useState([{setcourse_code:""}]);

    const params = useParams();
    const courseID= params.courseID;

    useEffect(() => {
        axios.get(`http://localhost:8070/course/${courseID}`).then((res) => {
          if (res.data) {
            setcourse_name(res.data.existingCourses.course_name);
            setcourse_code(res.data.existingCourses.course_code);
            setsubtitle(res.data.existingCourses.subtitle);
            setlecture_name(res.data.existingCourses.lecture_name);
            setdescription(res.data.existingCourses.description);
            setcourseadded_date(res.data.existingCourses.courseadded_date);
            setcourse_thumbnail(res.data.existingCourses.course_thumbnail);
            setcourse_content(res.data.existingCourses.course_content);
          }
          console.log(res.data)
      });
    },[]);

  return (
    <div>
      <AdminNavBar/>
        <div style={{ backgroundColor:"#ffff" ,height:"900px"}} >
           <div align="center" ><br/><br/>
              <Paper style={{textAlign:"center",borderRadius: 5,width:'1000px',height:'700px',backgroundColor:"#E9F6FD"}}>
                <br/><br/>
       
              <div class="container">
                 <div class="row">
              <div class="col-sm">

                   <div style={{display:"flex",marginLeft:"200px"}}>
                     <h2><b><u>{course_name}</u></b></h2>
                    </div><br/>

                   <div style={{display:"fleX",marginLeft:"50px"}}>
                     <img className="activator" id="aimage" src={course_thumbnail} width={350} />
                    </div><br/>
         
                     <div style={{display:"fleX" ,marginLeft:"50px"}}>
                       <b>{subtitle}</b>
                     </div>

                     <div style={{display:"fleX" ,marginLeft:"50px"}}>
                       <b>{lecture_name}</b>
                     </div><br/>


                     <Button variant="contained" className="w-10" 
                       style={{background: "#8BC0FF",marginLeft:"170px", width: 30+"%",color:"BLACK",borderRadius: 20,}}
                       onClick={()=>window.open(course_content)}
                       disableElevation >Download
                      </Button>

                 </div>
                   <div class="col-sm">
                     <div style={{display:"fleX",marginRight:"70px" ,textAlign:"justify"}}>
                      <b>{description}</b>
                     </div>
                    </div>
                 </div>
              </div>
              </Paper>
           </div><br/><br/>
      <Footer/>
        </div>
    </div>
  )
}
