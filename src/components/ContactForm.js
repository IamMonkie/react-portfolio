import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { MDBInput } from "mdbreact";
import Alert from "./alert";
import Swal from "sweetalert2";

// --------------------------------------------------------
// styling
const contactStyle = {
  marginTop: "3vh"
};
// --------------------------------------------------------

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = { validated: false };
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });

    if (form.checkValidity() === true) {
      this.handleAlert();
    }
  }

  handleAlert(form) {
    let timerInterval;
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          Swal.getContent().querySelector(
            "b"
          ).textContent = Swal.getTimerLeft();
        }, 100);
      },
      onClose: () => {
        clearInterval(timerInterval);
      }
    }).then(result => {
      if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.timer
      ) {
        console.log("I was closed by the timer"); // eslint-disable-line
      }
    });
  }

  render() {
    const { validated } = this.state;
    return (
      <div id="contact" style={contactStyle}>
        <div>
          <h2>CONTACT </h2>
          <p>
            <h6>
              I can be reached by phone at (985)320-5504, by email at
              todd@toddwilliamscg.com, or by completing the form below.
            </h6>
          </p>
        </div>
        <Form
          noValidate
          validated={validated}
          onClick={e => this.handleSubmit(e)}
        >
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="John"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Smith"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="john.smith@example.com"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Message</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Button id="submitButton" type="button">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
