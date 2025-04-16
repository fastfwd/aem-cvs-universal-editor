import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });

    const container = document.createElement('div');
    container.setAttribute('data-name', 'buttons');
    container.setAttribute('data-aue-prop', 'buttons');
    container.setAttribute('data-aue-label', 'Buttons');

    // Create one button item inside the multi container
    const buttonItem = document.createElement('div');
    buttonItem.setAttribute('data-aue-model', 'buttons'); // Important for nested items
    buttonItem.setAttribute('data-aue-label', 'Button');

    // Button title
    const title = document.createElement('p');
    title.setAttribute('data-name', 'title');
    title.setAttribute('data-aue-prop', 'title');
    title.setAttribute('data-aue-label', 'Button Title');
    title.textContent = 'Example Button';

    // Button link
    const link = document.createElement('p');
    link.setAttribute('data-name', 'link');
    link.setAttribute('data-aue-prop', 'link');
    link.setAttribute('data-aue-label', 'Button Link');
    link.textContent = 'https://example.com';

    buttonItem.append(title, link);
    container.append(buttonItem);

    li.append(container);

    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
  block.textContent = '';
  block.append(ul);
}
