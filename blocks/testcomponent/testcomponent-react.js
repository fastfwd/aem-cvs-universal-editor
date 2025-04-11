import React from 'react';
export default function TestComponent(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "" : _ref$title,
    _ref$description = _ref.description,
    description = _ref$description === void 0 ? "" : _ref$description,
    _ref$buttonText = _ref.buttonText,
    buttonText = _ref$buttonText === void 0 ? "" : _ref$buttonText,
    _ref$buttonLink = _ref.buttonLink,
    buttonLink = _ref$buttonLink === void 0 ? "" : _ref$buttonLink,
    _ref$backgroundImage = _ref.backgroundImage,
    backgroundImage = _ref$backgroundImage === void 0 ? "" : _ref$backgroundImage;
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-primary relative z-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 overflow-hidden"
  }, /*#__PURE__*/React.createElement(Image, {
    src: backgroundImage,
    alt: "Background",
    fill: true,
    className: "object-cover",
    priority: false,
    quality: 85
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-primary/80"
  })), /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto relative z-10 py-24 text-center text-white"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl lg:text-3xl font-serif max-w-4xl mx-auto mb-6"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "mb-8 max-w-2xl mx-auto"
  }, description), /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    href: buttonLink,
    hasChevron: true,
    size: "large"
  }, buttonText)));
}
