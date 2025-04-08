// Button.js
import React from 'https://esm.sh/react@18';

export default function Button({
  href = '#',
  variant = 'primary',
  size = 'medium',
  hasChevron = false,
  children
}) {
  // Default classes for variants and size
  const variantClass = variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-black';
  const sizeClass = size === 'large' ? 'px-6 py-3 text-lg' : 'px-4 py-2 text-sm';

  // Conditional chevron icon
  const chevron = hasChevron ? '→' : '';

  return React.createElement(
    'a',
    {
      href,
      className: `inline-flex items-center justify-center ${variantClass} ${sizeClass} rounded-full hover:bg-opacity-80 transition ease-in-out duration-200`
    },
    // Button children
    React.createElement('span', { className: 'text-white' }, children),
    // Add the chevron if required
    chevron && React.createElement('span', { className: 'ml-2' }, chevron)
  );
}
