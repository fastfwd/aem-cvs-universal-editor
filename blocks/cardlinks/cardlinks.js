import { splitAemPath } from "../../scripts/utils/json.js";
import { moveInstrumentation } from '../../scripts/scripts.js';

export default async function decorate(block) {
    // const { basePath, jcrPath } = splitAemPath(block.dataset.aueResource);
    // if (!basePath || !jcrPath) { return; }

    // const ul = document.createElement('ul');
    // ul.className = 'hidden';
    // [...block.children].forEach((row) => {
    //     const li = document.createElement('li');
    //     moveInstrumentation(row, li);
    //     while (row.firstElementChild) li.append(row.firstElementChild);
    //     ul.append(li);
    // });
    // block.textContent = '';
    // block.append(ul);

    // const component = document.createElement('div');
    // component.id = 'cardlinks';
    // block.append(component);

    // try {
    //     const response = await fetch(`${basePath}${jcrPath}.infinity.json`);
    //     const model = response.json();

    //     const data = {
    //         cardData: {
    //             practices: {
    //                 title: 'Practices',
    //                 links: [
    //                     {
    //                         href: '',
    //                         text: model.title ?? 'Text1',
    //                     },
    //                     {
    //                         href: '',
    //                         text: model.subtitle ?? 'Text1',
    //                     }
    //                 ]
    //             },
    //             services: {
    //                 title: 'Services',
    //                 links: [
    //                     {
    //                         href: '',
    //                         text: 'Text1',
    //                     },
    //                     {
    //                         href: '',
    //                         text: 'Text2',
    //                     }
    //                 ]
    //             },
    //             divisions: {
    //                 title: 'Divisions',
    //                 links: [
    //                     {
    //                         href: '',
    //                         text: 'Text1',
    //                     },
    //                     {
    //                         href: '',
    //                         text: 'Text2',
    //                     }
    //                 ]
    //             },
    //         }
    //     }
    //     //import Component from '/content/cvs-aem.resource/scripts/components/CardLinks/index.js';
    //     //import Component from '../scripts/components/CardLinks/index.js';
    //     const moduleScript = document.createElement('script');
    //     moduleScript.type = 'module';
    //     moduleScript.textContent = `
    //         import Component from '/content/cvs-aem.resource/scripts/components/CardLinks/index.js';

    //         const root = document.getElementById('cardlinks');
    //         const element = React.createElement(Component, ${JSON.stringify(data)});
    //         ReactDOM.render(element, root);
    //         `;
    //     document.body.appendChild(moduleScript);
    // } catch (error) {
    //     console.error('Error fetching the content:', error);
    // }
}
