export default function decorate(block) {
  console.log('Block:', block);
  console.log('Block dataset:', block.dataset);
  console.log('Inner HTML:', block.innerHTML);

  block.innerHTML = `
      <div id="findpracticesbanner" class="findpracticesbanner">
        <p>Loading React component...</p>
      </div>
    `;

  const data = {
    title: 'Title',
    description: 'Description',
    buttonText: 'Button',
    buttonLink: 'Link',
    backgroundImage: "https://www.cvsukltd.co.uk/globalassets/practice-images/gourleys-ashton-about-us.jpg",
    variant: "grey"
  }

  const moduleScript = document.createElement('script');
  moduleScript.type = 'module';
  moduleScript.textContent = `
  import Component from '../scripts/components/FindPracticesBanner/index.js';

  const root = document.getElementById('findpracticesbanner');
  const element = React.createElement(Component, ${JSON.stringify(data)});
  ReactDOM.render(element, root);
`;
  document.body.appendChild(moduleScript);
}
