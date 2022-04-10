//for each loop
document.getElementById("highscore");


function getScore() {
    var quizContent = `
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-dark">
    <h2 class="text-white">` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1 class="text-white">` + localStorage.getItem("highscore") + `</h1><br>
    <button class="btn btn-danger" onclick="clearScore()">Clear HighScore</button>
    <button class="btn btn-light mt-1" onclick="resetGame()">Play again!</button>
    </div>
    
    `;

    document.getElementById("quiz-body").innerHTML = quizContent;
}



function showScores() {
    console.log("showScores() Initiated!")

}

function clearScore() {
    localStorage.setItem("highScore", "");
    localStorage.setItem("highScoreName", "");

    resetGame();
}
