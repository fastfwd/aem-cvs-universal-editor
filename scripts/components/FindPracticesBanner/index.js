'use client';

import Button from '../partials/Button/index.js';
function FindPracticesBanner({
  title = "",
  description = "",
  buttonText = "",
  buttonLink = "",
  backgroundImage = "",
  variant = "grey"
}) {
  const curveColor = variant === "white" ? "white" : "grey";
  return /*#__PURE__*/React.createElement("div", {
    className: "relative max-w-[1600px] mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 right-0 w-full z-10 hidden md:block"
  }, /*#__PURE__*/React.createElement("img", {
    src: `/assets/cta-${curveColor}-top.svg`,
    alt: "",
    className: "w-full"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-primary relative z-[1] md:aspect-[2.24/1]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: backgroundImage,
    alt: "Background",
    className: "object-cover w-full h-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-primary/80"
  })), /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto relative z-10 h-full flex items-center justify-center text-center text-white py-16 md:py-0"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl lg:text-3xl font-serif mx-auto mb-6"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "mb-8 max-w-2xl mx-auto"
  }, description), /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    href: buttonLink,
    hasChevron: true,
    size: "large"
  }, buttonText)))), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-0 right-0 w-full z-10 hidden md:block"
  }, /*#__PURE__*/React.createElement("img", {
    src: `/assets/cta-${curveColor}-bottom.svg`,
    alt: "",
    className: "w-full"
  })));
}
export default FindPracticesBanner;