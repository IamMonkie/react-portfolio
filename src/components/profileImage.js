import React, { Component } from "react";
import { Image } from "react-bootstrap";
import photo_aboutMe from "./images/photo_aboutMe.jpg";

// --------------------------------------------------------
// styling
const AboutPhotoStyle = {
  display: "flex",
  marginRight: "10px",
  marginBottom: "10px",
  width: "250px",
  float: "left"
};
// --------------------------------------------------------

class ProfileImage extends Component {
  render() {
    return (
      <div>
        <Image
          src={photo_aboutMe}
          className="About-Photo"
          alt="photo_aboutMe"
          style={AboutPhotoStyle}
        />
      </div>
    );
  }
}

export default ProfileImage;
