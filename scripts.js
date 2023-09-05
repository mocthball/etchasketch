//insert child divs to make grid
const grid = document.querySelector('#grid');
const div = document.createElement('div');
div.className = "grid_child";
console.log(div);


for (let x = 0; x != 16; x++){
    grid.appendChild(div);
}