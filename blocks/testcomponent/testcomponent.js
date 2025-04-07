export default function decorate(block) {
    console.log('Block:', block);
    console.log('Block dataset:', block.dataset);
    console.log('Inner HTML:', block.innerHTML);

    const title = block.dataset.title || 'Default Title';
    const subtitle = block.dataset.subtitle || 'Default Subtitle';

    block.innerHTML = `
        <div class="testcomponent-content">
            <h1>${title}</h1>
            <p>${subtitle}</p>
        </div>
    `;
}