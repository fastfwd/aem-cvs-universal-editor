import React from 'https://esm.sh/react@18';
import ReactDOM from 'https://esm.sh/react-dom@18';

export default function TestComponent({ message }) {
  return React.createElement(
    "div",
    { className: "testcomponent" },
    "Hello from React! Message: ",
    message
  );
};