document.getElementById('playButton').addEventListener('click', function() {
    document.getElementById('gameStatus').innerHTML = "<p>Game Status: Started</p>";
});

document.getElementById('createRoomButton').addEventListener('click', function() {
    let gameCode = generateGameCode();
    document.getElementById('gameStatus').innerHTML = `<p>Game Status: Room Created. Use Code: ${gameCode}</p>`;
});

document.getElementById('joinRoomButton').addEventListener('click', function() {
    let enteredCode = prompt("Enter Game Code:");
    if (validateGameCode(enteredCode)) {
        document.getElementById('gameStatus').innerHTML = "<p>Game Status: Joined Room</p>";
    } else {
        alert("Invalid Game Code.");
    }
});

function generateGameCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

function validateGameCode(code) {
    // Simulate a check against valid codes
    // In a real app, this would check a backend database
    const validCodes = ['AB1234', 'XYZ789', 'G6H7I8'];  // Example codes
    return validCodes.includes(code);
}
