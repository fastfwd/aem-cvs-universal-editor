export default function decorate(block) {
  console.log('Block:', block);
  console.log('Block dataset:', block.dataset);
  console.log('Inner HTML:', block.innerHTML);

  block.innerHTML = `
    <div id="threecolumncards" class="threecolumncards">
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
    const data = {
      cards: [
        {
          title: 'Title',
          description: 'Description',
          link: 'Link',
          linkText: "View Template",
        },
        {
          title: 'Title2',
          description: 'Description2',
          link: 'Link',
          linkText: "View Template",
        },
        {
          title: 'Title3',
          description: 'Description3',
          link: 'Link',
          linkText: "View Template",
        }
      ]
    }

    const moduleScript = document.createElement('script');
    moduleScript.type = 'module';
    moduleScript.textContent = `
      import Component from '../scripts/components/ThreeColumnCards/index.js';

      const root = document.getElementById('threecolumncards');
      const element = React.createElement(Component, ${JSON.stringify(data)});
      ReactDOM.render(element, root);
    `;
    document.body.appendChild(moduleScript);
  };

  // Chain the script loading
  tailWindScript.onload = () => document.body.appendChild(reactScript);
  reactScript.onload = () => document.body.appendChild(reactDomScript);
  document.body.appendChild(tailWindScript);
}