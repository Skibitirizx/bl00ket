// Handle "Join Game" Button Click
document.querySelector('.join-game-btn').addEventListener('click', function () {
    const enteredCode = document.getElementById('game-code-input').value.trim().toLowerCase();

    if (enteredCode === "ela") {
        alert('Successfully joined the game!');
        // Redirect to the game or further actions
        window.location.href = 'https://www.blooket.com'; // Redirect to Blooket or your game URL
    } else {
        document.getElementById('error-message').style.display = 'block'; // Show error message
    }
});
