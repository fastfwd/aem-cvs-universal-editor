export default function decorate(block) {
  console.log('Block:', block);
  console.log('Block dataset:', block.dataset);
  console.log('Inner HTML:', block.innerHTML);

  block.innerHTML = `
      <div id="textandimage" class="textandimage">
        <p>Loading React component...</p>
      </div>
    `;

  // Load React
  const reactScript = document.createElement('script');
  reactScript.src = 'https://unpkg.com/react@18/umd/react.production.min.js';

  const data = {
    image: 'https://www.cvsukltd.co.uk/contentassets/01b466e1b6f64cdeb53ced6299dcb80f/west-mount-vet---huddersfield--consultation-room.jpg',
    title: 'Title',
    description: 'Description',
    button: 'Button',
    buttonLink: "Link",
  }

  const moduleScript = document.createElement('script');
  moduleScript.type = 'module';
  moduleScript.textContent = `
  import Component from '../scripts/components/TextAndImage/index.js';

  const root = document.getElementById('textandimage');
  const element = React.createElement(Component, ${JSON.stringify(data)});
  ReactDOM.render(element, root);
`;
  document.body.appendChild(moduleScript);
}