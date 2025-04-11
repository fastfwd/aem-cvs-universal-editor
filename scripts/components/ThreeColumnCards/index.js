'use client';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import Card from '../partials/Card';
function ThreeColumnCards({
  cards = [],
  negativeTopMargin = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `container mx-auto pt-8 relative z-20 ${negativeTopMargin ? '-mt-40' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  }, cards.map((card, index) => /*#__PURE__*/React.createElement(Card, _extends({
    key: index
  }, card)))));
}
export default ThreeColumnCards;