let container = document.querySelector("#container")


// createSquareGrid(16x16)
createSquareGrid(2);
// eventListener("hover", changeColor())

// eventlistener("click", resetGrid())


// FUNCTION resetGrid()

// FUNCTION changeColor()

// FUNCTION createSquareGrid(size) 
function createSquareGrid(size) {
    for (let i = 0; i < size; i++) {
        let iContainer = document.createElement("div");
        iContainer.classList.add("inner-container");
        container.appendChild(iContainer);

        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.classList.add("squares");
            iContainer.appendChild(square);
        }
    }
}