import React, { Component } from "react";
// import { Row, Col } from "react-bootstrap";
import AppCarousel from "../components/Carousel";

// --------------------------------------------------------
// styling
const applicationsStyle = {
  marginTop: "3vh"
};
// --------------------------------------------------------

class Applications extends Component {
  render() {
    return (
      <div id="applications" style={applicationsStyle}>
        <h2>APPLICATIONS</h2>
        <AppCarousel />
      </div>
    );
  }
}
export default Applications;
