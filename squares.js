let squarearea = document.querySelector("squarearea");

 let squarecount = parseint(math.random() * 21)+30;

 for (let i = 0; i < squarecount; i++) {
     let square = document.createElement("div");
     square.className = "square";
     square.style.top =  parseint(math.random()) * 6500 + "px";
     square.style.left = parseint(math.random()) * 250 + "px";
     square.style.backgroundColor = randomcolor();
     squarearea.append(square);
 }

 function randomcolor() {
     
    let letters = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters.charAt(parseInt(math.random() * letters.length));
    }
    return color;
 }