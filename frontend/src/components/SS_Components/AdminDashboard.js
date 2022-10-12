import React, { Component } from "react";
import AdminNavBar from "../Layouts/AdminNavBar";
import Footer from "../Layouts/footer";

export default class AdminDashboard extends Component {
  render() {
    return (
      <div>
        <AdminNavBar />
        <br />
        <br />
        <div className="container">
          <div className="container">
            <div
              class="row row-cols-1 row-cols-md-4 g-4"
              style={{ marginLeft: "130px" }}
            >
              <div class="col">
                <div class="shadow h-60" id="cardcol1">
                  <a href="#">
                    <img
                      src="https://res.cloudinary.com/nibmsa/image/upload/v1661858520/Resources_fdiab6.png"
                      class="card-img-top"
                      alt="..."
                      width="25px"
                      height="190px"
                    />
                  </a>
                  <div class="card-body" style={{ background: "#8BC0FF" }}>
                    <h5 class="card-title" id="dashh5" align="center">
                      <b> Project Resourses</b>
                    </h5>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="shadow h-60" id="cardcol1">
                  <a href="/getblog">
                    <img
                      src="https://res.cloudinary.com/nibmsa/image/upload/v1661859711/Blog_wl0lab.jpg"
                      class="card-img-top"
                      alt="..."
                      width="25px"
                      height="190px"
                    />
                  </a>
                  <div class="card-body" style={{ background: "#8BC0FF" }}>
                    <h5 class="card-title" id="dashh5" align="center">
                      <b>Blog Management</b>
                    </h5>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="shadow h-60" id="cardcol1">
                  <a href="/feedback">
                    <img
                      src="https://res.cloudinary.com/nibmsa/image/upload/v1661859872/depositphotos_50975555-stock-photo-feedback-with-colourful-comments-symbol_y76jfj.webp"
                      class="card-img-top"
                      alt="..."
                      width="25px"
                      height="190px"
                    />
                  </a>
                  <div class="card-body" style={{ background: "#8BC0FF" }}>
                    <h5 class="card-title" id="dashh5" align="center">
                      <b>Feedbacks Management</b>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            <div
              class="row row-cols-1 row-cols-md-4 g-4"
              style={{ marginLeft: "130px" }}
            >
              <div class="col">
                <div class="shadow h-60" id="cardcol1">
                  <a href="/courseDetails">
                    <img
                      src="https://res.cloudinary.com/nibmsa/image/upload/v1662541862/course_indgs3-removebg-preview_ls9gin.png"
                      class="card-img-top"
                      alt="..."
                      width="25px"
                      height="190px"
                    />
                  </a>
                  <div class="card-body" style={{ background: "#8BC0FF" }}>
                    <h5
                      class="card-title"
                      id="dashh5"
                      align="center"
                      href="/courseDetails"
                    >
                      <b> Courses Management</b>
                    </h5>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="shadow h-60" id="cardcol1">
                  <a href="/getstudent">
                    <img
                      src="https://res.cloudinary.com/nibmsa/image/upload/v1661860165/shutterstock_234318064_lg5ecb.webp"
                      class="card-img-top"
                      alt="..."
                      width="25px"
                      height="190px"
                    />
                  </a>
                  <div class="card-body" style={{ background: "#8BC0FF" }}>
                    <h5 class="card-title" id="dashh5" align="center">
                      <b>Student Management</b>
                    </h5>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="shadow h-60" id="cardcol1">
                  <a href="https://mail.google.com/">
                    <img
                      src="https://res.cloudinary.com/nibmsa/image/upload/v1661860299/email-logo_elzs8p.jpg"
                      class="card-img-top"
                      alt="..."
                      width="20px"
                      height="190px"
                    />
                  </a>
                  <div class="card-body" style={{ background: "#8BC0FF" }}>
                    <h5 class="card-title" id="dashh5" align="center">
                      <b>Emails</b>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}
