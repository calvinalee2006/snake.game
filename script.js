let canvas;
let canvasContext;


window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    drawEverything();
}

function drawEverything() {

    //Make a teal colored rectangle
    canvasContext.fillStyle = 'rgba(0,255,255, 1.0)'
    canvasContext.fillRect(0, 0, 100, 100)

    //Make a pink rectangle
    canvasContext.fillStyle = 'rgba(255,105,180, 1.0)'
    canvasContext.fillRect(100, 100, 100, 100);

    let pattern = canvasContext.createPattern(canvas, 'repeat');
    canvasContext.fillStyle = pattern;
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    document.body.appendChild(canvas);
}

// canvasContext.strokeStyle = "black";
    // canvasContext.fillStyle = "blue";
    // canvasContext.strokeRect(0, 0, 50, 50);
    // canvasContext.fillRect(55, 0, 50, 50)
    // canvasContext.fillStyle = pat;
    // canvasContext.fill();


