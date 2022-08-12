let main = document.querySelector('#main');






for (let i = 0; i < 256; i++) {
    let tile = document.createElement('div');
    main.appendChild(tile);
    tile.setAttribute('class', 'tile')
}

