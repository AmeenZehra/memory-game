// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Event listener for the New Game button
    document.getElementById("new-game-btn").addEventListener("click", function() {
        const selectedGrid = document.getElementById("memory--settings-grid").value;
        const grid = selectedGrid.split("x");
        const rows = parseInt(grid[0]);
        const columns = parseInt(grid[1]);

        // Initialize a new game with selected difficulty
        if (MemoryGame && typeof MemoryGame.initialize === 'function') {
            MemoryGame.initialize(rows, columns, MemoryGame.settings.images);
            console.log("New game started with " + rows + " rows and " + columns + " columns.");
        } else {
            console.error("MemoryGame object or initialize function not found.");
        }
    });
});
