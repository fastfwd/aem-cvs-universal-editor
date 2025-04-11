'use client';

import React from 'react';
import Button from '../partials/Button';
function HeroBanner({
  title = "",
  description = "",
  buttonText = "",
  buttonLink = "",
  backgroundImage = "",
  variant = ""
}) {
  const curveColor = variant === "grey" ? "grey" : "white";
  return /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pb-48 pt-24 lg:pt-48 bg-cover bg-center",
    style: {
      backgroundImage: `url('${backgroundImage}')`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-xl"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl lg:text-4xl text-primary font-serif mb-5"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-md mb-5"
  }, description), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    to: buttonLink,
    hasChevron: true,
    size: "large"
  }, buttonText)))), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-0 right-0 w-full"
  }, /*#__PURE__*/React.createElement("img", {
    src: `/assets/hero-${curveColor}.svg`,
    alt: "",
    className: "w-full"
  })));
}
export default HeroBanner;