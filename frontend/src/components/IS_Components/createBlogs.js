import React, { useState, useCallback } from "react";
import axios from "axios";
import app from "../../FireBase";
import "./createBlogs.css";
import {getDownloadURL,getStorage,ref,uploadBytesResumable, } from "firebase/storage";
import NavBar from "../Layouts/Navbar";
import Footer from "../Layouts/footer";

export default function CreateBlogs(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [open, setOpen] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const fileName =
      new Date().getTime().toString() +
      photo.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(
      storageRef,
      photo,
 
    );


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
        getDownloadURL(uploadTask.snapshot.ref).then(
            (photo) => {
              console.log("File available at", photo);
        
          const blog = {
            title: title,
            description: description,
            photo: photo,
          };

          const config = {
            headers: {
              Authorization: localStorage.getItem("Authorization"),
              "content-type": "application/json",
            },
          };
          console.log("auth"),
            axios
              .post(
                `http://localhost:8070/blog/addblogs`,
                blog,
                config
              )
              .then((res) => {
                console.log("data send to database");
                alert("Blog created successfully...");
              window.location="/readblogs"
              })
              .catch((error) => {
                alert("Please Register To the Application");
                console.log(error.message);
              });
        });
      }
    );
  };

  return (
    <div>
      <NavBar/>
    <div className="write">
       {photo && (
        <img className="writeImg" src={ photo}  alt="" />
      )}
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setPhoto(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="writeInput writeText"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
      <Footer/>
      </div>
  );
};


