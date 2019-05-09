import React, { Component } from "react";
import ProfileImage from "../components/profileImage";
import { Row, Col, Container } from "react-bootstrap";

// --------------------------------------------------------
// styling
const aboutMeStyle = {
  marginTop: "15vh"
};
// --------------------------------------------------------

class AboutMe extends Component {
  render() {
    return (
      <div id="aboutMe" style={aboutMeStyle}>
        <Row>
          <Col>
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProfileImage />

            <h5>
              I am a creative, collaborative, hard working Web Developer. I
              create user-friendly websites that solve problems through
              innovative design. I am a recent graduate of the University of
              North Carolina at Chapel Hill’s Full Stack Coding Boot Camp, where
              I received a certificate in Web Development and Coding. This boot
              camp has allowed me to hone my skills in multiple areas such as
              HTML5, CSS, Bootstrap, Javascript, jQuery, Node.js, React, SQL,
              and mongoDB. In addition, I am also a 3D Generalist and Electrical
              CAD Drafter/ Designer. I am passionate about design and the coding
              that pushes the design forward. I am looking to bring my
              experience in art, attention to detail, creative and analytical
              mind, and coding skill-set to a company to grow as a valuable
              asset.
            </h5>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AboutMe;
