//insert child divs to make grid
const grid = document.querySelector('#grid');
gridSize.addEventListener('input', () => initialise_grid());
initialise_grid();

//Default colour for sketch
let sketchcolour = "black";

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function initialise_grid(){
    let gridSize = document.getElementById('gridSize').value;
    let GRID_SQUARED = gridSize * gridSize;
    console.log(gridSize);

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    grid.style.cssText = "grid-template-columns: repeat(" + gridSize + ", 1fr);";

    for (let x = 0; x != GRID_SQUARED; x++){
        let div = document.createElement('div');
        div.className = "grid_child";
        div.setAttribute("id", x);
        //div.setAttribute("onmousedown", "etch(" + x +")");
        div.addEventListener("mouseover", etch);
        div.addEventListener("mousedown", etch);
        grid.appendChild(div);
    }
}

function etch(e) {
    if (e.type === 'mouseover' && !mouseDown){
        return;
    }
    else {
        e.target.style.cssText = "background:" + sketchcolour + ";";
    }
}

//colour function including colour picker

let colorpicker = document.getElementById('colorPicker');
colorpicker.addEventListener("input", (e) => colourSet(e.target.value));

function colourSet(colour){
    sketchcolour = colour;
}

function clearboard() {
    let gridSize = document.getElementById('gridSize').value;
    GRID_SQUARED = gridSize * gridSize;

    for (let x = 0; x < GRID_SQUARED; x++){
        let grid_child = document.getElementById(x);
        grid_child.style.cssText="background:white";
    }
}