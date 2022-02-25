//Drawing of canvas
let canvas = document.getElementById('gameCanvas');
let canvasContext = canvas.getContext('2d');

//Drawing of snake head
let tileCount = 20;
let tileSize = 18;

//Drawing of the snake body
let snake = [{ x: 200, y: 250 },
{ x: 180, y: 250 },
{ x: 160, y: 250 },
{ x: 140, y: 250 }
];

let snakeDirection = null;

// Apple
let apple = {
    x: Math.floor(Math.random() * canvas.height), y: Math.floor(Math.random() * canvas.width)
}

window.onload = function () {
    let framesPerSecond = 30;
    setInterval(function () {
        drawGameBoard();
        drawSnake();
        drawApple();
        snakeEatsApple();
        moveSnake();
    }, 500);
}

function drawGameBoard() {
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height)
}

function drawSnake() {
    snake.forEach((snakePart) => {
        canvasContext.fillStyle = "green";
        canvasContext.fillRect(snakePart.x, snakePart.y, tileSize, tileSize);
    });
}

document.addEventListener("keydown", setSnakeDirection);

function setSnakeDirection(event) {
    //up
    if (event.key === 'ArrowUp') {
        if (snakeDirection !== "down") {
            snakeDirection = "up";
        }
    }
    //down
    if (event.key === 'ArrowDown') {
        if (snakeDirection !== "up") {
            snakeDirection = "down";
        }
    }
    // left
    if (event.key === "ArrowLeft") {
        if (snakeDirection !== "right") {
            snakeDirection = "left";
        }
    }
    // right
    if (event.key === "ArrowRight") {
        if (snakeDirection !== "left") {
            snakeDirection = "right";
        }
    }
}


function moveSnake() {
    if (!snakeDirection) return;

    //play with code!! 
    for (let i = snake.length - 1; i > 0; i--) {
        const previousPartIndex = i - 1;
        const previousPart = snake[previousPartIndex]
        snake[i] = Object.assign({}, previousPart)
    }

    if (snakeDirection === "up") {
        snake[0].y -= tileCount
    }

    if (snakeDirection === "down") {
        snake[0].y += tileCount
    }

    if (snakeDirection === "right") {
        snake[0].x += tileCount
    }

    if (snakeDirection === "left") {
        snake[0].x -= tileCount
    }
}

function drawApple() {
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(apple.x, apple.y, 20, 20);
}

function snakeEatsApple() {
    if (snake[0].x === apple.x && snake[0].y === apple.y) {
        apple = {
            x: Math.floor(Math.random() * canvas.height),
            y: Math.floor(Math.random() * canvas.width)
        }
    }
}

//work on the apple and eating the apple
//scoring
//boarder


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



