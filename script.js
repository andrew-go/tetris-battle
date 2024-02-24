document.getElementById("generateButton").onclick = function() {
    var randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
    document.getElementById("randomNumber").innerText = randomNumber;
};
