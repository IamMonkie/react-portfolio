import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
class MainNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" expand="md" fixed="top">
        <Navbar.Brand>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <h4>TODD WILLIAMS</h4>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link
                activeClass="active"
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <strong>ABOUT ME</strong>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="applications"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <strong>APPLICATIONS</strong>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <strong>RESUME</strong>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <strong>CONTACT</strong>
              </Link>
            </Nav.Link>

            <NavDropdown title="LINKS" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://www.linkedin.com/in/todd-williams-20461121/"
                target="_blank"
              >
                <strong>Linkedin</strong>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="https://github.com/IamMonkie"
                target="_blank"
              >
                <strong>Github</strong>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="https://toddwilliamscg.com"
                target="_blank"
              >
                <strong>VFX Portfolio</strong>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNavbar;
