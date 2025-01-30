function createFloatingBlooks(count) {
    const container = document.getElementById("floatingBlooks");
    for (let i = 0; i < count; i++) {
        let blook = document.createElement("div");
        blook.classList.add("blook");
        blook.style.left = Math.random() * 100 + "vw";  // Random horizontal position
        blook.style.top = Math.random() * 100 + "vh";   // Random vertical position
        blook.style.animationDuration = (3 + Math.random() * 3) + "s"; // Random floating speed
        container.appendChild(blook);
    }
}

createFloatingBlooks(15);  // Generate 15 floating Blooks

document.getElementById("joinGame").addEventListener("click", function() {
    let code = document.getElementById("gameCode").value;
    if (code.trim() === "") {
        alert("Please enter a game code!");
    } else {
        alert(`Joining game: ${code}`);
    }
});
