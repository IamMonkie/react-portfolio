import React, { Component } from "react";
import { Row } from "react-bootstrap";

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
                <strong>Technical Skills</strong>
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
              <p>Heroku, Git, Github, Netlify</p>
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
                Compositing ,Video Editing, Photoshop, Illustrator, Adobe XD
              </p>
              <p>
                <strong>Drafting: </strong>
              </p>
              <p>
                AutoCAD, AutoCAD Electrical, Microstation V8i, Solidworks,
                Inventor, Pro-Engineer, hand drafting
              </p>
              {/*  
              <p>
                <p>
                  <h2>PROJECTS</h2>
                </p>
                <p>
                  <strong>Streamer</strong>
                </p>
                <p>
                  <a href="https://streamer.netlify.com" target="_blank">
                    Go To Deployed Site
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/IamMonkie/streamer"
                    target="_blank"
                  >
                    View Project on Github
                  </a>
                </p>

                <p>
                  ● <strong>Scope: </strong>Streamer is a search aggregator
                  which allows users to search multiple streaming services for
                  movies and tv shows from a single location.
                </p>

                <p>
                  ● <strong>Core Responsibilities:</strong> navbar component,
                  database setup, and CSS styling
                </p>

                <p>
                  ● <strong>Technologies:</strong> React, firebase, myCSS
                  framework, Axios, NodeJS, MongoDB, Mongoose, Utelly API, OMDB
                  API, Adobe Photoshop
                </p>

                <br></br>

                <p>
                  <p>
                    <strong>Birdbrain</strong>
                  </p>
                  <p>
                    <a href="https://bird-brain.netlify.com" target="_blank">
                      Go to Deployed Site
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/IamMonkie/clicky-game"
                      target="_blank"
                    >
                      View Project on Github
                    </a>
                  </p>

                  <p>
                    ● <strong>Scope: </strong> Birdbrain is a memory game where
                    the objective is to select each bird only once.
                  </p>

                  <p>
                    ● <strong>Core Responsibilities: </strong>Responsible for
                    entire application
                  </p>

                  <p>
                    ● <strong>Technologies: </strong>React, material ui,
                    Autodesk Sketchbook Pro
                  </p>
                </p>

                <br></br>
                <p>
                  <p>
                    <strong>Beetstrology</strong>
                  </p>
                  <p>
                    <a
                      href="https://energy-extractor.netlify.com/"
                      target="_blank"
                    >
                      <h5>Go to Deployed Site</h5>
                    </a>
                    <a
                      href="https://github.com/IamMonkie/crystal-collector"
                      target="_blank"
                    >
                      <h5>View Project on Github</h5>
                    </a>
                  </p>
                  <p>
                    ● <strong>Scope: </strong>A fun app combining giving you
                    your daily horoscope, suggesting 3 IPA Beers based on the
                    Horoscope, and 1 extra as a "Wildcard" option.
                  </p>

                  <p>
                    ● <strong>Core Responsibilities: </strong>Front end HTML,
                    CSS
                  </p>

                  <p>
                    ● <strong>Technologies: </strong>HTML5, CSS3, Javascript,
                    jQuery, Bootstrap, Firebase, Adobe Photoshop
                  </p>
                </p>
              </p>

              <br></br>
              <p>
                <p>
                  <strong>Birdbrain</strong>
                </p>
                <p>
                  <a href="https://bird-brain.netlify.com" target="_blank">
                    Go to Deployed Site
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/IamMonkie/clicky-game"
                    target="_blank"
                  >
                    View Project on Github
                  </a>
                </p>

                <p>
                  ● <strong>Scope: </strong> Birdbrain is a memory game where
                  the objective is to select each bird only once.
                </p>

                <p>
                  ● <strong>Core Responsibilities: </strong>Responsible for
                  entire application
                </p>

                <p>
                  ● <strong>Technologies: </strong>React, material ui, Autodesk
                  Sketchbook Pro
                </p>
              </p>

              <p>
                <p>
                  <strong>Birdbrain</strong>
                </p>
                <p>
                  <a href="https://bird-brain.netlify.com" target="_blank">
                    Go to Deployed Site
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/IamMonkie/clicky-game"
                    target="_blank"
                  >
                    View Project on Github
                  </a>
                </p>

                <p>
                  ● <strong>Scope: </strong> Birdbrain is a memory game where
                  the objective is to select each bird only once.
                </p>

                <p>
                  ● <strong>Core Responsibilities: </strong>Responsible for
                  entire application
                </p>

                <p>
                  ● <strong>Technologies: </strong>React, material ui, Autodesk
                  Sketchbook Pro
                </p>
              </p>
              */}
              <p>
                <h2>Experience: </h2>
              </p>
              <ul>
                <p>
                  <li>
                    Electrical CAD Drafter/ Designer, Powersecure; Durham, NC.
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
                    Microsoft commercial "Productivity Future Vision".
                    Visualizing how some emerging technologies may look 5-10
                    years from now.
                    <Row>Role: modeling, animation, lighting, rendering</Row>
                    <Row>
                      {"Video: "}&#160;
                      <a
                        href="
                        https://www.youtube.com/watch?v=w-tFdreZB94&feature=youtu.be"
                        target="_blank"
                      >
                        Productivity Future Vision
                      </a>
                    </Row>
                  </li>
                </p>
                <p>
                  <li>
                    Short Film: "Monty and the Runaway Furnace";
                    <Row>
                      Role: modeling, texturing, lighting, set dressing,
                      rendering
                    </Row>
                    <Row>
                      {"Website: "}&#160;
                      <a
                        href="http://www.montyandthefurnace.com/"
                        target="_blank"
                      >
                        http://www.montyandthefurnace.com/
                      </a>
                    </Row>
                    <Row>
                      {"IMDB: "}&#160;
                      <a
                        href="https://www.imdb.com/title/tt5109178/"
                        target="_blank"
                      >
                        https://www.imdb.com/title/tt5109178/
                      </a>
                    </Row>
                    <Row>
                      {"Amazon: "}&#160;
                      <a
                        href="https://www.amazon.com/gp/product/B07RXMHQKH?pf_rd_p=183f5289-9dc0-416f-942e-e8f213ef368b&pf_rd_r=ERQ3YQ20Y0YVMDCW3P1X"
                        target="_blank"
                      >
                        Amazon Video
                      </a>
                    </Row>
                  </li>
                </p>
                <p>
                  <li>
                    Advanced Support Agent, TurboSquid; New Orleans, LA. --
                    (2010-2012)
                    <Row>
                      Assisting customers with any issues they may be having. I
                      frequently helped people overcome problems they are having
                      in Maya, 3ds Max, and C4D. Common issues may have included
                      mesh, texture, animation, rendering problems, and file
                      format conversions.
                    </Row>
                  </li>
                </p>
              </ul>
              <p>
                <h2>Education: </h2>
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
