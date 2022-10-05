import React, { Component } from "react";
import Button from '@material-ui/core/Button';

export default class AdminNavBar extends Component {
  render() {
    return (
      <div>
        <img

            style={{marginLeft:25}}
            src="https://res.cloudinary.com/nibmsa/image/upload/v1661841187/images-removebg-preview_zzfjs5.png"
            width="90px"
            height="90"
            className="d-inline-block align-top"
            alt="">
            </img>
      
            <img
            style={{marginTop:20,marginRight:20}}
            src="https://res.cloudinary.com/nibmsa/image/upload/v1661841580/219983_ckz2ut.png"
            width="60"
            height="60"
            align="right"
            type="button" data-bs-toggle="modal"  data-bs-target="#exampleModal"
            className="d-inline-block align-top"
            alt=""/>

<div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div class="modal-dialog">
                <div class="modal-content" style={{background:"#E9F6FD"}}>
                   <div class="modal-header">       
                         
                   
             <Button
                   href='/adminprofile'
                   style={{ color:"black",background:"#8BC0FF", borderRadius:20 }}
                   variant="outlined"
                  
                 >
                My Profile
               </Button>   &nbsp;&nbsp;
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
            </div>
         </div>
       </div>

   
       <nav class="navbar navbar-expand-lg " style={{ backgroundColor:"#DAE7F8"}} >
       <div class="container">  
       <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
       <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 

          style={{ marginLeft: 25 }}
          src="https://res.cloudinary.com/nibmsa/image/upload/v1661841187/images-removebg-preview_zzfjs5.png"
          width="90px"
          height="90"
          className="d-inline-block align-top"
          alt=""
        ></img>


        <img
          style={{ marginTop: 15, marginRight: 15 }}
          src="https://res.cloudinary.com/nibmsa/image/upload/v1661841580/219983_ckz2ut.png"
          width="50"
          height="50"
          align="right"
          className="d-inline-block align-top"
          alt="/profile"
        />

        <nav
          class="navbar navbar-expand-lg "
          style={{ backgroundColor: "#DAE7F8" }}
        >
          <div class="container">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="/admindashboard"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 50,
                      marginRight: 50,
                    }}
                  >
                    <b>Home</b>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="/programs"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 40,
                      marginRight: 50,
                    }}
                  >
                    <b>Programs</b>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="#"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 40,
                      marginRight: 50,
                    }}
                  >
                    <b>Resourses</b>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="/getblog"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 40,
                      marginRight: 50,
                    }}
                  >
                    <b>Blogs</b>
                  </a>
                </li>


        <li class="nav-item">
          <a class="nav-link" href="/getstudent" style={{color: "black" ,fontFamily:"times new roman", fontSize:20,marginLeft:40,marginRight:50}}><b>Students</b></a>
        </li> 
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 40,
                      marginRight: 50,
                    }}
                  >
                    <b>Students</b>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 40,
                      marginRight: 50,
                    }}
                  >
                    <b>Feedbacks</b>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 40,
                      marginRight: 50,
                    }}
                  >
                    <b>Emails</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
