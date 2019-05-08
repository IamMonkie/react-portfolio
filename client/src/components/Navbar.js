import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

class MainNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" expand="md" fixed="top">
        <Navbar.Brand href="#home">TODD WILLIAMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#aboutMe">ABOUT ME</Nav.Link>
            <Nav.Link href="#applications">APPLICATIONS</Nav.Link>
            <Nav.Link href="#resume">RESUME</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

            <NavDropdown title="LINKS" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://www.linkedin.com/in/todd-williams-20461121/"
                target="_blank"
              >
                Linkedin
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="https://github.com/IamMonkie"
                target="_blank"
              >
                Github
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="https://toddwilliamscg.com"
                target="_blank"
              >
                VFX Portfolio
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNavbar;
