export default function decorate(block) {
  console.log('Block:', block);
  console.log('Block dataset:', block.dataset);
  console.log('Inner HTML:', block.innerHTML);

  block.innerHTML = `
    <div id="threecolumncards" class="threecolumncards">
      <p>Loading React component...</p>
    </div>
  `;

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
    import Component from '/content/cvs-aem.resource/scripts/components/ThreeColumnCards/index.js';

    const root = document.getElementById('threecolumncards');
    const element = React.createElement(Component, ${JSON.stringify(data)});
    ReactDOM.render(element, root);
  `;
  document.body.appendChild(moduleScript);
}