function ChevronLink({
  href,
  children,
  className = '',
  color,
  fontWeight
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    className: `hover:text-primary transition-colors duration-200 flex text-sm items-center group ${color || ''} ${fontWeight || ''} ${className}`
  }, children, /*#__PURE__*/React.createElement("svg", {
    className: "w-3 h-3 ml-2 transition-transform duration-200 group-hover:translate-x-1",
    viewBox: "0 0 7 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.84434 0.229105C0.984966 0.088655 1.17559 0.00976562 1.37434 0.00976562C1.57309 0.00976562 1.76371 0.088655 1.90434 0.229105L6.15434 4.47911C6.29479 4.61973 6.37368 4.81036 6.37368 5.00911C6.37368 5.20786 6.29479 5.39848 6.15434 5.53911L1.90434 9.78911C1.76216 9.92159 1.57412 9.99371 1.37982 9.99028C1.18552 9.98685 1.00013 9.90814 0.862719 9.77073C0.725306 9.63331 0.646593 9.44793 0.643165 9.25363C0.639736 9.05933 0.71186 8.87128 0.84434 8.72911L4.56434 5.00911L0.84434 1.28911C0.70389 1.14848 0.625 0.957856 0.625 0.759106C0.625 0.560355 0.70389 0.369731 0.84434 0.229105Z",
    fill: "currentColor"
  })));
}
export default ChevronLink;