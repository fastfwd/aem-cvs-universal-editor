import { splitAemPath } from "../../scripts/utils/json.js";

export default function decorate(block) {
  const { basePath, jcrPath } = splitAemPath(block.dataset.aueResource);
  if (!basePath || !jcrPath) { return; }

  block.innerHTML = `
      <div id="statssection" class="statssection">
        <p>Loading React component...</p>
      </div>
    `;

  fetch(`${basePath}${jcrPath}.json`)
    .then(response => response.json())
    .then(model => {
      const data = {
        stats: [
          { value: model.value1 ?? 'Value 1', label:  model.stat1 ?? 'Stat 1' },
          { value: model.value2 ?? 'Value 2', label:  model.stat2 ?? 'Stat 2' },
          { value: model.value3 ?? 'Value 3', label:  model.stat3 ?? 'Stat 3' },
          { value: model.value4 ?? 'Value 4', label:  model.stat4 ?? 'Stat 4' },
        ]
      }

      const moduleScript = document.createElement('script');
      moduleScript.type = 'module';
      moduleScript.textContent = `
        import Component from '/content/cvs-aem.resource/scripts/components/StatsSection/index.js';
  
        const root = document.getElementById('statssection');
        const element = React.createElement(Component, ${JSON.stringify(data)});
        ReactDOM.render(element, root);
      `;
      document.body.appendChild(moduleScript);
    }) // Log the data to the console
    .catch(error => console.error('Error fetching the content:', error));
}