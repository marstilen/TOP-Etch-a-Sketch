
function changeColor(card) {
 card.style.backgroundColor = "green";
}


function drawBoxes(numberOfBoxes) {
    
let gridContainer = document.querySelector("#gridContainer");
gridContainer.innerHTML="";
console.log(gridContainer);
for (let i = 0; i < numberOfBoxes; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("style", `height: calc(100vw/${numberOfBoxes})`)
    gridContainer.appendChild(row);
    for (let i = 0; i < numberOfBoxes; i++) {   
        let card = document.createElement("div");
        card.setAttribute("class", "card")
        card.setAttribute("id", `card${i}`)
        row.appendChild(card);
        card.addEventListener('mouseenter', function(e) {
            changeColor(e.target);
        });
    }
}}

function setNumberOfBoxes() {
    let gridSizeTextBox = document.querySelector("#gridSizeTextBox");
    if (gridSizeTextBox.value != NaN && gridSizeTextBox.value <= 100) {
        drawBoxes(gridSizeTextBox.value);
    }
    else prompt("please enter a number lower than 100");
    console.log(gridSizeTextBox.value);
}
