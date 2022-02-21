let canvas;
let canvasContext;
let snake = 50;


window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    setInterval(drawSnake, 1000);
    drawEverything();

    // drawApple();
}

function drawEverything() {

    // Make teal rectangles at 200 px intervals
    for (let i = 0; i < canvas.width; i += 200) {
        for (let j = 0; j < canvas.height; j += 200) {
            drawRect(i, j, 100, 100, "rgba(0,255,255, 1.0)");
        }
    }

    // Make pink rectangles at 200 px intervals
    for (let i = 100; i < canvas.width; i += 200) {
        for (let j = 100; j < canvas.height; j += 200) {
            drawRect(i, j, 100, 100, "rgba(255,105,180, 1.0)");
        }
    }
}

function drawRect(x, y, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
}

function drawSnake() {
    snake = snake + 10;
    console.log(snake);
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(snake, 200, 50, 25);
}

// function drawApple() {
//     canvasContext.fillStyle = 'red';
//     canvasContext.fillRect(300, 200, 10, 15);
// }



