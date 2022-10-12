import React, { Component } from "react";
import axios from "axios";
import NavBar from "../Layouts/Navbar";

export default class Programs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    this.retrieveCourses();
  }
  retrieveCourses() {
    axios.get("http://localhost:8070/course/getDetails").then((res) => {
      if (res.data.success) {
        this.setState({
          courses: res.data.existingCourses,
        });
        console.log(this.state.courses);
      }
    });
  }

  //Search
  filterData(courses, searchKey) {
    const result = courses.filter(
      (courses) =>
        courses.course_name.toLowerCase().includes(searchKey) ||
        courses.course_code.toLowerCase().includes(searchKey)
    );

    this.setState({ courses: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:8070/course/getDetails").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingCourses, searchKey);
      }
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <br />
          <br />
          <div align="center">
            <h3 style={{ fontFamily: "times new roman", fontSize: "40px" }}>
              <u>
                <b>AVAILABLE COURSES </b>
              </u>
            </h3>{" "}
            <br></br>
            <div className="col-md-3" style={{ marginRight: "970px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search Course Name or Course Code "
                onChange={this.handleSearchArea}
              />{" "}
              <br />
            </div>
            <table class="table">
              <thead>
                <tr bgcolor="#083C53">
                  <th>
                    <font color="#fff">No</font>
                  </th>
                  <th>
                    <font color="#fff">Course Name</font>
                  </th>
                  <th>
                    <font color="#fff">Course Code</font>
                  </th>
                  <th>
                    <font color="#fff">Subtitle</font>
                  </th>
                  <th>
                    <font color="#fff">Lecture Name</font>
                  </th>
                </tr>
              </thead>

              <tbody>
                {this.state.courses.map((courses, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{courses.course_name}</td>
                    <td>{courses.course_code}</td>
                    <td>{courses.subtitle}</td>
                    <td>{courses.lecture_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
