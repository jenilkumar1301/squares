let squareArea = document.querySelector("#squarearea");
let topIndex = 1;

let squareCount = parseInt(Math.random() * 21) + 30;

for (let i = 0; i < squareCount; i++) {
    addSquare();
}


function addSquare() {

    let square = document.createElement("div");
    square.className = "square";

    let size = parseInt(Math.random() * 11) + 45;

square.style.width = size + "px";
square.style.height = size + "px";

    square.style.left = parseInt(Math.random() * 650) + "px";
    square.style.top = parseInt(Math.random() * 250) + "px";

    square.style.backgroundColor = randomColor();

square.onclick = function () {
    if (parseInt(square.style.zIndex) === topIndex) {
        square.remove();
    } else {
        topIndex++;
        square.style.zIndex = topIndex;
    }
};

squareArea.append(square);
}

document.querySelector("#addBtn").onclick = addSquare;


function changeColors() {

    let squares = document.querySelectorAll(".square");

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = randomColor();
    }
}

document.querySelector("#colorBtn").onclick = changeColors;


function randomColor() {
    let letters = "0123456789abcdef";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters.charAt(parseInt(Math.random() * letters.length));
    }

    return color;
}