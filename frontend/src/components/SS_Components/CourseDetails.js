import React, { Component } from "react";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@mui/icons-material/Description";
import IconButton from "@material-ui/core/IconButton";
import AdminNavBar from "../Layouts/AdminNavBar";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import moment from "moment";

export default class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.generateReport = this.generateReport.bind(this);
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

  //delete course details
  onDelete = (courseID) => {
    if (window.confirm("Are you sure you wish to delete this course?")) {
      axios
        .delete(`http://localhost:8070/course/delete/${courseID}`)
        .then((res) => {
          this.retrieveCourses();
        });
    }
  };

  //Search
  filterData(courses, searchKey) {
    const result = courses.filter(
      (courses) =>
        courses.course_name.toLowerCase().includes(searchKey)
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

  //generate report
  async generateReport() {
    const obj = { courses: this.state.courses };
    await axios
      .post("http://localhost:8070/generatecoursereport", obj, {
        responseType: "arraybuffer",
        headers: { Accept: "application/pdf" },
      })
      .then((res) => {
        alert("Report Generated");
        console.log(res);
        console.log(res.data);
        const pdfBlog = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlog, "Courses.pdf");
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(obj);
  }

  render() {
    return (
      <div>
        {" "}
        <AdminNavBar />
        <div className="container">
          <br />
          <br />
          <div align="center">
            <h3 style={{ fontFamily: "times new roman", fontSize: "40px" }}>
              <u>
                <b>COURSES LIST</b>
              </u>
            </h3>{" "}
            <br></br>
            <div align="right">
              <Button
                variant="contained"
                style={{
                  background: "#8BC0FF",
                  width: 7 + "%",
                  color: "BLACK",
                  borderRadius: 20,
                }}
                href="/createCourse"
                disableElevation
                type="submit"
              >
                CREATE
              </Button>
              &nbsp;
              <IconButton size="medium" onClick={this.generateReport}>
                <DescriptionIcon fontSize="large" style={{ color: "black" }} />
              </IconButton>
            </div>
            <div className="col-md-3" style={{ marginRight: "970px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search Course Name "
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
                  <th>
                    <font color="#fff">Courseadded Date</font>
                  </th>
                  <th>
                    <font color="#fff">Add Document</font>
                  </th>
                  <th>
                    <font color="#fff">Action</font>
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
                    <td>
                      {moment(courses.courseadded_date).format("DD/MM/YYYY")}
                    </td>
                    <td>
                      <IconButton
                        aria-label="edit"
                        color="primary"
                        size="small"
                        href={`/addDocument/${courses._id}`}
                        style={{ color: "black", marginLeft: "50px" }}
                      >
                        <ControlPointIcon
                          fontSize="small"
                          style={{ color: "black" }}
                        />
                      </IconButton>
                    </td>
                    <td>
                      <IconButton
                        aria-label="edit"
                        color="primary"
                        size="small"
                        href={`/update/${courses._id}`}
                      >
                        <EditIcon fontSize="small" style={{ color: "black" }} />
                      </IconButton>{" "}
                      &nbsp;&nbsp;
                      <IconButton aria-label="delete" size="small">
                        <DeleteForeverIcon
                          fontSize="small"
                          onClick={() => this.onDelete(courses._id)}
                          style={{ color: "black" }}
                        />
                      </IconButton>
                    </td>
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
