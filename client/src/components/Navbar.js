import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-dark primary-color justify-content-between rounded mb-0">
          <a class="navbar-brand" href="#">
            TODD WILLIAMS
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  HOME <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  APPLICATIONS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  RESUME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  CONTACT
                </a>
              </li>

              {/* Dropdown */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  LINKS
                </a>
                <div
                  class="dropdown-menu dropdown-primary"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#">
                    LINKEDIN
                  </a>
                  <a class="dropdown-item" href="#">
                    GITHUB
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
