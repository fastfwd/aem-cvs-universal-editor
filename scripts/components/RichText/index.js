'use client';

import Button from "../partials/Button/index.js";
function RichText({
  title = "",
  description = "",
  button = "",
  buttonLink = "",
  button2 = "",
  buttonLink2 = "",
  button3 = "",
  buttonLink3 = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rich-text bg-white py-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-xl text-primary font-serif mb-8"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-5 text-primary font-sans mb-8"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-md"
  }, description), /*#__PURE__*/React.createElement("p", {
    className: "text-base"
  }, description), /*#__PURE__*/React.createElement("p", {
    className: "text-footnote"
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4"
  }, button && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: buttonLink
  }, button), button2 && /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: buttonLink2
  }, button2), button3 && /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    href: buttonLink3
  }, button3))));
}
export default RichText;