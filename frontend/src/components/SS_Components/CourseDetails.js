import React, { Component } from 'react';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

export default class CourseDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            courses :[]
        };
    }

    componentDidMount(){
        this.retrieveCourses();
    }   
    retrieveCourses(){
        axios.get("http://localhost:8070/course/getDetails").then(res=>{
            if(res.data.success){
                this.setState({
                    courses:res.data.existingCourses
                });
                console.log(this.state.courses);
            }
        })
    }

//delete course details
onDelete = (courseID)=>{
    if (window.confirm('Are you sure you wish to delete this course?')) {
      axios.delete(`http://localhost:8070/course/delete/${courseID}`).then((res)=>{
      this.retrieveCourses();
      })
    }}

//Search 
filterData(courses,searchKey){
    const result = courses.filter((courses)=>
    courses.course_name.toLowerCase().includes(searchKey)||
    courses.course_code.toLowerCase().includes(searchKey) )
  
     this.setState({courses:result})
  }
  
  handleSearchArea = (e)=>{
    const searchKey = e.currentTarget.value;
      axios.get("http://localhost:8070/course/getDetails").then(res=>{
        if(res.data.success){
        this.filterData(res.data.existingCourses,searchKey)
      }
    });
  }
  
    
render() {
  return (
   <div>
     <div className='container'><br/><br/>
       <div align="center">
          <h3 style={{fontFamily:"times new roman", fontSize:"40px"}}><u><b>All Courses Details</b></u></h3> <br></br>
            <div className="col-md-3" style={{marginLeft:'970px'}}> 
              <input type="text" className="form-control" placeholder="Search Course Name or Course Code " onChange={this.handleSearchArea}/>
                <br/> 
                  </div>    
                    <table class = "table" >
                      <thead> 
                        <tr bgcolor="#083C53" >
                            <th ><font color="#fff">No</font></th>
                            <th ><font color="#fff">Course Name</font></th>
                            <th ><font color="#fff">Course Code</font></th>
                            <th ><font color="#fff">Subtitle</font></th>
                            <th ><font color="#fff">Lecture Name</font></th>
                            <th ><font color="#fff">Description</font></th>
                            <th ><font color="#fff">Courseadded Date</font></th>   
                            <th ><font color="#fff">Action</font></th>
                        </tr>
                     </thead>
                   <tbody>
                   {this.state.courses.map((courses,index)=>(
                         <tr>
                            <th scope='row'>{index + 1}</th>
                            <td>{courses.course_name}</td>
                            <td>{courses.course_code}</td>
                            <td>{courses.subtitle}</td>
                            <td>{courses.lecture_name}</td>
                            <td>{courses.description}</td>
                            <td>{courses.courseadded_date}</td>
                            <td>
                              <IconButton aria-label="edit" color="primary" size="small"
                                 href= "">
                                <EditIcon fontSize="small"  style={{color: "black"}} />
                              </IconButton> &nbsp;&nbsp;&nbsp;&nbsp;

                              <IconButton aria-label="delete" size="small">
                                <DeleteForeverIcon fontSize="small" onClick={()=>this.onDelete(courses._id)}  style={{color: "black"}}/>
                              </IconButton>
                            </td>
                          </tr>
                          ))}
                   </tbody>
                  </table>
              </div>
           </div>
        </div>
    )
  }
}