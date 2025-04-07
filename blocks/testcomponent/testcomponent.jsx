import React from 'react';
import ReactDOM from 'react-dom/client';
import TestComponent from './testcomponent-react.jsx';

export default function decorate(block) {
  console.log('Block:', block);
  console.log('Block dataset:', block.dataset);
  console.log('Inner HTML:', block.innerHTML);

  const root = ReactDOM.createRoot(block);
  root.render(<TestComponent message={''}/>);
}
