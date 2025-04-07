export default function decorate(block) {
  console.log('Block:', block);
  console.log('Block dataset:', block.dataset);
  console.log('Inner HTML:', block.innerHTML);

  block.innerHTML = `
    <div id="my-partial" class="my-partial">
      <p>Hello from the partial edited!</p>
    </div>
  `;

  // Load React first
  const script1 = document.createElement('script');
  script1.src = 'https://unpkg.com/react@18/umd/react.production.min.js';

  // Load ReactDOM after React
  const script2 = document.createElement('script');
  script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';

  // Once both are loaded, run your app logic
  script2.onload = () => {
    const script = document.createElement('script');
    script.text = `
      const MyComponent = () => {
        return React.createElement('div', null, 'Hello from the React component!');
      };

      const rootElement = document.getElementById('my-partial');
      ReactDOM.render(React.createElement(MyComponent), rootElement);
    `;
    document.body.appendChild(script);
  };

  // Append scripts in the right order
  document.body.appendChild(script1);
  script1.onload = () => document.body.appendChild(script2);
}