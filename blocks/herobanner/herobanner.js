export default function decorate(block) {
  console.log('Block:', block);
  console.log('Block dataset:', block.dataset);
  console.log('Inner HTML:', block.innerHTML);

  block.innerHTML = `
      <div id="herobanner" class="herobanner">
        <p>Loading React component...</p>
      </div>
    `;

  const data = {
    title: 'Title',
    description: 'Description',
    buttonText: 'Button',
    buttonLink: 'Link',
    backgroundImage: "https://www.cvsukltd.co.uk/contentassets/01b466e1b6f64cdeb53ced6299dcb80f/west-mount-vet---huddersfield--consultation-room.jpg",
    variant: "grey"
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
}
