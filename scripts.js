//insert child divs to make grid
const grid = document.querySelector('grid');
const div = document.createElement('div');
div.classList.add = "grid_child";

for (let x = 0; while x != 16; x++){
    grid.appendChild(div);
}

