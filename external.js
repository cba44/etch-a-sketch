const container = document.querySelector('.container');

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    const size = prompt('Enter grid size 1-100');
    createGrid(size);
});

createGrid(5);

function createGrid(gridSize) {

    if (gridSize < 0) {
        gridSize = 1;
    } else if (gridSize > 50) {
        gridSize = 50;
    }

    container.innerHTML = "";

    const boxSize = 90 / gridSize;

    for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let columnIndex = 0; columnIndex < gridSize; columnIndex++) {

            const box = document.createElement('div');
            box.classList.add('box');
            box.style.cssText = `height: ${boxSize}vh; width: ${boxSize}vw`;
            box.addEventListener('mouseenter', () => {
                const color = genHexString(6);
                box.style.backgroundColor = `#${color}`;
            });

            row.appendChild(box);
            container.appendChild(row);
        }
    }
}

function genHexString(len) {
    const hex = '0123456789ABCDEF';
    let output = '';
    for (let i = 0; i < len; ++i) {
        output += hex.charAt(Math.floor(Math.random() * hex.length));
    }
    return output;
}