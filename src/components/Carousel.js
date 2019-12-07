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
// --------------------------------------------------------

class AppCarousel extends Component {
  render() {
    return (
      <Carousel
        style={carouselStyling}
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
          <a href="https://streamer.netlify.com" target="_blank">
            <h5>Go to Deployed Site</h5>
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
        </div>
      </Carousel>
    );
  }
}

export default AppCarousel;
