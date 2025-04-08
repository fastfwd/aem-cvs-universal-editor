// Image.js
import React from 'https://esm.sh/react@18';

export default function Image({ src, alt, fill = false, className = '', priority = false, quality = 75 }) {
  return React.createElement(
    'img',
    {
      src,
      alt,
      className: `${className} ${fill ? 'object-cover' : ''}`,
      loading: priority ? 'eager' : 'lazy',
      quality, // Assuming that you have a way to handle the quality in your build tool or image renderer
      style: fill ? { objectFit: 'cover', width: '100%', height: '100%' } : {},
    }
  );
}
