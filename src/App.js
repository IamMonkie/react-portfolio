import React, { Component } from "react";
import { Container } from "react-bootstrap";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MDBAnimation } from "mdbreact";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

// import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./components/Navbar";
import ContactForm from "./components/ContactFormTemp";

import AboutMe from "./pages/AboutMe";
import Applications from "./pages/applications";
import Resume from "./pages/resume";

const carouselStyling = {
  borderRadius: "10%"
};

class App extends Component {
  render() {
    return (
      <Container>
        <div className="App" id="home">
          <header className="App-header">
            <MainNavbar />
          </header>

          <body className="App-body">
            <MDBAnimation type="fadeInUpBig" delay="1s">
              <AboutMe />
            </MDBAnimation>
            <MDBAnimation type="fadeInUpBig" delay="1.25s">
              <Applications />
            </MDBAnimation>
            <MDBAnimation type="fadeInUpBig" delay="1.5s">
              <Resume />
            </MDBAnimation>

            <MDBAnimation type="fadeInUpBig" delay="1.75s">
              <ContactForm />
            </MDBAnimation>
          </body>
        </div>
      </Container>
    );
  }
}

export default App;
