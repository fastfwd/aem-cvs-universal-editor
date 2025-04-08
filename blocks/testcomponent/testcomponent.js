export default function decorate(block) {
  block.innerHTML = `
    <div id="my-partial" class="my-partial">
      <p>Loading React component...</p>
    </div>
  `;

  // Load React
  const reactScript = document.createElement('script');
  reactScript.src = 'https://unpkg.com/react@18/umd/react.production.min.js';

  // Load ReactDOM
  const reactDomScript = document.createElement('script');
  reactDomScript.src = 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';

  // After ReactDOM is loaded, dynamically import the module and render
  reactDomScript.onload = () => {
    const moduleScript = document.createElement('script');
    moduleScript.type = 'module';
    moduleScript.textContent = `
      import TestComponent from '/content/cvs-aem.resource/scripts/testcomponent-react.js';

      const root = document.getElementById('my-partial');
      const element = React.createElement(TestComponent, { message: 'This is from props!' });
      ReactDOM.render(element, root);
    `;
    document.body.appendChild(moduleScript);
  };

  // Chain the script loading
  reactScript.onload = () => document.body.appendChild(reactDomScript);
  document.body.appendChild(reactScript);
}
