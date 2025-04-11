export default function decorate(block, model) {
    console.log('Block:', block);
    console.log('Block dataset:', block.dataset);
    console.log('Inner HTML:', block.innerHTML);
    console.log('Model:', model);

    block.innerHTML = `
      <div id="cardlinks" class="cardlinks">
        <p>Loading React component...</p>
      </div>
    `;

    const data = {
        cardData: {
            practices: {
                title: 'Practices',
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
}
