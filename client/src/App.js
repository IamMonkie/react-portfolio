import React, { Component, useEffect } from "react";
import { Container } from "react-bootstrap";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

// import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import AboutMe from "./pages/AboutMe";
import Applications from "./pages/applications";
import Resume from "./pages/resume";
import { MDBAnimation } from "mdbreact";
import ReactGa from "react-ga";
// import AnalyticsButtonClick from "./utilities/analyticsClick";

/* --------------------------------- styling -------------------------------- */

const carouselStyling = {
  borderRadius: "10%"
};
/* -------------------------------------------------------------------------- */

function GA() {
  useEffect(() => {
    React.Ga.initialize("UA-22288752-2");
    // report page view
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  // AnalyticsButtonClick;
}

class App extends Component {
  // state = {
  //   user: null,
  //   userServices: [],
  //   register: false,
  //   reset: false,
  //   currentName: ""
  // };

  // componentDidMount() {
  //   auth.onAuthStateChanged(firebaseUser => {
  //     this.setState(
  //       {
  //         user: firebaseUser
  //       },
  //       () => {
  //         if (firebaseUser) {
  //           axios.get(`/api/${firebaseUser.uid}`).then(res => {
  //             this.setState({
  //               userServices: res.data[0].services,
  //               currentName: res.data[0].name
  //             });
  //           });
  //         } else {
  //         }
  //       }
  //     );
  //   });
  // }

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
