let player1Figures = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
let player2Figures = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

function drawFigure(canvasId, figure, color) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = color;
    const blockSize = 40; // Define the block size

    // Define the shapes
    const shapes = {
        '1': [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]],
        '2': [[0, 0], [0, 1]],
        '3': [[0, 0], [0, 1]],
        '4': [[0, 0]],
        '5': [[0, 0], [1, 0], [2, 0]],
        '6': [[0, 0], [1, 0], [0, 1], [1, 1]],
        '7': [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1]],
        '8': [[1, 0], [1, 1], [0, 2], [1, 2], [2, 2]],
        '9': [[0, 0], [1, 0], [0, 1], [1, 2], [0, 2]],  // Updated
        '10': [[0, 0], [1, 0], [2, 0], [0, 1], [0, 2]], // Updated
        '11': [[1, 0], [2, 0], [0, 1], [1, 1], [2, 1]],
        '12': [[0, 0], [1, 0], [2, 0], [3, 0]],
        '13': [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]],
        '14': [[0, 0], [1, 0], [1, 1], [2, 1], [1, 2]],
        '15': [[1, 0], [0, 1], [1, 1], [2, 1]],
        '16': [[0, 0], [1, 0], [0, 0], [1, 1], [1, 2], [2, 2]], 
        '17': [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2]],
        '18': [[1, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
        '19': [[1, 0], [2, 0], [0, 1], [1, 1]],          // Updated
        '20': [[0, 0], [1, 0], [1, 1], [2, 1], [3, 1]]   // Updated
    };

    // Draw the shape
    shapes[figure].forEach(block => {
        ctx.fillRect(block[0] * blockSize, block[1] * blockSize, blockSize, blockSize);
    });
}

document.getElementById("generateButton").onclick = function() {
    let figure;
    if (player1Figures.length > 0 && player2Figures.length > 0) {
        if (player1Figures.length === player2Figures.length) {
            figure = player1Figures.splice(Math.floor(Math.random() * player1Figures.length), 1)[0];
            drawFigure('player1Canvas', figure, '#03bafc');
        } else {
            figure = player2Figures.splice(Math.floor(Math.random() * player2Figures.length), 1)[0];
            drawFigure('player2Canvas', figure, '#fcba03');
        }
    } else {
        alert("All figures have been drawn!");
    }
};
