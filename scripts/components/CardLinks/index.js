'use client';

import ChevronLink from '../partials/ChevronLink';
function CardLinks({
  cardData
}) {
  const LinkCard = ({
    title,
    links
  }) => /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-card p-6 shadow-card"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg text-primary font-serif mb-6"
  }, title), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-4"
  }, links.map(link => /*#__PURE__*/React.createElement("li", {
    key: link.href
  }, /*#__PURE__*/React.createElement(ChevronLink, {
    href: link.href
  }, link.text)))));
  return /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto py-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  }, /*#__PURE__*/React.createElement(LinkCard, cardData.practices), /*#__PURE__*/React.createElement(LinkCard, cardData.services), /*#__PURE__*/React.createElement(LinkCard, cardData.divisions)));
}
export default CardLinks;