// import React from 'react';
import { createRoot } from 'react-dom/client';
import decorate from '../blocks/testcomponent/testcomponent';
import TestComponent from "./testcomponent-react";

// const App = () => <div>Hello, Vite + React!</div>;

const block = document.querySelector('#root');
decorate(block);

// const root = createRoot(document.getElementById('root'));
// root.render(<TestComponent />);