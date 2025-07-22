let squareSize = 16;
let container = document.querySelector("#container");

createSquaredGrid();

// Colors hovered over squares in different color
let squares = document.querySelectorAll(".squares");
squares.forEach(square => {
    square.addEventListener("mouseout", (e) => {
        square.classList.add("hover");
    })
})

// Let's user reset the grid with desired ammount of squares

function createSquaredGrid() {
    for (let i = 0; i < squareSize; i++) {
        let innerContainer = document.createElement("div");
        container.appendChild(innerContainer);

        for (let j = 0; j < squareSize; j++) {
            let square = document.createElement("div");
            square.classList.add("squares");
            innerContainer.appendChild(square);
        }
    }
}