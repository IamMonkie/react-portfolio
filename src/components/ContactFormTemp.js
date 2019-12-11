import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
// import { MDBInput } from "mdbreact";
import Swal from "sweetalert2";

// --------------------------------------------------------
// styling
const contactStyle = {
  marginTop: "3rem",
  marginBottom: "3rem",
  textAlign: "center"
};

const copyrightStyle = {
  textAlign: "center",
  color: "rgba(0,0,0,0.4)"
};
// --------------------------------------------------------

class ContactForm extends Component {
  render() {
    return (
      <div id="contact" style={contactStyle}>
        <div>
          <h2>CONTACT </h2>
          <br></br>
          <p>
            <h5>
              <p>Todd Williams</p>
              <p>Email: todd@toddwilliamscg</p>
              <p>Phone: (985)320-5504</p>
            </h5>
          </p>
          <p style={copyrightStyle}>
            Copyright© 2019, Todd Williams. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}

export default ContactForm;
