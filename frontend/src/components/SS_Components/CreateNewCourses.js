import React, { useState } from "react";
import axios from "axios";
import app from "../../FireBase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import Button from "@material-ui/core/Button";
import AdminNavBar from "../Layouts/AdminNavBar";
import Footer from "../Layouts/footer";

export default function CreateNewCourses() {
  const [course_name, setcourse_name] = useState("");
  const [course_code, setcourse_code] = useState("");
  const [subtitle, setsubtitle] = useState("");
  const [lecture_name, setlecture_name] = useState("");
  const [description, setdescription] = useState("");
  const [courseadded_date, setcourseadded_date] = useState("");
  const [course_thumbnail, setcourse_thumbnail] = useState("");

  const sendData = async (e) => {
    e.preventDefault();

    const fileName = new Date().getTime().toString() + course_thumbnail.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, course_thumbnail);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((course_thumbnail) => {
          console.log("File available at", course_thumbnail);

          let data = {
            course_name: course_name,
            course_code: course_code,
            subtitle: subtitle,
            lecture_name: lecture_name,
            description: description,
            courseadded_date: courseadded_date,
            course_thumbnail: course_thumbnail,
          };

          axios
            .post("http://localhost:8070/course/courseadd", data)
            .then(() => {
              alert("Course Added Successfully");
              window.location.href = "/courseDetails";

              console.log(data);
            })
            .catch((err) => {
              alert(err);
            });
        });
      }
    );
  };

  return (
    <div>
      <AdminNavBar />
      <br />
      <br />
      <div class="row d-flex align-items-center justify-content-center">
        <div
          style={{
            width: 1000,
            background: "#F5F5F5",
            height: 620,
            backgroundSize: "1000px ",
          }}
        >
          <div class="card-body">
            <form action="" method="post" name="form" onSubmit={sendData}>
              <div style={{ display: "flex" }}>
                <div class="row g-0" style={{ flex: 1 }}>
                  <img
                    src="https:res.cloudinary.com/nibmsa/image/upload/v1661690483/top-banner-with-no-bg-1_vwvnct.webp"
                    style={{ objectFit: "cover" }}
                  ></img>
                  <br />
                  <br />
                </div>

                <div class="col-xl-10" style={{ flex: 1 }}>
                  <br />
                  <div
                    class="form-outline mb-2"
                    style={{ fontFamily: "times new roman" }}
                  >
                    <h3 style={{ fontFamily: "times new roman" }}>
                      &emsp;&emsp;
                      <b>
                        <u>Create&nbsp;New Course</u>
                      </b>
                    </h3>
                    <br />
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ minWidth: "165px", maxWidth: "100px" }}>
                        1. Course Name
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        name="course_name"
                        placeholder="Enter course name"
                        onChange={(e) => {
                          setcourse_name(e.target.value);
                        }}
                        required
                      />
                      <br />
                      <br />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ minWidth: "165px", maxWidth: "100px" }}>
                        2. Course Code
                      </div>
                      <input
                        type="text"
                        pattern="^[a-zA-Z0-9]*$"
                        class="form-control"
                        name="course_code"
                        placeholder="Enter course code"
                        onChange={(e) => {
                          setcourse_code(e.target.value);
                        }}
                        required
                      />
                      <br />
                      <br />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ minWidth: "165px", maxWidth: "100px" }}>
                        3. Subtitle
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        name="subtitle"
                        placeholder="Enter subtitle "
                        onChange={(e) => {
                          setsubtitle(e.target.value);
                        }}
                        required
                      />
                      <br />
                      <br />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ minWidth: "165px", maxWidth: "100px" }}>
                        4. Lecture Name
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        name="lecture_name"
                        placeholder="Enter lecture name"
                        onChange={(e) => {
                          setlecture_name(e.target.value);
                        }}
                        required
                      />
                      <br />
                      <br />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ minWidth: "165px", maxWidth: "100px" }}>
                        5. Description
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        name="description"
                        placeholder="Enter description"
                        onChange={(e) => {
                          setdescription(e.target.value);
                        }}
                        required
                      />
                      <br />
                      <br />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ minWidth: "145px", maxWidth: "100px" }}>
                        6. Course Added Date
                      </div>
                      <input
                        style={{ marginLeft: "20px" }}
                        type="date"
                        class="form-control"
                        name="courseadded_date"
                        placeholder="Enter Course added Date"
                        onChange={(e) => {
                          setcourseadded_date(e.target.value);
                        }}
                        required
                      />
                      <br />
                      <br />
                    </div>
                    <br />
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ minWidth: "165px", maxWidth: "100px" }}>
                        7. Course Thumbnail
                      </div>
                      <input
                        type="file"
                        class="form-control"
                        onChange={(e) => setcourse_thumbnail(e.target.files[0])}
                        required
                      />
                    </div>
                    <br />
                    <br />
                    <Button
                      variant="contained"
                      className="w-10"
                      style={{
                        background: "#8BC0FF",
                        width: 23 + "%",
                        color: "BLACK",
                        borderRadius: 20,
                      }}
                      disableElevation
                      type="submit"
                    >
                      CREATE
                    </Button>
                    &nbsp; &nbsp;
                    <Button
                      variant="contained"
                      href="/courseDetails"
                      className="w-10"
                      style={{
                        background: "#8BC0FF",
                        width: 23 + "%",
                        color: "BLACK",
                        borderRadius: 20,
                      }}
                      disableElevation
                      type="submit"
                    >
                      CANCEL
                    </Button>
                  </div>{" "}
                  <br /> <br />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
