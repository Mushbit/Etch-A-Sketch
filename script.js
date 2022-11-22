let container = document.querySelector('.container');
let button = document.querySelector('.button');
let reset = document.querySelector('.reset');
button.addEventListener('click', askGridSize);
reset.addEventListener('click', resetGrid)


function askGridSize() {

    if (document.querySelectorAll('.row')) {

        let rows = document.querySelectorAll('.row');
    
        rows.forEach( row => container.removeChild(row) );
    }
    createGrid(prompt('How many tiles squared would you like your grid to be?', ''));
};
createGrid(30)

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
                tile.addEventListener('mouseover', addRGB)
                tile.addEventListener('mouseout', removeRGB)
            }
        let tiles = document.querySelectorAll('.tile');
        tiles.forEach(tile => tile.setAttribute)
        }
    }
}
let mouseDown = false
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

function addRGB(event) {

    if (mouseDown) {
    const rgb = [];
    for (let i = 0; i < 3; i++) {
        rgb[i] = Math.floor(Math.random() * 255) +1;
    }
   event.target.style.backgroundColor = 'rgb(' + rgb.join(', ') + ')';
   let op = 1;

   let timer = setInterval( () => {
    if (event.target.style.opacity <= 0.5) {
        clearInterval(timer);
    }
    event.target.style.opacity = op;
    event.target.style.filter = 'alpha(opacity=' + op *100 + ')';
    op -= op*0.1
   }, 50);
}
}

function removeRGB (event) {
    let op = 1;

    let timer = setInterval( () => {
     if (event.target.style.opacity <= 0.5) {
         clearInterval(timer);
     }
     event.target.style.opacity = op;
     event.target.style.filter = 'alpha(opacity=' + op *100 + ')';
     op -= op*0.1
    }, 50);
    
}

function resetGrid() {
    let tiles = document.querySelectorAll('div.tile')
    console.log(tiles)
    tiles.forEach( tile => tile.removeAttribute('style', 'background-color'))
}