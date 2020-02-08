import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Carousel,
  onChange,
  onClickItem,
  onClickThumb
} from "react-responsive-carousel";
// import { Image, Row, Col, Container } from "react-bootstrap";

import beerstrologyPreview from "./images/beerstrologyPreview.png";
import trainPreview from "./images/trainPreview.png";
import crystalPreview from "./images/crystalPreview.png";
import giphyPreview from "./images/giphyPreview.png";
import birdBrainPreview from "./images/birdBrainPreview.png";
import streamerPreview from "./images/streamerPreview.png";

// --------------------------------------------------------
// styling
const carouselStyling = {
  borderRadius: "10%"
};
const imageStyling = {
  // margin: "10px"
};

const linkStyle = {};

const descriptionStyle = {
  // color: "white"
};
// --------------------------------------------------------

class AppCarousel extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={3000}
        stopOnHover={true}
        showIndicators={false}
      >
        <div>
          <img
            src={streamerPreview}
            className="streamerImg"
            alt="streamerImg"
            style={imageStyling}
          />

          <div class="description" style={descriptionStyle}>
            <p>
              <h5>
                <strong>Description</strong>
              </h5>
            </p>
            <p>
              <strong>Scope:</strong> Streamer is a search aggregator which
              allows users to search multiple streaming services for movies and
              tv shows from a single location.
            </p>
            <p>
              <strong>Core Responsibilities:</strong> navbar component, database
              setup, and CSS styling
            </p>
            <p>
              <strong>Technologies:</strong> React, firebase, myCSS framework,
              Axios, NodeJS, MongoDB, Mongoose, Utelly API, OMDB API, Adobe
              Photoshop
            </p>
          </div>

          <a href="https://streamer.netlify.com" target="_blank">
            <h5>Go to Deployed Site</h5>
          </a>
          <a href="https://github.com/IamMonkie/streamer" target="_blank">
            <h5>View Project on Github</h5>
          </a>
        </div>

        <div>
          <img
            src={birdBrainPreview}
            className="birdBrainImg"
            alt="birdBrainImg"
            style={imageStyling}
          />
          <a href="https://bird-brain.netlify.com" target="_blank">
            <h5>Go to Deployed Site</h5>
          </a>
          <a href="https://github.com/IamMonkie/clicky-game" target="_blank">
            <h5>View Project on Github</h5>
          </a>
        </div>

        <div>
          <img
            src={crystalPreview}
            className="crystalImg"
            alt="crystalImg"
            style={imageStyling}
          />
          <a href="https://energy-extractor.netlify.com/" target="_blank">
            <h5>Go to Deployed Site</h5>
          </a>
          <a
            href="https://github.com/IamMonkie/crystal-collector"
            target="_blank"
          >
            <h5>View Project on Github</h5>
          </a>
        </div>

        <div>
          <img
            src={beerstrologyPreview}
            className="beerstrologyImg"
            alt="beerstrologyImg"
            style={imageStyling}
            showThumbs={true}
          />
          <a href="https://iammonkie.github.io/Beerstrology/" target="_blank">
            <h5>Go to Deployed Site</h5>
          </a>
          <a href="https://github.com/IamMonkie/Beerstrology" target="_blank">
            <h5>View Project on Github</h5>
          </a>
        </div>

        <div>
          <img
            src={trainPreview}
            className="trainImg"
            alt="trainImg"
            style={imageStyling}
          />
          <a
            href="https://iammonkie.github.io/Train-Scheduler/"
            target="_blank"
          >
            <h5>Go to Deployed Site</h5>
          </a>
          <a
            href="https://github.com/IamMonkie/Train-Scheduler"
            target="_blank"
          >
            <h5>View Project on Github</h5>
          </a>
        </div>

        <div>
          <img
            src={giphyPreview}
            className="giphyImg"
            alt="giphyImg"
            style={imageStyling}
          />
          <a href="https://iammonkie.github.io/Giphy-API" target="_blank">
            <h5>Go to Deployed Site</h5>
          </a>
          <a href="https://github.com/IamMonkie/Giphy-API" target="_blank">
            <h5>View Project on Github</h5>
          </a>
        </div>
      </Carousel>
    );
  }
}

export default AppCarousel;
