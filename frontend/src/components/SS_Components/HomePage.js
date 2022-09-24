import React, { Component } from "react";
import UserNavBar from "../Layouts/UserNavBar";
import Footer from "../Layouts/footer";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <UserNavBar />
        <br />
        <div style={{ backgroundColor: "black", height: "500px" }}>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item">
                <img
                  src="https://res.cloudinary.com/nibmsa/image/upload/v1661880729/banner_1_lp7l6z.jpg"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>

              <div class="carousel-item">
                <img
                  src="https://www.sfu.ca/content/sfu/gls/current/degree-requirements/jcr:content/main_content/textimage/image.img.640.medium.jpg/1623172422265.jpg"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>

              <div class="carousel-item">
                <img
                  src="https://3.files.edl.io/5063/21/10/05/015625-580aac0c-331c-43ac-a960-cead53f4bb4e.jpg"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>

              <div class="carousel-item active">
                <img
                  src="https://assets-global.website-files.com/5b6df8bb681f89c158b48f6b/5d5a63bd3cb150951ed2df29_future-for-information-technology-technicians.jpg"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>

              <div class="carousel-item">
                <img
                  src="https://tripurauniv.ac.in/UploadFile/AdminPanel/DepartmentImages/636385880219844359.jpg"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>

              <div class="carousel-item">
                <img
                  src="https://iim.cmb.ac.lk/wp-content/uploads/2019/05/information-technology-header.jpg"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>

            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>{" "}
          <br />
        </div>
        <div className="container">
          <br />
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" style={{ width: "62rem", color: "black" }}>
              <div class="shadow h-40" id="cardcol1">
                <div class="card-body" style={{ background: "#ffff" }}>
                  <img
                    style={{ marginLeft: 25 }}
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1661841187/images-removebg-preview_zzfjs5.png"
                    width="90px"
                    height="90"
                    className="d-inline-block align-top"
                    alt=""
                  ></img>

                  <h5
                    class="card-title"
                    id="dashh5"
                    align="left"
                    style={{
                      fontFamily: "revert",
                      fontSize: "25px",
                      color: "BLACK",
                    }}
                  >
                    <b>
                      {" "}
                      <u>UML INSTITUTE</u>
                    </b>
                  </h5>
                  <br />
                  <p align="left" style={{ fontFamily: "revert-layer" }}>
                    As a leading tertiary educational Institute in Sri Lanka,
                    research is an integral part of UML. We strive for a vibrant
                    research culture and numerous initiatives are in place for
                    programming research among the academic and student
                    communities.
                  </p>
                  <p align="left" style={{ fontFamily: "revert-layer" }}>
                    Integrating research methodology to undergraduate and
                    postgraduate curricula, establishing a research center to
                    carry out research work, the UML research grant scheme is
                    all meant to promote research.
                  </p>
                  <p align="left" style={{ fontFamily: "revert-layer" }}>
                    <i
                      class="fa fa-user"
                      style={{ color: "#9F000F", marginLeft: "45px" }}
                      aria-hidden="true"
                    ></i>{" "}
                    &nbsp;&nbsp;&nbsp;Programming Language
                  </p>
                  <p align="left" style={{ fontFamily: "revert-layer" }}>
                    <i
                      class="fa fa-laptop"
                      style={{ color: "#0000CD", marginLeft: "40px" }}
                      aria-hidden="true"
                    ></i>{" "}
                    &nbsp;&nbsp;&nbsp;Maching Learning
                  </p>
                  <p align="left" style={{ fontFamily: "revert-layer" }}>
                    <i
                      class="fa fa-building"
                      style={{ color: "#006400", marginLeft: "45px" }}
                      aria-hidden="true"
                    ></i>{" "}
                    &nbsp;&nbsp;&nbsp;Tutorial
                  </p>
                  <p align="left">
                    Marketing and Organizational productivity | Tertiary
                    Education Landscape | Productivity in the SME Sector |
                    Business Finance and IS applications, Business Intelligence
                    | Computational Linguistics, Big Data Management |
                    Artificial Intelligence | Cloud Computing | Data
                    Communication | Data Science | e-Society | Health
                    Informatics | High Performance Computing | Image Processing
                    | Information Security | Robotics and Intelligent Systems |
                    Software Engineering | Computer Vision/Industrial Automation
                    | Sustainable Built Environment | Industrial Engineering and
                    Operations Management
                  </p>
                </div>
              </div>
            </div>

            <div class="col" style={{ width: "20rem" }}>
              <div class="shadow h-60" id="cardcol1">
                <div class="card-body"></div>
                <img
                  src="https://res.cloudinary.com/nibmsa/image/upload/v1662537015/clip-art-study-skills-openclipart-student-macarthur-study-bible-png-favpng-9BxtL6wvLAY2wvtvJquiWW0Gg-removebg-preview_upic7x.png"
                  class="card-img-top"
                  height="300px"
                  width="450px"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}
