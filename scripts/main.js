
function changeColor(card) {
 card.style.backgroundColor = "green";
}

let gridContainer = document.querySelector("#gridContainer");
console.log(gridContainer);
let gridSize = 64;
for (let i = 0; i < gridSize; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "card")
    card.setAttribute("id", `card${i}`)
    gridContainer.appendChild(card);
    card.addEventListener('mouseenter', function(e) {
        changeColor(e.target);
    });
}