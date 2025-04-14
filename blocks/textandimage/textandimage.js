import { splitAemPath } from "../../scripts/utils/json.js";

export default function decorate(block) {
  const { basePath, jcrPath } = splitAemPath(block.dataset.aueResource);
  if (!basePath || !jcrPath) { return; }

  block.innerHTML = `
      <div id="textandimage" class="textandimage">
        <p>Loading React component...</p>
      </div>
    `;

  fetch(`${basePath}${jcrPath}.json`)
    .then(response => response.json())
    .then(model => {
      const data = {
        image: model.backgroundImage ?? 'https://www.cvsukltd.co.uk/contentassets/01b466e1b6f64cdeb53ced6299dcb80f/west-mount-vet---huddersfield--consultation-room.jpg',
        title: model.title ?? 'Title',
        description: model.description ?? 'Description',
        button: model.buttonText ?? 'Button',
        buttonLink: model.buttonLink ?? 'Link'
      }

      const moduleScript = document.createElement('script');
      moduleScript.type = 'module';
      moduleScript.textContent = `
  import Component from '/content/cvs-aem.resource/scripts/components/TextAndImage/index.js';

  const root = document.getElementById('textandimage');
  const element = React.createElement(Component, ${JSON.stringify(data)});
  ReactDOM.render(element, root);
`;
      document.body.appendChild(moduleScript);
    }) // Log the data to the console
    .catch(error => console.error('Error fetching the content:', error));
}