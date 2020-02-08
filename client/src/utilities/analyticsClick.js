import React from "react";
import ReactGA from "react-ga";

const ClickHandler = () => {
  ReactGA.event({
    category: "Button",
    action: "Button clicked"
  });
};

export default analyticsButtonClick;
