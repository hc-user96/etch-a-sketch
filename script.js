let container = document.querySelector("#container");

createSquaredGrid();

let squares = document.querySelectorAll(".squares");
squares.forEach(square => {
    square.addEventListener("mouseout", (e) => {
        square.classList.add("hover");
    })
})

function createSquaredGrid() {
    for (let i = 0; i < 16; i++) {
        let innerContainer = document.createElement("div");
        container.appendChild(innerContainer);

        for (let j = 0; j < 16; j++) {
            let square = document.createElement("div");
            square.classList.add("squares");
            innerContainer.appendChild(square);
        }
    }
}