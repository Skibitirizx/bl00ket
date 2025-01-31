// Function for "Join Game"
function joinGame() {
  const gameCode = document.getElementById('gameCodeInput').value;
  if (gameCode) {
    // Replace with your actual game logic to join the game
    alert("Joining game with code: " + gameCode);
  } else {
    alert("Please enter a valid game code.");
  }
}
