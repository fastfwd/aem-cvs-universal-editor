// TestComponent.js
import React from 'https://esm.sh/react@18';
import Image from './Image.js'; // Import the Image component
import Button from './Button.js'; // Import the Button component

export default function TestComponent({
  title = '',
  description = '',
  buttonText = '',
  buttonLink = '',
  backgroundImage = ''
}) {
  return React.createElement(
    'div',
    { className: 'bg-primary relative z-0' },
    React.createElement(
      'div',
      { className: 'absolute inset-0 overflow-hidden' },
      React.createElement(Image, {
        src: backgroundImage,
        alt: 'Background Image',
        fill: true,
        className: 'object-cover w-full h-full',
        priority: true,
        quality: 85
      }),
      React.createElement('div', {
        className: 'absolute inset-0 bg-primary/80'
      })
    ),
    React.createElement(
      'div',
      { className: 'container mx-auto relative z-10 py-24 text-center text-white' },
      React.createElement(
        'h2',
        { className: 'text-xl lg:text-3xl font-serif max-w-4xl mx-auto mb-6' },
        title
      ),
      React.createElement(
        'p',
        { className: 'mb-8 max-w-2xl mx-auto' },
        description
      ),
      React.createElement(
        Button,
        {
          href: buttonLink,
          variant: 'primary', // Change to secondary if you prefer
          size: 'large',
          hasChevron: true
        },
        buttonText
      )
    )
  );
}
