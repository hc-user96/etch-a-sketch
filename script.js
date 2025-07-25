let container = document.querySelector("#container");
let reset = document.querySelector("#reset-button");
let squares = [];
const INITIALSIZE = 16;


createSquareGrid(INITIALSIZE);

squares.forEach(square => {
    square.addEventListener("mouseover", () => changeColor(square));
});
// eventlistener("click", resetGrid())
reset.addEventListener("click", resetGrid);


function resetGrid() {
    squares.forEach(square => square.remove());
    // ask for size of new grid
    let newSize = prompt("How big is your grid?");
    // createSquareGrid(newSize)
}

function changeColor(item) {
    item.classList.add("hover");
}

function createSquareGrid(size) {
    for (let i = 0; i < size; i++) {
        let iContainer = document.createElement("div");
        iContainer.classList.add("inner-container");
        container.appendChild(iContainer);

        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.classList.add("squares");
            iContainer.appendChild(square);
            squares.push(square);
        }
    }
}