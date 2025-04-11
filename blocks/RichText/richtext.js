export default function decorate(block) {
  console.log('Block:', block);
  console.log('Block dataset:', block.dataset);
  console.log('Inner HTML:', block.innerHTML);

  block.innerHTML = `
      <div id="richtext" class="richtext">
        <p>Loading React component...</p>
      </div>
    `;

  const data = {
    title: 'Title',
    description: 'Description',
    button: 'Button',
    buttonLink: 'ButtonLink',
    button2: 'Button2',
    buttonLink2: 'ButtonLink2',
    button3: 'Button3',
    buttonLink3: 'ButtonLink3',
  }

  const moduleScript = document.createElement('script');
  moduleScript.type = 'module';
  moduleScript.textContent = `
  import Component from '../scripts/components/RichText/index.js';

  const root = document.getElementById('richtext');
  const element = React.createElement(Component, ${JSON.stringify(data)});
  ReactDOM.render(element, root);
`;
  document.body.appendChild(moduleScript);
}
