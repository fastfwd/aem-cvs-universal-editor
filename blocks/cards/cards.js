import { createElement } from 'react';
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
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
  block.textContent = '';
  block.append(ul);


  const container = document.createElement('div');
container.setAttribute('data-name', 'buttons');

const item = document.createElement('div');

const title = document.createElement('span');
title.setAttribute('data-name', 'title');
title.textContent = 'Button title here';

const link = document.createElement('a');
link.setAttribute('data-name', 'link');
link.href = 'https://example.com';
link.textContent = 'https://example.com';

item.appendChild(title);
item.appendChild(link);
container.appendChild(item);
  
block.append(container);
}
