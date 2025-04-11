export default function decorate(block) {
    console.log('Block:', block);
    console.log('Block dataset:', block.dataset);
    console.log('Inner HTML:', block.innerHTML);

    block.innerHTML = `
      <div id="multicolumncontent" class="multicolumncontent">
        <p>Loading React component...</p>
      </div>
    `;

    const data = {
        items: [
            {
                title: 'A1',
                description: 'B1'
            },
            {
                title: 'A2',
                description: 'B2'
            },
            {
                title: 'A3',
                description: 'B3'
            },
            {
                title: 'A4',
                description: 'B4'
            }
        ]
    }

    const moduleScript = document.createElement('script');
    moduleScript.type = 'module';
    moduleScript.textContent = `
    import Component from '../scripts/components/MultiColumnContent/index.js';

    const root = document.getElementById('multicolumncontent');
    const element = React.createElement(Component, ${JSON.stringify(data)});
    ReactDOM.render(element, root);
  `;
    document.body.appendChild(moduleScript);
}
