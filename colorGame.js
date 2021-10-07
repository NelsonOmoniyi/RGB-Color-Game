var numSquares = 6;
var colors = getRandomColor(numSquares);
var box = document.querySelectorAll(".box");
var pickedColor = pickRandomColor();
var rgbDisplay = document.getElementById("rgbDisplay");
var messageDisplay = document.getElementById("answer");
var h1 = document.querySelector("h1");
var resetbtn = document.querySelector("#reset");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
rgbDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = getRandomColor(numSquares);
    pickedColor = pickRandomColor();
    rgbDisplay.textContent = pickedColor;
    for (i = 0; i < box.length; i++) {
        if (colors[i]) {
            box[i].style.background = colors[i];
        } else {
            box[i].style.display = "none";
        }

    }
});
hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = getRandomColor(numSquares);
    pickedColor = pickRandomColor();
    rgbDisplay.textContent = pickedColor;
    for (i = 0; i < box.length; i++) {

        box[i].style.background = colors[i];

        box[i].style.display = "block";
    }
});



resetbtn.addEventListener("click", function() {
    // generate all new colors
    colors = getRandomColor(numSquares);
    // pick a new random color
    pickedColor = pickRandomColor();
    // change color or rgbDisplay to pickedColor
    rgbDisplay.textContent = pickedColor;
    // put new color in the boxes..

    for (i = 0; i < box.length; i++) {
        box[i].style.background = colors[i];

    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
});

for (i = 0; i < box.length; i++) {
    // add initial colors to square
    box[i].style.background = colors[i];

    // add event listener
    box[i].addEventListener("click", function() {
        // grab colors
        var grabbedColor = this.style.background;

        // compare grabbed color with pickedColor
        if (grabbedColor === pickedColor) {
            // alert("Correct Answer");
            // if you win
            messageDisplay.textContent = "Correct!"
            resetbtn.textContent = "Play Again!"
            changeAllColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
        } else {
            this.style.background = "rgba(45, 48, 42, 0.712)";
            messageDisplay.textContent = "Try Again!"
        }
    });

}



function changeAllColors(color) {
    // loop through each box
    for (let i = 0; i < box.length; i++) {
        // change the olor of each box to match color of picked box
        box[i].style.background = color;
    }

}

function pickRandomColor() {
    var Random = Math.floor(Math.random() * colors.length)
    return colors[Random];
}

function getRandomColor(num) {
    // create an array of random colors
    var arr = []
    for (var i = 0; i < num; i++) {
        // push random Color into the array and loop through it.
        arr.push(randomColorCreator())
    }
    // return the arr
    return arr;
}

function randomColorCreator() {
    // pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";


}