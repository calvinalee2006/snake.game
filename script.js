const SIZE = 20;
const FPS = 30;
const canvas = document.getElementById('gameCanvas');
const canvasContext = canvas.getContext('2d');

let score = 0;

let snake = {
    body: [
        { x: 200, y: 240 },
        { x: 180, y: 240 },
        { x: 160, y: 240 }
    ],
    direction: undefined,
    size: 18,
};

let apple = {
    x: Math.floor((Math.random() * (canvas.width - 20)) / 20) * 20,
    y: Math.floor((Math.random() * (canvas.height - 20)) / 20) * 20
}

window.onload = () => setInterval(init, 2500 / FPS);

function init() {
    drawCanvas();
    drawSnake();
    drawApple();
    drawScore()
    moveSnake();
    snakeEatsApple();
    bodyCheck();
    wallCheck()
}

document.addEventListener("keydown", setDirection);

function setDirection(event) {
    switch (event.key) {
        case "ArrowUp":
            if (snake.direction !== "down") snake.direction = "up";
            break;
        case "ArrowDown":
            if (snake.direction !== "up") snake.direction = "down";
            break;
        case "ArrowRight":
            if (snake.direction !== "left") snake.direction = "right";
            break;
        case "ArrowLeft":
            if (snake.direction !== "right") snake.direction = "left";
            break;
        default:
            break;
    }
}

function drawRect(x, y, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, height, width)
}

function drawCanvas() {
    drawRect(0, 0, canvas.width, canvas.height, "white");
}

function drawSnake() {
    snake.body.forEach((part) => {
        drawRect(part.x, part.y, SIZE, SIZE, "green")
    });
}

function drawApple() {
    drawRect(apple.x, apple.y, SIZE, SIZE, "red")
}

function drawScore() {
    canvasContext.font = "18px Arial";
    canvasContext.fillStyle = "#0095DD";
    canvasContext.fillText("Score: " + score, 8, SIZE);
}

function bodyCheck() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            alert("Game Over, stop hitting yourself!");
            gameOver();
        }
    }
}

function wallCheck() {
    const hitLeftWall = snake.body[0].x < 0 - SIZE;
    const hitRightWall = snake.body[0].x > canvas.width;
    const hitTopWall = snake.body[0].y < 0 - SIZE;
    const hitBottomWall = snake.body[0].y > canvas.height;
    if (hitLeftWall) alert('Game Over, You hit the left wall!')
    if (hitRightWall) alert('Game Over, You hit the right wall!!');
    if (hitTopWall) alert('Game Over, You hit the top wall!!');
    if (hitBottomWall) alert('Game Over, You hit the bottom wall!!');

    if (hitLeftWall || hitBottomWall || hitRightWall || hitTopWall) {
        gameOver();
    }
}

function moveSnake() {
    if (!snake.direction) return;
    for (let i = snake.body.length - 1; i > 0; i--) {
        snake.body[i] = Object.assign({}, snake.body[i - 1])
    }
    if (snake.direction === "up") snake.body[0].y -= SIZE;
    if (snake.direction === "down") snake.body[0].y += SIZE;
    if (snake.direction === "right") snake.body[0].x += SIZE;
    if (snake.direction === "left") snake.body[0].x -= SIZE;
}

function snakeEatsApple() {
    if (snake.body[0].x === apple.x && snake.body[0].y === apple.y) {
        generateRandomApplePosition();
        growSnake();
        score++;
    }
}

function generateRandomApplePosition() {
    apple = {
        x: Math.floor((Math.random() * (canvas.width - 20)) / 20) * 20,
        y: Math.floor((Math.random() * (canvas.height - 20)) / 20) * 20,
    };
}

function growSnake() {
    let newHead = {
        x: snake.body.x,
        y: snake.body.y
    };
    snake.body.push(newHead);
}

function gameOver() {
    score.body = 0;
    snake = {
        body: [
            { x: 200, y: 240 },
            { x: 180, y: 240 },
            { x: 160, y: 240 }
        ],
        direction: undefined,
        size: 18,
    };
    generateRandomApplePosition();
}
