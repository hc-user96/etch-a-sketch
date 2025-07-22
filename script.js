let container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    innerContainer = document.createElement("div");
    container.appendChild(innerContainer);
    
    for (let j = 0; j < 16; j++) {
        innerContainer.appendChild(document.createElement("div"));
    }
}