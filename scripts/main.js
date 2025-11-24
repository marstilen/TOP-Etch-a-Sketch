function darkenRGBColor(rgbColor) {
    // let R = `${rgbColor[4]}${rgbColor[5]}${rgbColor[6]}`
    let newRgbColor = [...rgbColor]
    newRgbColor = rgbColor.replace(/[^\d,]/g, '').split(',');
    Number(newRgbColor[0]) - 26 > 0 ? newRgbColor[0] = Number(newRgbColor[0]-26) : newRgbColor[0] = 0;
    Number(newRgbColor[1]) - 26 > 0 ? newRgbColor[1] = Number(newRgbColor[1]-26) : newRgbColor[1] = 0;
    Number(newRgbColor[2]) - 26 > 0 ? newRgbColor[2] = Number(newRgbColor[2]-26) : newRgbColor[2] = 0;
    console.log(newRgbColor);   
    return `rgb(${newRgbColor})`;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor(card) {
    if (card.style.backgroundColor == "") {
        card.style.backgroundColor = getRandomColor();
    }
    else{
        card.style.backgroundColor = darkenRGBColor(card.style.backgroundColor)
    }
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
