export default function decorate(block) {
  console.log('Block:', block);
  console.log('Block dataset:', block.dataset);
  console.log('Inner HTML:', block.innerHTML);

  block.innerHTML = `
      <div id="statssection" class="statssection">
        <p>Loading React component...</p>
      </div>
    `;

  const data = {
    stats: [
      { value: 'Value', label: 'Stat1' },
      { value: 'Value', label: 'Stat2' },
      { value: 'Value', label: 'Stat3' },
      { value: 'Value', label: 'Stat4' }
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
}