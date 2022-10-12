import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default class UserNavBar extends Component {
  render() {
    return (
      <div>
        <img
          style={{ marginLeft: 25 }}
          src="https://res.cloudinary.com/nibmsa/image/upload/v1661841187/images-removebg-preview_zzfjs5.png"
          width="90px"
          height="90"
          className="d-inline-block align-top"
          alt=""
        ></img>

        <img
          style={{ marginTop: 20, marginRight: 20 }}
          src="https://res.cloudinary.com/nibmsa/image/upload/v1661841580/219983_ckz2ut.png"
          width="60"
          height="60"
          align="right"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="d-inline-block align-top"
          alt=""
        />

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content" style={{ background: "#045582" }}>
              <div class="modal-header">
                <h5
                  class="modal-title"
                  id="exampleModalLabel"
                  style={{ color: "white" }}
                >
                  LOGIN AS{" "}
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div class="modal-body" align="right">
                <Button
                  href="/adminsignin"
                  style={{ color: "black", background: "#D9D9D9" }}
                  variant="outlined"
                  startIcon={<AccountCircleIcon />}
                >
                  Admin
                </Button>{" "}
                &nbsp;&nbsp;
                <Button
                  href="/signin"
                  style={{ color: "black", background: "#D9D9D9" }}
                  variant="outlined"
                  startIcon={<AccountCircleIcon />}
                >
                  User
                </Button>
              </div>
            </div>
          </div>
        </div>

        <nav
          class="navbar navbar-expand-lg "
          style={{ backgroundColor: "#DAE7F8"}}
        >
          <div class="container">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="/"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft:110,
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
                    href="/courses"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 50,
                      marginRight: 50,
                    }}
                  >
                    <b>Courses</b>
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
                      marginLeft: 50,
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
                    href="#"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 50,
                      marginRight: 50,
                    }}
                  >
                    <b>Blogs</b>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="/aboutus"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 50,
                      marginRight: 50,
                    }}
                  >
                    <b>About Us</b>
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
                      marginLeft: 50,
                      marginRight: 50,
                    }}
                  >
                    <b>Contact </b>
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
