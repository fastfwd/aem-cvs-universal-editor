import { splitAemPath } from "../../scripts/utils/json.js";

export default function decorate(block) {
  const { basePath, jcrPath } = splitAemPath(block.dataset.aueResource);
  if (!basePath || !jcrPath) { return; }

  block.innerHTML = `
      <div id="herobanner" class="herobanner">
        <p>Loading React component...</p>
      </div>
    `;

  fetch(`${basePath}${jcrPath}.json`)
    .then(response => response.json())
    .then(model => {
      const data = {
        title: model.title ?? 'Title',
        description: model.description ?? 'Description',
        buttonText: model.buttonText ?? 'Button',
        buttonLink: model.buttonLink ?? 'Link',
        backgroundImage: model.backgroundImage ?? "https://www.cvsukltd.co.uk/globalassets/practice-images/gourleys-ashton-about-us.jpg",
        variant: model.variant ?? "grey"
      }

      const moduleScript = document.createElement('script');
      moduleScript.type = 'module';
      moduleScript.textContent = `
  import Component from '/content/cvs-aem.resource/scripts/components/HeroBanner/index.js';

  const root = document.getElementById('herobanner');
  const element = React.createElement(Component, ${JSON.stringify(data)});
  ReactDOM.render(element, root);
`;
      document.body.appendChild(moduleScript);
    }) // Log the data to the console
    .catch(error => console.error('Error fetching the content:', error));
}
