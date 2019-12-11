import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
// import { MDBInput } from "mdbreact";
import Swal from "sweetalert2";

// --------------------------------------------------------
// styling
const contactStyle = {
  marginTop: "3rem",
  marginBottom: "3rem"
};

const copyrightStyle = {
  textAlign: "center",
  color: "rgba(0,0,0,0.4)"
};
// --------------------------------------------------------

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = { validated: false };
  }

  handleSubmit(event, validated) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.setState({ validated: true });
      // this.handleAlert();
      if (validated === true) {
        this.handleAlert();
      }
    }
  }

  /*
  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });

    if (this.validated === true) {
      this.handleAlert();
    }
  }
  */

  handleAlert() {
    let timerInterval;
    Swal.fire({
      title: "Message Sent!",
      html:
        "Thank you for contacting me. I will get back to you as soon as possible.",
      timer: 5000,
      timerProgressBar: true,
      icon: "success",
      onBeforeOpen: () => {
        Swal.showLoading();
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

  /*
  handleEmail() {
    const messageHtml =  renderEmail(
      <MyEmail name={this.state.name}> {this.state.feedback}</MyEmail>
    );
    
            axios({
                method: "POST", 
                url:"http://localhost:3000/send", 
                data: {
            name: this.state.name,
            email: this.state.email,
            messageHtml: messageHtml
                }
            }).then((response)=>{
                if (response.data.msg === 'success'){
                    alert("Email sent, awesome!"); 
                    this.resetForm()
                }else if(response.data.msg === 'fail'){
                    alert("Oops, something went wrong. Try again")
                }
            })
        }
  }
*/
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
        <Form noValidate validated={validated} method="post" netlify>
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
          {/* 
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Message</Form.Label>
              <Form.Control
                required
                rows="4"
                cols="50"
                type="text"
                placeholder=""
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
           */}

          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Message</Form.Label>
              <textarea
                required
                rows="4"
                cols="50"
                type="text"
                placeholder=""
              ></textarea>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Button
            id="submitButton"
            type="button"
            onClick={e => this.handleSubmit(e)}
          >
            Submit
          </Button>
        </Form>
        <p style={copyrightStyle}>
          Copyright© 2019, Todd Williams. All rights reserved.
        </p>
      </div>
    );
  }
}

export default ContactForm;
