import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Carousel,
  onChange,
  onClickItem,
  onClickThumb
} from "react-responsive-carousel";
import { Image, Row, Col, Container } from "react-bootstrap";

import beerstrologyPreview from "./images/beerstrologyPreview.png";
import trainPreview from "./images/trainPreview.png";
import crystalPreview from "./images/crystalPreview.png";
import giphyPreview from "./images/giphyPreview.png";
import birdBrainPreview from "./images/birdBrainPreview.png";
import streamerPreview from "./images/streamerPreview.png";

// --------------------------------------------------------
// styling
const imageStyling = {
  // margin: "10px"
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
      >
        <div>
          <img
            src={beerstrologyPreview}
            className="beerstrologyImg"
            alt="beerstrologyImg"
            style={imageStyling}
            showThumbs={true}
          />
        </div>

        <div>
          <img
            src={trainPreview}
            className="trainImg"
            alt="trainImg"
            style={imageStyling}
          />{" "}
        </div>

        <div>
          <img
            src={crystalPreview}
            className="crystalImg"
            alt="crystalImg"
            style={imageStyling}
          />
        </div>

        <div>
          <img
            src={giphyPreview}
            className="giphyImg"
            alt="giphyImg"
            style={imageStyling}
          />
        </div>

        <div>
          <img
            src={birdBrainPreview}
            className="birdBrainImg"
            alt="birdBrainImg"
            style={imageStyling}
          />
        </div>
        {
          <div>
            <img
              src={streamerPreview}
              className="streamerImg"
              alt="streamerImg"
              style={imageStyling}
            />
          </div>
        }
      </Carousel>
    );
  }
}

export default AppCarousel;
