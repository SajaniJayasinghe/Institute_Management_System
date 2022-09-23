import React, { Component } from 'react';
import axios from 'axios';
import React, {useState} from 'react';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import Footer from '../Layouts/footer';
import AdminNavBar from '../Layouts/AdminNavBar';

export default class Studentsremove extends Component {
   constructor(props){
       super(props);
       this.state = {
           studentsremove:[]
       };
   }  

   //retrive supervisor members 
componentDidMount(){
   this.retrievestudentsDetails();
}   


//data retrive
retrievestudentsDetails(){
   axios.get("http://localhost:8070/usersremove/getstudent").then(res=>{
       if(res.data.success){
          this.setState({
           studentsremove:res.data.existingstudent
          });

          console.log(this.state.studentsremove)
       }
   
});
}

//delete cosupervisor
onDelete = (studentID) => {


 if (window.confirm('Are you sure you wish to delete this details?')) {
   axios.delete(`http://localhost:8070/usersremove/studentdelete/${studentID}`).then((res) => {
   //   toast.warning('Details Deleted Successfully', { position: toast.POSITION.TOP_CENTER });

     alert("Delete Successfully")
     this.retrievestudentsDetails();

   })
 }
}

filterData(studentsremove,searchKey) {

   const result = studentsremove.filter((studentsremov) =>
     studentsremov.studentName.toLowerCase().includes(searchKey) ||
     studentsremov.email.toLowerCase().includes(searchKey)
   //   studentsremov.contribution.toLowerCase().includes(searchKey) ||
   //   studentsremov.methodofsubmission.toLowerCase().includes(searchKey) ||
   //   studentsremov.marksallocation.toLowerCase().includes(searchKey)
   )
   this.setState({studentsremove: result })
 }
 
 handleSearchArea = (e) => {
 
   const searchKey = e.currentTarget.value;
 
   axios.get("http://localhost:8070/usersremove/getstudent").then(res => {
     if (res.data.success) {
 
       this.filterData(res.data.existingstudent, searchKey)
 
     }
 
   });
 }
 


render() {
   return ( 
                       <div>
                        <AdminNavBar/>
                    <br/><br/>
                    <div className="card-header py-3" >
                 <h3 align="center" style={{fontSize:'30px',fontFamily:"Times New Roman"}}>
             <b><u>All Students Details </u></b></h3><br/>

             <div className="card-body" >
             <div className="col-lg-2 mt-2 mb-2">
                <input className="form-control" type="search"
                  placeholder="Serach" name="searchQuery" startIcon={< SearchSharpIcon />} onChange={this.handleSearchArea}>
                </input>
           </div>
              <div align="center">
              <form onSubmit={this.handleSearchArea}>
                
</form>
          <div className='container'>  
      <table className = "table table-hover">
         <thead>
            <tr bgcolor="#79BAEC">
               <th scope='col'>No</th>
                  <th scope='col'>Student Name</th>
                  <th scope='col'>Student Email</th>
                  <th scope='col'>Student NIC</th>
                      <th scope='col'>Student Phone Number</th>
       </tr>
            </thead>
              <tbody>
                  {this.state.studentsremove.map((studentsremove,index)=>(
                     <tr key={index}>    
                        <th scope='row'>{index + 1}</th>
                           <td>{studentsremove.studentName}</td>
                                 <td>{studentsremove.email}</td>
                                   <td>{studentsremove.NIC}</td>
                                      <td>{studentsremove.phone}</td>
                       
                  <td>
                    <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(studentsremove._id)}>
             <i className="far fa-trash-alt"></i>&nbsp;Delete
           </a>   
                    </td>              
               </tr>
                 )
                   )}
                     </tbody>     
                        </table>
                           </div><br/><br/><br/><br/>
                           <Footer/>
                             </div>
                              </div>
                              </div>
                              </div>
   )
 }
}
