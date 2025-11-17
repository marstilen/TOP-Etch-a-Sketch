
function changeColor(card) {
 card.style.backgroundColor = "green";
}

let gridContainer = document.querySelector("#gridContainer");
console.log(gridContainer);
let gridSize = 64;
for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    gridContainer.appendChild(row);
    for (let i = 0; i < 64; i++) {   
        let card = document.createElement("div");
        card.setAttribute("class", "card")
        card.setAttribute("id", `card${i}`)
        row.appendChild(card);
        card.addEventListener('mouseenter', function(e) {
            changeColor(e.target);
        });
    }
}