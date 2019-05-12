import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import AppCarousel from "../components/Carousel";

class Applications extends Component {
  render() {
    return (
      <div id="applications">
        <h1>APPLICATIONS</h1>
        <AppCarousel />
      </div>
    );
  }
}
export default Applications;
