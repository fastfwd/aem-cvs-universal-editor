import React from 'react';
import ReactDOM from 'react-dom/client';
import TestComponent from '../blocks/testcomponent/testcomponent-react';

const App = () => <div>Hello, Vite + React!</div>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TestComponent />);