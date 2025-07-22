let container = document.querySelector("#container");

// Set up 16x16 grid of squares
for (let i = 0; i < 16; i++) {
    let innerContainer = document.createElement("div");
    container.appendChild(innerContainer);

    for (let j = 0; j < 16; j++) {
        let square = document.createElement("div");
        square.classList.add("squares");
        innerContainer.appendChild(square);
    }
}

