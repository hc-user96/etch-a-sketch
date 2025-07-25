let container = document.querySelector("#container");
let reset = document.querySelector("#reset-button");
let squares = [];
let iContainers = [];
const INITIALSIZE = 16;


createSquareGrid(INITIALSIZE);

reset.addEventListener("click", resetGrid);

container.addEventListener("mouseover", function(event) {
    if (event.target.classList.contains("squares")) {
        changeColor(event.target);
    }
});


function resetGrid() {
    squares.forEach(item => item.remove());
    iContainers.forEach(item => item.remove());
    squares = [];
    iContainers = [];
    
    let newSize = prompt("How big is your grid?");
    
    createSquareGrid(newSize);
}

function changeColor(item) {
    item.classList.add("hover");
}

function createSquareGrid(size) {
    for (let i = 0; i < size; i++) {
        let iContainer = document.createElement("div");
        iContainer.classList.add("inner-container");
        container.appendChild(iContainer);
        iContainers.push(iContainer);

        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.classList.add("squares");
            iContainer.appendChild(square);
            squares.push(square);
        }
    }
}