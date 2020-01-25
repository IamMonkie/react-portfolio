import React, { Component } from "react";
import Swal from "sweetalert2";

class Alert extends Component {
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
  render() {
    return this.handleAlert();
  }
}
export default Alert;
