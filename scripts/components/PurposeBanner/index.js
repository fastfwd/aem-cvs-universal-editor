'use client';

import React from 'react';
import Button from '../partials/Button';
function PurposeBanner({
  title = "",
  description = "",
  buttonText = "",
  buttonLink = "",
  backgroundImage = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 rounded-card overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative h-64 md:h-full min-h-[320px]"
  }, /*#__PURE__*/React.createElement("img", {
    src: backgroundImage,
    alt: title,
    className: "object-cover absolute inset-0 w-full h-full"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-primary text-white py-20 px-8 flex flex-col justify-center text-center bg-[url('/assets/cta-background.svg')] bg-cover bg-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl lg:text-2xl font-serif mb-6"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "mb-8 lg:px-10"
  }, description), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    href: buttonLink,
    hasChevron: true,
    size: "large"
  }, buttonText))))));
}
export default PurposeBanner;