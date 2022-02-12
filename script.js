let canvas;
let canvasContext;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    border = document.getElementById('canvas-border')
    canvasContext = canvas.getContext('2d');
    // Game Canvas
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    //Other box 
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(100, 200, 50, 25);

}

