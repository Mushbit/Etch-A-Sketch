let container = document.querySelector('.container');
let button = document.querySelector('.button');
button.addEventListener('click', askGridSize);

function askGridSize() {

    if (document.querySelectorAll('.row')) {

        let rows = document.querySelectorAll('.row');
    
        rows.forEach( row => container.removeChild(row) );
    }
    createGrid(prompt('How many tiles squared would you like your grid to be?', ''));
};


function createGrid(number) {

    if (number > 100) {
        
        number = prompt('We can only handle 100x100 tiles max', '');

    } else {

        dimensionTile = 1000 / number;

        for (let i = 0; i < number; i++) {
            let row = document.createElement('div');
            container.appendChild(row);
            row.setAttribute('class', 'row');

            for (let i = 0; i < number; i++) {
                let tile = document.createElement('div');
                row.appendChild(tile);
                tile.classList.add('tile', 'opacity');
                tile.addEventListener('mouseover', setInterval(addRGB), 50)
                //tile.addEventListener('mouseout', removeRGB)
            }
        let tiles = document.querySelectorAll('.tile');
        tiles.forEach(tile => tile.setAttribute)
        }
    }
}

function removeRGB(event) {
    event.target.classList.toggle('opacity');
}

function addRGB(event) {
    const rgb = [];
    for (let i = 0; i < 3; i++) {
        rgb[i] = Math.floor(Math.random() * 255) +1;
    }
   event.target.style.backgroundColor = 'rgb(' + rgb.join(', ') + ')';
   event.target.classList.toggle('opacity');
}
