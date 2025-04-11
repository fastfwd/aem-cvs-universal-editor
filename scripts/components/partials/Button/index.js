'use client';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'small',
  children,
  hasChevron = false,
  className = '',
  href,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center px-6 rounded-full text-sm transition-colors";
  const chevronStyles = hasChevron ? "pr-12 bg-no-repeat bg-[right_24px_center]" : "";
  const sizeStyles = {
    small: "py-2",
    medium: "py-3",
    large: "py-4"
  };
  const variants = {
    primary: `${baseStyles} ${chevronStyles} bg-primary hover:bg-primary-hover text-white ${hasChevron ? 'bg-chevron-white' : ''}`,
    secondary: `${baseStyles} ${chevronStyles} bg-secondary hover:bg-secondary-hover text-white ${hasChevron ? 'bg-chevron-white' : ''}`,
    outline: `${baseStyles} ${chevronStyles} bg-background hover:bg-gray-50 text-primary border-2 border-primary ${hasChevron ? 'bg-chevron-primary' : ''}`,
    white: `${baseStyles} ${chevronStyles} bg-white hover:bg-gray-50 text-primary border-2 border-primary ${hasChevron ? 'bg-chevron-primary' : ''}`
  };
  const classes = `${variants[variant]} ${sizeStyles[size]} ${className}`;
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: classes
    }, props), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes
  }, props), children);
}
export default Button;