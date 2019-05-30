import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

// --------------------------------------------------------
// styling
const resumeStyle = {
  marginTop: "3vh"
};
// --------------------------------------------------------

class Resume extends Component {
  render() {
    return (
      <div id="resume" style={resumeStyle}>
        <h2>Resume</h2>
        <div className="resumeText" style={resumeStyle}>
          <p>
            <h6>
              <p>
                <strong>Skills</strong>
              </p>
              <p>
                <strong>Coding Browser: </strong>
              </p>
              <p>HTML, CSS, Javascript, jQuery, Bootstrap API </p>
              <p>
                <strong>Integration: </strong>
              </p>
              <p>API's, Json, AJAX, Firebase</p>
              <p>
                <strong>Dev Tools: </strong>
              </p>
              <p>Heroku, Git, Github</p>
              <p>
                <strong>Database: </strong>
              </p>
              <p>MySQL, MongoDB</p>
              <p>
                <strong>Server: </strong>
              </p>
              <p>
                Node.js, Express, Express-handlebars, MVC, User Authentication,
                Sequelize (ORM)
              </p>
              <p>
                <strong>CS Fundamentals: </strong>
              </p>
              <p>Algorithms, design patterns</p>
              <p>
                <strong>Digital Art: </strong>
              </p>
              <p>
                3D Modeling (hard surface or organic), UV Unwrapping, Texturing/
                Shading, Lighting, Rigging, Animation, Mental Ray, Matchmoving,
                Compositing ,Video Editing, Photoshop, Illustrator
              </p>
              <p>
                <strong>Drafting: </strong>
              </p>
              <p>
                AutoCAD, AutoCAD Electrical, Microstation V8i, Solidworks,
                Inventor, Pro-Engineer, hand drafting
              </p>
              <p>
                <strong>Experience: </strong>
              </p>
              <ul>
                <p>
                  <li>
                    CAD Drafter/ Designer, Powersecure; Durham, NC.
                    --(2016-Present)
                  </li>
                </p>
                <p>
                  <li>
                    Drafter II, Dashiell Corp; Houston, TX. -- (2014-2016)
                  </li>
                </p>
                <p>
                  <li>
                    3D Generalist, Microsoft; Santa Monica, CA. -- (2014)
                    --Commercial: "Productivity Future Vision"; modeling,
                    animation, lighting, rendering)
                    <Row>
                      {"Website: "}&#160;
                      <a
                        href="
                    http://www.microsoft.com/enterprise/productivityvision/"
                        target="_blank"
                      >
                        http://www.microsoft.com/enterprise/productivityvision/
                      </a>
                    </Row>
                  </li>
                </p>
                <p>
                  <li>
                    3D Generalist, Media Over Matter Productions; Santa Monica,
                    CA. (2012-2014) --Short Film: "Monty and the Runaway
                    Furnace"; modeling, texturing, lighting, set dressing,
                    rendering
                    <Row>
                      {"IMBD: "}&#160;
                      <a
                        href="http://www.imdb.com/title/tt5109178/"
                        target="_blank"
                      >
                        http://www.imdb.com/title/tt5109178/
                      </a>
                    </Row>
                  </li>
                </p>
                <p>
                  <li>
                    Advanced Support Agent, TurboSquid; New Orleans, LA. --
                    (2010-2012) Assisting customers with any issues they may be
                    having. I frequently helped people overcome problems they
                    are having in Maya, 3ds Max, and C4D. Common issues may have
                    included mesh, texture, animation, rendering problems, and
                    file format conversions.
                  </li>
                </p>
              </ul>
              <p>
                <strong>Education: </strong>
              </p>
              <ul>
                <p>
                  <li>
                    University of North Carolina at Chapel Hill
                    <Row>Chapel Hill, North Carolina.</Row>
                    <Row>Full-stack Coding Boot Camp</Row>
                  </li>
                </p>
                <p>
                  <li>
                    San Jacinto College
                    <Row>Houston, Texas.</Row>
                    <Row>
                      AAS Engineering Design Graphics (Concentration in
                      Mechanical Drafting)
                    </Row>
                  </li>
                </p>
                <p>
                  <li>
                    Gnomon School of Visual Effects
                    <Row>Los Angeles, California</Row>
                    <Row>ZBrush Courses</Row>
                  </li>
                </p>
                <p>
                  <li>
                    Escape Studios
                    <Row>Santa Monica, California</Row>
                    <Row>VFX Production Certificate of Completion</Row>
                  </li>
                </p>
                <p>
                  <li>
                    Southeastern Louisiana University
                    <Row>Hammond. Louisiana</Row>
                    <Row>
                      BA Digital Art (Concentration in 3D Modeling/ Texturing)
                    </Row>
                  </li>
                </p>
              </ul>
            </h6>
          </p>
        </div>
      </div>
    );
  }
}

export default Resume;
