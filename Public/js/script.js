document.getElementById("joinGame").addEventListener("click", function() {
    let code = document.getElementById("gameCode").value;
    if (code.trim() === "") {
        alert("Please enter a game code!");
    } else {
        alert(`Joining game: ${code}`);
    }
});
