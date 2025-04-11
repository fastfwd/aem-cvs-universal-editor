'use client';

import React from 'react';
import Button from "../partials/Button";
function TextAndImage({
  image = "",
  title = "",
  description = "",
  button = "",
  buttonLink = "",
  // Added buttonLink prop
  reverse = false,
  mobileImageTop = true
}) {
  const textContent = /*#__PURE__*/React.createElement("div", {
    className: "text-left align-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg text-primary font-serif mb-8"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-primary font-sans text-sm mb-8"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: buttonLink
  }, button)));
  const imageContent = /*#__PURE__*/React.createElement("div", {
    className: "text-left relative h-64 md:h-[400px]"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    className: "object-cover rounded-lg absolute inset-0 w-full h-full"
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "text-and-image"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto py-10 lg:py-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-8"
  }, reverse ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `${mobileImageTop ? 'order-1' : 'order-2'} md:order-2`
  }, imageContent), /*#__PURE__*/React.createElement("div", {
    className: `${mobileImageTop ? 'order-2' : 'order-1'} md:order-1`
  }, textContent)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `${mobileImageTop ? 'order-1' : 'order-2'} md:order-1`
  }, imageContent), /*#__PURE__*/React.createElement("div", {
    className: `${mobileImageTop ? 'order-2' : 'order-1'} md:order-2`
  }, textContent)))));
}
export default TextAndImage;