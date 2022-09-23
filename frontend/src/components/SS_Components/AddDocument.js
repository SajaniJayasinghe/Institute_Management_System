import React, { useState } from "react";
import AdminNavBar from "../Layouts/AdminNavBar";
import Footer from "../Layouts/footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import app from "../../FireBase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import Button from "@material-ui/core/Button";

export default function AddDocument() {
  const [course_content, setcourse_content] = useState("");

  const params = useParams();
  const id = params.id;

  const sendData = async (e) => {
    e.preventDefault();

    const fileName = new Date().getTime().toString() + course_content.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, course_content);

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
        getDownloadURL(uploadTask.snapshot.ref).then((course_content) => {
          console.log("File available at", course_content);

          let data = {
            course_content: course_content,
          };

          axios
            .put(`http://localhost:8070/course/document/${id}`, data)
            .then(() => {
              alert("Upload Success");
              window.location = "/courseDetails";

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
      <AdminNavBar /> <br />
      <div class="row d-flex align-items-center justify-content-center">
        <div
          style={{
            borderStyle: "solid",
            width: 600,
            background: "#F8F8FF",
            height: 600,
            backgroundSize: "1000px ",
          }}
        >
          <br />
          <br />
          <h4 align="center">
            <b>
              <u>Upload Course Content</u>
            </b>
          </h4>

          <div class="card-body">
            <form action="" method="post" name="form" onSubmit={sendData}>
              <div style={{ display: "flex" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <br />
                  <br />
                  <br />
                  <div style={{ minWidth: "165px", maxWidth: "100px" }}>
                    <b>Course Content : </b>
                  </div>
                  <input
                    type="file"
                    class="form-control"
                    onChange={(e) => setcourse_content(e.target.files[0])}
                  />
                </div>
              </div>
              <div>
                <Button
                  variant="contained"
                  className="w-10"
                  style={{
                    background: "#8BC0FF",
                    width: 23 + "%",
                    color: "BLACK",
                    borderRadius: 20,
                    marginLeft: "400px",
                  }}
                  disableElevation
                  type="submit"
                >
                  CREATE
                </Button>
              </div>
              <img
                src="https://res.cloudinary.com/nibmsa/image/upload/v1663741657/contact-us-concept-landing-page_52683-18636_kys6a3_9c7882-removebg-preview_crbmoy.png"
                class="img-fluid"
                alt="Phone image"
              />
            </form>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}
