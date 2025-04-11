'use client';

const Stat = ({
  value,
  label,
  showBorder = false,
  showBorderLg = false
}) => /*#__PURE__*/React.createElement("div", {
  className: `text-center py-10 ${showBorder ? 'border-r' : ''} ${showBorderLg ? 'lg:border-r' : ''} border-gray-200`
}, /*#__PURE__*/React.createElement("div", {
  className: "text-2xl lg:text-3xl text-primary font-serif"
}, /*#__PURE__*/React.createElement("div", {
})), /*#__PURE__*/React.createElement("div", {
  className: "text-sm lg:text-md"
}, label));
function StatsSection({
  stats = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto py-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-card bg-background shadow-card py-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 lg:grid-cols-4 gap-y-6"
  }, stats.map((stat, index) => /*#__PURE__*/React.createElement(Stat, {
    key: index,
    value: stat.value,
    label: stat.label,
    showBorder: index < stats.length - 1,
    showBorderLg: index < stats.length - 1 && index !== 1
  })))));
}
export default StatsSection;