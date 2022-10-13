import React, { Component } from "react";
import NavBar from "../Layouts/NavBar";
import Footer from "../Layouts/footer";

export default class HowToWork extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <br />
        <div style={{ marginLeft: "200px" }}>
          <img
            src="https://www.tekkiwebsolutions.com/wp-content/uploads/Top-Programming-Languages-for-Web-Development.jpg"
            width="1000"
            height="500"
          />
        </div>
        <h3
          style={{
            marginRight: "80px",
            marginLeft: "80px",
            textAlign: "center",
            fontSize: "40px",
            fontFamily: "fantasy",
          }}
        >
          <br />
          <b>
            <u>What is a Professional Certificate?</u>
          </b>
        </h3>
        <br />
        <br />
        <div
          style={{
            marginRight: "110px",
            marginLeft: "110px",
            textAlign: "justify",
          }}
        >
          * <b>Build the Skills to Get Job Ready </b>
          <br />
          <br />
          Whether you’re looking to start a new career, or change your current
          one, Professional Certificates on Coursera help you become job ready.
          Learn at your own pace, whenever and wherever it’s most convenient for
          you. Enroll today and explore a new career path with a 7 day free
          trial. You can pause your learning or end your subscription at any
          time.
          <br />
          <br />* <b> Hands-On Projects</b>
          <br />
          <br />
          Apply your skills with hands-on projects and build a portfolio that
          showcases your job readiness to potential employers. You'll need to
          successfully finish the project(s) to earn your Certificate.
          <br />
          <br />* <b>Earn a Career Credential</b>
          <br />
          <br />
          When you complete all of the courses in the program, you'll earn a
          Certificate to share with your professional network as well as unlock
          access to career support resources to help you kickstart your new
          career. Many Professional Certificates have hiring partners that
          recognize the Professional Certificate credential and others can help
          prepare you for a certification exam. You can find more information on
          individual Professional Certificate pages where it applies.
          <br />
          <br />* <b>About this Professional Certificate</b>
          <br />
          <br />
          Prepare for a new career in the high-growth field of project
          management, no experience or degree required. Get professional
          training designed by Google and get on the fastrack to a competitively
          paid job. There are 479,000 U.S. job openings in project management
          with a $73,000 median entry-level salary.¹ Project managers are
          natural problem-solvers. They set the plan and guide teammates, and
          manage changes, risks, and stakeholders. Gain in-demand skills that
          will prepare you for an entry-level job. Learn from Google employees
          whose foundations in project management served as launchpads for their
          own careers. Upon completion, you can directly apply for jobs with
          Google and over 150 U.S. employers, including Walmart, Best Buy, and
          Astreya. This program qualifies you for over 100 hours of project
          management education, which helps prepare you for Project Management
          Institute Certifications like the globally-recognized Certified
          Associate in Project Management (CAPM).
        </div>
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}
