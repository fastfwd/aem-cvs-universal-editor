import { splitAemPath } from "../../scripts/utils/json.js";

export default function decorate(block) {
    const { basePath, jcrPath } = splitAemPath(block.dataset.aueResource);
    if (!basePath || !jcrPath) { return; }

    block.innerHTML = `
      <div id="cardlinks" class="cardlinks">
        <p>Loading React component...</p>
      </div>
    `;

    fetch(`${basePath}${jcrPath}.json`)
        .then(response => response.json())
        .then(model => {
            const data = {
                cardData: {
                    practices: {
                        title: 'Practices',
                        links: [
                            {
                                href: '',
                                text: model.title ?? 'Text1',
                            },
                            {
                                href: '',
                                text: model.subtitle ?? 'Text1',
                            }
                        ]
                    },
                    services: {
                        title: 'Services',
                        links: [
                            {
                                href: '',
                                text: 'Text1',
                            },
                            {
                                href: '',
                                text: 'Text2',
                            }
                        ]
                    },
                    divisions: {
                        title: 'Divisions',
                        links: [
                            {
                                href: '',
                                text: 'Text1',
                            },
                            {
                                href: '',
                                text: 'Text2',
                            }
                        ]
                    },
                }
            }
            //import Component from '/content/cvs-aem.resource/scripts/components/CardLinks/index.js';
            //import Component from '../scripts/components/CardLinks/index.js';
            const moduleScript = document.createElement('script');
            moduleScript.type = 'module';
            moduleScript.textContent = `
        import Component from '/content/cvs-aem.resource/scripts/components/CardLinks/index.js';
    
        const root = document.getElementById('cardlinks');
        const element = React.createElement(Component, ${JSON.stringify(data)});
        ReactDOM.render(element, root);
      `;
            document.body.appendChild(moduleScript);
        }) // Log the data to the console
        .catch(error => console.error('Error fetching the content:', error));
}
