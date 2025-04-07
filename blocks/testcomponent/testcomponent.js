import React from 'react';
import { createRoot } from 'react-dom/client';
// import { TestComponent } from '../../dist/testcomponent-react.js';
import TestComponent from './testcomponent-react.js';

export default function decorate(block) {
  console.log('Block:', block);
  console.log('Block dataset:', block.dataset);
  console.log('Inner HTML:', block.innerHTML);

  // const root = ReactDOM.createRoot(block);
  const root = createRoot(document.getElementById('root'));
  root.render(React.createElement("div", {
      className: "testcomponent"
    }, "Hello from React! Message: ", "message"));
}
