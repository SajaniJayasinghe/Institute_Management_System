import React, { Component } from "react";
import "./footer.css";

export default class footer extends Component {
  render() {
    return (
      <div>
        <div class="footer-dark">
          <footer>
            <br />
            <div class="container">
              <div class="row">
                <div class="col-md-3 item">
                  <img
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1661841187/images-removebg-preview_zzfjs5.png"
                    width="90px"
                    height="80"
                    className="d-inline-block align-top"
                    alt=""
                  />

                  <div style={{ fontFamily: "TIMES NEW ROMAN" }}>
                    <h3 style={{ fontSize: "25px" }}>UCL INSTITUTE</h3>
                    <ul>
                      <li>
                        <a href="#">Fllow us on Social Media </a>
                      </li>
                      <div
                        class="col item social"
                        style={{ marginRight: "46px", marginTop: "10px" }}
                      >
                        <a href="#" class="fab fa-facebook-f"></a>
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-instagram"></a>
                        <a href="#" class="fab fa-linkedin"></a>
                        <a href="#" class="fab fa-pinterest"></a>
                      </div>
                      <br />
                      <li>
                        <a href="#">
                          Copyright 2022 © UCL. All Rights Reserved.
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  class="col-md-3 item"
                  style={{ marginTop: 40, fontFamily: "TIMES NEW ROMAN" }}
                >
                  <h3 style={{ fontSize: "20px" }}>Explore</h3>
                  <ul>
                    <li>
                      <a href="#" style={{ fontSize: "16px" }}>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: "16px" }}>
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: "16px" }}>
                        Profile
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: "16px" }}>
                        Support Service
                      </a>
                    </li>
                  </ul>
                </div>

                <div
                  class="col-md-3 item"
                  style={{ marginTop: 40, fontFamily: "TIMES NEW ROMAN" }}
                >
                  <h3 style={{ fontSize: "20px" }}>Get In Touch</h3>
                  <ul>
                    <a style={{ fontSize: "14px" }}>
                      Address : UCL Institute, New Kandy Road ,Malabe{" "}
                    </a>
                    <a style={{ fontSize: "16px" }}>
                      Tel No : +94112342310 | +94712345318{" "}
                    </a>
                    <br />
                    <a style={{ fontSize: "16px" }}>
                      Email : ucl.institute@gmail.com
                    </a>
                  </ul>
                </div>

                <div
                  class="col-md-3 item"
                  style={{ marginTop: 40, fontFamily: "TIMES NEW ROMAN" }}
                >
                  <h3 style={{ fontSize: "20px" }}>Informations</h3>
                  <ul>
                    <a style={{ fontSize: "16px" }}>Privacy Policy</a>
                    <br />
                    <a style={{ fontSize: "16px" }}>Terms of Services</a>
                  </ul>
                </div>
              </div>
              <p class="copyright">SLIIT.com © 2022</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
