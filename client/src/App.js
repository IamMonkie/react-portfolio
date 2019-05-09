import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";

import AboutMe from "./pages/AboutMe";
import Resume from "./pages/resume";

class App extends Component {
  render() {
    return (
      <Container>
        <div className="App" id="home">
          <header className="App-header">
            <MainNavbar />
          </header>
          <body className="App-body">
            <AboutMe />
            <Resume />
            <ContactForm />
            {/* <Router>
            <Switch>
              <Route exact path="/" Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/contact" Component={Contact} />
              <Route component={noMatch} />
            </Switch>
          </Router> */}
          </body>
        </div>
      </Container>
    );
  }
}

export default App;
