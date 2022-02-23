//Drawing of the canvas
let canvas;
let canvasContext;

//Drawing of the snake 
let tileCount = 20;
let tileSize = 18;
let headX = 10;
let headY = 10;

//control of the snake
var rightPressed = false;
var leftPressed = false;


window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    let framesPerSecond = 30;
    setInterval(function () {
        drawGameBoard();
        drawSnake();
        drawApple();
    }, 1000 / framesPerSecond);
}

function drawGameBoard() {
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height)
}

function drawSnake() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function drawApple() {
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(600, 250, 20, 20);
}




// drawRect(0, 0, canvas.width, canvas.height, "white")

// function drawRect(x, y, width, height, color) {
//     canvasContext.fillStyle = color;
//     canvasContext.fillRect(x, y, width, height);
// }







 // Make teal rectangles at 200 px intervals
    // for (let i = 0; i < canvas.width; i += 200) {
    //     for (let j = 0; j < canvas.height; j += 200) {
    //         drawRect(i, j, 100, 100, "rgba(0,255,255, 1.0)");
    //     }
    // }

    // // Make pink rectangles at 200 px intervals
    // for (let i = 100; i < canvas.width; i += 200) {
    //     for (let j = 100; j < canvas.height; j += 200) {
    //         drawRect(i, j, 100, 100, "rgba(255,105,180, 1.0)");
    //     }
    // }



