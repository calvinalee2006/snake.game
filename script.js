let canvas;
let canvasContext;


window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    drawEverything();
    drawRect();
}

function drawEverything() {

    //Make a teal colored rectangle
    canvasContext.fillStyle = 'rgba(0,255,255, 1.0)'
    canvasContext.fillRect(0, 0, 100, 100)

    //Make a pink rectangle
    canvasContext.fillStyle = 'rgba(255,105,180, 1.0)'
    canvasContext.fillRect(100, 100, 100, 100);
}
// figure out why loop is only going to one color
function drawRect(x, y, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height)

    for (let i = 0; i < canvas.width; i += 200) {
        for (let j = 0; j < canvas.height; j += 200) {
            canvasContext.fillRect(i, j, 100, 100, 'rgba(0,255,255,1.0');
        }
    }

    for (let i = 100; i < canvas.width; i += 200) {
        for (let j = 100; j < canvas.height; j += 200) {
            canvasContext.fillRect(i, j, 100, 100, 'rgba(255,105,180,1.0)');
        }
    }
}





// canvasContext.strokeStyle = "black";
    // canvasContext.fillStyle = "blue";
    // canvasContext.strokeRect(0, 0, 50, 50);
    // canvasContext.fillRect(55, 0, 50, 50)
    // canvasContext.fillStyle = pat;
    // canvasContext.fill();


