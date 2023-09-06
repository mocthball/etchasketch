//insert child divs to make grid
const GRID_SQUARED = 16 * 16;
const grid = document.querySelector('#grid');


for (let x = 0; x != GRID_SQUARED; x++){
    let div = document.createElement('div');
    div.className = "grid_child";
    div.setAttribute("id", x);
    div.setAttribute("onmousedown", "etch(" + x +")");
    grid.appendChild(div);
    console.log(div);
}

function etch(id) {
    const sketch = document.getElementById(id);
    sketch.style.cssText = "background: pink;";
}