export default function decorate(block) {
  console.log('Block:', block);
  console.log('Block dataset:', block.dataset);
  console.log('Inner HTML:', block.innerHTML);

  const titleElement = block.querySelector('[data-aue-prop="title"]');
  const subtitleElement = block.querySelector('[data-aue-prop="subtitle"]');

  const title = titleElement ? titleElement.textContent : 'Hello, React!';
  const subtitle = subtitleElement ? subtitleElement.textContent : 'This is a dynamic example with an image and button.';

  console.log('title', title);
  console.log('subtitle', subtitle);

  block.innerHTML = `
    <div id="my-partial" class="my-partial">
      <p>Loading React component...</p>
    </div>
  `;

  const moduleScript = document.createElement('script');
  moduleScript.type = 'module';
  moduleScript.textContent = `
      import TestComponent from '/content/cvs-aem.resource/scripts/testcomponent-react2.js';

      const root = document.getElementById('my-partial');
      const element = React.createElement(TestComponent, {
        title: '${title}',
        description: '${subtitle}',
        buttonText: 'Click Me',
        buttonLink: '/somewhere',
        backgroundImage: 'https://www.cvsukltd.co.uk/globalassets/practice-images/gourleys-ashton-about-us.jpg' // Adjust the image path
      });
      ReactDOM.render(element, root);
    `;
  document.body.appendChild(moduleScript);
}
