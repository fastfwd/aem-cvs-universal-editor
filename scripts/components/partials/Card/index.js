'use client';

import Button from '../Button';
function Card({
  title,
  description,
  link,
  linkText = "View Template",
  buttonVariant = "primary",
  hasChevron = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col h-full bg-background shadow-card rounded-card p-6 hover:shadow-card-hover transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-grow"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-serif text-primary mb-2"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-text-secondary text-base mb-4"
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: "mt-auto"
  }, /*#__PURE__*/React.createElement(Button, {
    href: link,
    variant: buttonVariant,
    hasChevron: hasChevron,
    size: "small"
  }, linkText)));
}
export default Card;