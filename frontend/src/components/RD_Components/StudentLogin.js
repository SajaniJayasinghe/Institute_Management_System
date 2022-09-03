import React, { Component } from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";

export default class StudentLogin extends Component {
    constructor(props){
        super(props);
        this.StudentLoginSubmit = this.StudentLoginSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
        
        this.state={
            email:"",
            pwd:"",
            token: "",
            open: false,
         
        }
    }  
    async StudentLoginSubmit(e){
        e.preventDefault()
        const userData = {
          email: this.state.email,
          pwd:this.state.pwd
      }
      await axios.post("http://localhost:8070/student/signin",userData)
      .then((res)=>{
          this.setState({
              token:res.data.token
          })
          console.log(this.state.token)
          localStorage.setItem("Authorization", res.data.token)
          window.location = "/"
          alert('Login Successfull!!');
      })
      .catch((err)=>{
          console.log(err)
          this.setState({open:true})
          alert('Loging Failded.Please Try again!!',err);
      })
     }

     handleClose(reason) {
        if (reason === 'clickaway') {
         return;
        }
        this.setState({open: false})
     };

    render() {
    return (
        <div style={{ backgroundColor:"#2B3856" }} >
        {/* <MainHomePageNavBar/> <br/><br/><br/> */}
           <div class="row d-flex align-items-center justify-content-center">
              <div style={{width: 900,background: "#CCCCFF",height:450}}><br/>
                 <div class="card-body" > 
                   <div class="container py-5 h-90" > 
                      <div class="row d-flex align-items-center justify-content-center h-100">      
                
                      <div class="col-md-8 col-lg-7 col-xl-6"> 
                 <img src="https://www.firststudent.com/" class="img-fluid" alt="Phone image"/>  <br/>
             <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <u><b>STUDENT&nbsp;&nbsp;LOGIN</b></u></h2> 
        </div>
                
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">    
          <form onSubmit={this.StudentLoginSubmit} name="form"> 
               <div class="form-outline mb-4">  
                   <div className="col-md-9">
                        <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> <i className="fa fa-lock"> &nbsp;&nbsp;</i>            
                             USER EMAIL ADDRESS </span>
                                 <input type="text" name="email" placeholder='Enter Your Email' class="form-control "
                                      onChange={e=>this.setState({email:e.target.value})} required/>
                                         </div>
                                             </div>
     
                              <div class="form-outline mb-4" >
                           <div className="col-md-9">
                       <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> <i className="fa fa-key"> &nbsp;&nbsp;</i>    
                    PASSWORD</span>
                <input type="password" name="password" class="form-control " placeholder="Enter Your Password" 
              onChange={e=>this.setState({pwd:e.target.value})} required/> 
           </div>
        </div>   
        <Button 
           type="submit" class="btn btn-primary">
              <i className="fa fa-check-circle"> &nbsp;&nbsp;  Sign in &nbsp;&nbsp;</i>
                 </Button>
                    <div class="divider d-flex align-items-center my-4">
                        <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> 
                            <center><label >Not Registered? &nbsp;&nbsp;</label>
                               <a href='/signup'>Sign Up</a></center>
                                  </span>
                                     </div>             
                                  </form>   
                                </div> 
                              </div>
                            </div>
                          </div>
                        </div>
                    </div><br/><br/>
                    {/* <Footer/> */}
                  </div>
      )
    }
  }

