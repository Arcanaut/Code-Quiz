//for each loop
document.getElementById("highscore");

function showScores() {
    console.log("showScores() Initiated!")
}

function clearScore() {
    localStorage.setItem("highScore", "");
    localStorage.setItem("highscoreName", "");

    resetGame();
}
