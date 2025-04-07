import React from 'react';
import ReactDOM from 'react-dom/client';
import TestComponent from '../blocks/testcomponent/testcomponent-react';
import decorate from '../blocks/testcomponent/testcomponent';

const App = () => <div>Hello, Vite + React!</div>;

const block = document.querySelector('#root');
decorate(block);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TestComponent />);
