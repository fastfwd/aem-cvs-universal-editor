export default function decorate(block) {
  console.log('Block:', block);
  console.log('Block dataset:', block.dataset);
  console.log('Inner HTML:', block.innerHTML);

  const titleElement = block.querySelector('[data-aue-prop="title"]');
  const subtitleElement = block.querySelector('[data-aue-prop="subtitle"]');

  const title = titleElement ? titleElement.textContent : 'Hello, React!';
  const subtitle = subtitleElement ? subtitleElement.textContent : 'This is a dynamic example with an image and button.';

  console.log('title', title);
  console.log('subtitle', subtitle);

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

  const tailWindScript = document.createElement('script');
  tailWindScript.src = 'https://cdn.tailwindcss.com';

  // After ReactDOM is loaded, dynamically import the module and render
  reactDomScript.onload = () => {
    const moduleScript = document.createElement('script');
    moduleScript.type = 'module';
    moduleScript.textContent = `
      import TestComponent from '/content/cvs-aem.resource/scripts/testcomponent-react2.js';

      const root = document.getElementById('my-partial');
      const element = React.createElement(TestComponent, {
        title: '${title}',
        description: '${subtitle}',
        buttonText: 'Click Me',
        buttonLink: '/somewhere',
        backgroundImage: 'https://www.cvsukltd.co.uk/globalassets/practice-images/gourleys-ashton-about-us.jpg' // Adjust the image path
      });
      ReactDOM.render(element, root);
    `;
    document.body.appendChild(moduleScript);
  };

  // Chain the script loading
  tailWindScript.onload = () => document.body.appendChild(reactScript);
  reactScript.onload = () => document.body.appendChild(reactDomScript);
  document.body.appendChild(tailWindScript);
}
