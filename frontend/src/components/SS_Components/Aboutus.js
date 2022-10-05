import React, { Component } from "react";
import UserNavBar from "../Layouts/UserNavBar";
import Footer from "../Layouts/footer";

export default class aboutus extends Component {
  render() {
    return (
      <div>
        <UserNavBar />
        <h3
          style={{
            marginRight: "80px",
            marginLeft: "80px",
            textAlign: "center",
            fontSize: "40px",
          }}
        >
          <br />
          <b>About the UMass Lowell Research Institute</b>
        </h3>

        <div
          style={{
            marginRight: "110px",
            marginLeft: "110px",
            textAlign: "justify",
          }}
        >
          {" "}
          <br />
          The UMass Lowell Research Institute (UMLRI), located in Lincoln MA, is
          the Commonwealth’s newest emerging technology hub providing cradle to
          grave innovative solutions for our aerospace and defense industry
          partners and the DoD acquisition life cycle. The UMass Lowell Applied
          Research Corporation, a newly formed 501(c)3 non-profit, serves as the
          contracting entity on behalf of UMLRI.
          <br />
          <br />
          The Northstar Campus, a division of UMLRI, was created to accelerate
          early stage technologies in support of local military installations
          and nationwide across the National Defense Industrial Base.
          <br />
          <br />
          Strategically located in a 19,000 square foot facility just outside
          the gates of Hanscom AFB (Lincoln, MA), the UMLRI and Northstar Campus
          aim to enhance public-private partnerships between private industry,
          academia, and government with the charter to eliminate barriers to
          entry for small businesses, entrepreneurs, and startups. Additionally,
          Northstar serves to advance dual-use innovative and disruptive
          technologies by providing a platform to incubate, accelerate and
          decrease time to market. Rapid innovation and small business
          development are key components of our ecosystem, accomplished through
          targeted programming and workforce development training. From its
          earliest inception through today, the Northstar Campus vision remains
          to create community, spark innovation, and grow business.
          <br />
          <br />
          From our earliest days as a source of brainpower for the Industrial
          Revolution unfolding in Lowell’s textile mills to the founding of the
          first plastics engineering department in the country, UMass Lowell has
          spent more than a century at the edge of what is possible.
          <br />
          <br />
          Today, our new UMass Lowell Research Institute is emerging as a leader
          in bridging the gap between research and solutions that change
          people’s lives and provide world-class, cutting-edge technology to our
          warfighters.
          <br />
          <br />
          <h2>
            <b>
              UMass Lowell Research Institute contributes to Massachusetts
              Economy by
            </b>
          </h2>
          <br />* Expanding and retaining defense expenditures within
          Massachusetts; <br />
          * Keeping talent within Massachusetts; <br />
          * Creating high-tech jobs; and <br />
          * Fostering new business opportunities <br />
          <br />
          <h2>
            <b>Military in the Bay State by</b>
          </h2>
          <br />
          * Creating tangible links between state and military
          installations/missions <br /> <br />
          <h2>
            <b>Federal Agencies by</b>
          </h2>
          <br />
          * Developing new relationships with Massachusetts <br />
          * Leveraging the innovative science and technology research arm of UML
          to solve DoD challenges <br />
          <br />
        </div>
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}
