/* eslint-disable no-unused-vars */
/* eslint-disable import/no-self-import */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import ReactDOM from 'react-dom/client';
import MyReactComponent from './testcomponent';

export default function decorate(block) {
//   const props = {
//     message: '',
//   };

  block.innerHTML = ''; // Clear existing content

  const root = ReactDOM.createRoot(block);
  root.render(<MyReactComponent message={'Testing'} />);
}
