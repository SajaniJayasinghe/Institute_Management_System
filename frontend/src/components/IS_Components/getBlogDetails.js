import React, { Component } from "react";
import AdminNavBar from "../Layouts/AdminNavBar";
import axios from "axios";
import DescriptionIcon from "@mui/icons-material/Description";
import IconButton from "@material-ui/core/IconButton";

export default class getBlogDetails extends Component {
  constructor(props) {
    super(props);
    this.generateReport = this.generateReport.bind(this);
    this.state = {
      blogs: [],
      student: [],
    };
  }

  componentDidMount() {
    this.retrieveBlogs();
  }

  retrieveBlogs() {
    axios.get("http://localhost:8070/blog/readblogs").then((res) => {
      if (res.data.success) {
        this.setState({
          blogs: res.data.existingblogs,
        });
        console.log(this.state.blogs);
      }
    });
  }

  //Search
  filterData(blogs, searchKey) {
    const result = blogs.filter((blogs) =>
      blogs.studentName.toLowerCase().includes(searchKey)
    );

    this.setState({ blogs: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:8070/blog/readblogs").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingblogs, searchKey);
      }
    });
  };

  async generateReport() {
    const obj = { blogs: this.state.blogs };
    await axios
      .post("http://localhost:8070/generateblogsreport", obj, {
        responseType: "arraybuffer",
        headers: { Accept: "application/pdf" },
      })
      .then((res) => {
        alert("Report Generated");
        console.log(res);
        console.log(res.data);
        const pdfBlog = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlog, "Blogs.pdf");
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(obj);
  }

  render() {
    return (
      <div>
        <AdminNavBar />
        <div className="container">
          <br />
          <br />

          <div align="center">
            <h3 style={{ fontFamily: "times new roman", fontSize: "40px" }}>
              <u>
                <b>BLOGS LIST</b>
              </u>
            </h3>
            <br></br>
          </div>
          <div align="right">
            <IconButton size="medium" onClick={this.generateReport}>
              <DescriptionIcon fontSize="large" style={{ color: "black" }} />
            </IconButton>
            <br />
            Report
          </div>
          <div className="col-md-3" style={{ marginRight: "970px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search Student Name "
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
                  <font color="#fff">Student ID</font>
                </th>
                <th>
                  <font color="#fff">Student Name</font>
                </th>
                <th>
                  <font color="#fff">Title</font>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.blogs.map((blogs, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{blogs.studentId}</td>
                  <td>{blogs.studentName}</td>
                  <td>{blogs.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
