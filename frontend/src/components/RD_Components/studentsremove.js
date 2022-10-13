import React, { Component } from "react";
import axios from "axios";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import AdminNavBar from "../Layouts/AdminNavBar";
import DescriptionIcon from "@mui/icons-material/Description";
import IconButton from "@material-ui/core/IconButton";

export default class Studentsremove extends Component {
  constructor(props) {
    super(props);
    this.generateReport = this.generateReport.bind(this);
    this.state = {
      studentsremove: [],
    };
  }

  //retrive supervisor members
  componentDidMount() {
    this.retrievestudentsDetails();
  }

  //data retrive
  retrievestudentsDetails() {
    axios.get("http://localhost:8070/usersremove/getstudent").then((res) => {
      if (res.data.success) {
        this.setState({
          studentsremove: res.data.existingstudent,
        });

        console.log(this.state.studentsremove);
      }
    });
  }

  //delete cosupervisor
  onDelete = (studentID) => {
    if (window.confirm("Are you sure you wish to delete this details?")) {
      axios
        .delete(`http://localhost:8070/usersremove/studentdelete/${studentID}`)
        .then((res) => {
          alert("Delete Successfully");
          this.retrievestudentsDetails();
        });
    }
  };

  filterData(studentsremove, searchKey) {
    const result = studentsremove.filter(
      (studentsremov) =>
        studentsremov.studentName.toLowerCase().includes(searchKey) ||
        studentsremov.email.toLowerCase().includes(searchKey)
    );
    this.setState({ studentsremove: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8070/usersremove/getstudent").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingstudent, searchKey);
      }
    });
  };

  async generateReport() {
    const obj = { studentsremove: this.state.studentsremove };
    await axios
      .post("http://localhost:8070/generatestudent", obj, {
        responseType: "arraybuffer",
        headers: { Accept: "application/pdf" },
      })
      .then((res) => {
        alert("Report Generated");
        console.log(res);
        console.log(res.data);
        const pdfBlog = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlog, "Students.pdf");
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
        <br />
        <br />
        <div className="card-header py-3">
          <h3
            align="center"
            style={{ fontSize: "30px", fontFamily: "Times New Roman" }}
          >
            <b>
              <u>All Students Details </u>
            </b>
          </h3>
          <br />
          <div style={{ marginLeft: "1300px" }}>
            <IconButton size="medium" onClick={this.generateReport}>
              <DescriptionIcon fontSize="large" style={{ color: "black" }} />
            </IconButton>
            <div style={{ fontSize: "15px" }}>Report</div>
          </div>
          <div className="card-body">
            <div className="col-lg-2 mt-2 mb-2" style={{ marginLeft: "40px" }}>
              <input
                className="form-control"
                type="search"
                placeholder="Serach Here"
                name="searchQuery"
                startIcon={<SearchSharpIcon />}
                onChange={this.handleSearchArea}
              ></input>
            </div>
            <div align="center">
              <form onSubmit={this.handleSearchArea}></form>
              <div className="container">
                <table className="table table-hover">
                  <thead>
                    <tr bgcolor="#79BAEC">
                      <th scope="col">No</th>
                      <th scope="col">Student Name</th>
                      <th scope="col">Student Email</th>
                      <th scope="col">Student NIC</th>
                      <th scope="col">Student Phone Number</th>
                      <th scope="col">Remove Student</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.studentsremove.map((studentsremove, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{studentsremove.studentName}</td>
                        <td>{studentsremove.email}</td>
                        <td>{studentsremove.NIC}</td>
                        <td>{studentsremove.phone}</td>

                        <td align="center">
                          <a
                            className="btn btn-danger"
                            href="#"
                            onClick={() => this.onDelete(studentsremove._id)}
                          >
                            <i className="far fa-trash-alt"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
