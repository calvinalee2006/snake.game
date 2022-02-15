let canvas;
let canvasContext;


window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    border = document.getElementById('canvas-border')
    canvasContext = canvas.getContext('2d');

    drawEverything();

}

function drawEverything() {
    //Make a teal colored rectangle
    canvasContext.fillStyle = 'rgba(0,255,255, 1.0)'
    canvasContext.fillRect(0, 0, 100, 100)

    //Make a pink rectangle
    canvasContext.fillStyle = 'rgba(255,105,180, 1.0)'
    canvasContext.fillRect(100, 100, 100, 100)
}

function Rectangle(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.draw = function () {
        c.fillStyle = this.color
        c.fillRect(this.x, this.y, this.width, this.height)
    }
    // Make teal rectangles at 200 px intervals
    for (let i = 0; i < canvas.width; i += 200) {
        for (let j = 0; j < canvas.height; j += 200) {
            let rectangle = new Rectangle(i, j, 100, 100, 'rgba(0,255,255,1.0)')
            rectangle.draw()
        }
    }
    // Make pink rectangles at 200 px intervals
    for (let i = 100; i < canvas.width; i += 200) {
        for (let j = 100; j < canvas.height; j += 200) {
            let rectangle = new Rectangle(i, j, 100, 100, 'rgba(255,105,180, 1.0)')
            rectangle.draw()
        }
    }
}







// canvasContext.strokeStyle = "black";
    // canvasContext.fillStyle = "blue";
    // canvasContext.strokeRect(0, 0, 50, 50);
    // canvasContext.fillRect(55, 0, 50, 50)
    // canvasContext.fillStyle = pat;
    // canvasContext.fill();


