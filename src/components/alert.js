import React, { Component } from "react";
import SweetAlert from "sweetalert2-react";

class Alert extends Component {
  render() {
    return (
      <div>
        <submitButton onClick={() => this.setState({ show: true })}>
          Alert
        </submitButton>
        <SweetAlert
          show={this.state.show}
          title="Demo"
          text="SweetAlert in React"
          onConfirm={() => this.setState({ show: false })}
        />
      </div>
    );
  }
}
export default Alert;
