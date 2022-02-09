let currentQuestionIndex = 0;
// const time = questions.length * 15;
//set interval for 
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const D = document.getElementById("D");
const highscore = document.getElementById("highscore");
const title = document.getElementById("title");

var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;
const timerEl = document.querySelector("#timer-toggle");

//these will be later be styled to appear/disappear based on checkAnswer
var feedbackC = document.getElementById("answerCorrect")
var feedbackW = document.getElementById("answerWrong")
//answerCorrect.setAttribute.(hidden);
document.getElementsByClassName("feedback")
feedbackC.style.visibility = "hidden";
feedbackW.style.visibility = "hidden";
// answerCorrect.style.display="hidden";
// answerWrong.style.display="hidden";
//each question has scoped variables for each answer choice so that it can be used multiple times without affecting each other
function timer() {
    var start = Date.now();

    setInterval(function () {
        var delta = Date.now() - start;

        document.querySelector("#time-display").innerHTML = 'Timer ' + Math.floor(delta / 1000);
    }, 1000);
}



const questions = [{
        question: "String values must be enclosed in _____ when being assigned to variables",
        choiceA: "commas",
        choiceB: "curly brackets",
        choiceC: "quotes",
        choiceD: "brackets",
        correct: "quotes",
    },
    {
        question: "A very useful tool during development and debugging for print content is ____",
        choiceA: "for loops",
        choiceB: "console.log",
        choiceC: "terminal bash",
        choiceD: "Javascript",
        correct: "console.log",
    },
    {
        question: "Arrays in Javascript can be used to store ____",
        choiceA: "numbers and strings",
        choiceB: "other arrays",
        choiceC: "booleans",
        choiceD: "All of the above",
        correct: "All of the above",
    },
    {
        question: "Commonly used data types include all of the following EXCEPT _____",
        choiceA: "strings",
        choiceB: "alerts",
        choiceC: "booleans",
        choiceD: "numbers",
        correct: "booleans",
    },
    {
        question: "The condition in an if/else statement is enclosed in _____",
        choiceA: "parenthesis",
        choiceB: "curly brackets",
        choiceC: "quotes",
        choiceD: "square brackets",
        correct: "parenthesis",
    }
]


let lastQuestion = questions.length - 1;
//this goes through the various questions in the array. 


function renderQuestions() {
    let q = questions[currentQuestionIndex]
    //displays the current question and answers
    title.innerHTML = q.question;
    A.innerHTML = q.choiceA;
    B.innerHTML = q.choiceB;
    C.innerHTML = q.choiceC;
    D.innerHTML = q.choiceD;
    A.onclick = checkAnswer
    B.onclick = checkAnswer
    C.onclick = checkAnswer
    D.onclick = checkAnswer
    //proceeds to next question
    console.log(currentQuestionIndex);
};

//compares the answer submitted to the correct one
function checkAnswer(event) {
    let q = questions[currentQuestionIndex]
    //    feedbackC.style.visibility = "hidden";
    // feedbackW.style.visibility = "hidden";
    console.log(q)
    if (event.target.innerHTML === q.correct) {
        feedbackC.style.visibility = "visible";

        setTimeout(function () {
            feedbackC.style.visibility = "hidden";
        }, 1000)
    } else {
        feedbackW.style.visibility = "visible"
        setTimeout(function () {
            feedbackW.style.visibility = "hidden";
        }, 1000)
    }

    currentQuestionIndex++

    if (currentQuestionIndex === questions.length) {
        quizEnd()
        return;
    } else {
        renderQuestions()
    }
};



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


function quizEnd() {
    clearInterval(timer);

    var quizContent = `
        <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-dark">
        <h2 class="text-white">Game over!</h2>
        <h3 class="text-white">You got a ` + score + ` /100!</h3>
        <h3 class="text-white">That means you got ` + score / 20 + ` questions correct!</h3>
        <input type="text" id="name" required="required" placeholder="Enter your name.">
        <button class="btn btn-light mt-1" onclick="setScore()">Set score!</button>
        </div>`;

    document.getElementById("quiz-body").innerHTML = quizContent;
}



// start.style.display ="none";

start.style.display = "block";
renderQuestions()

// listen for button click and then run startGame()
document.querySelector("#start-questions").addEventListener("click", function () {
    startGame();
    timer();
});

// listen for score click and then run showScores()
document.querySelector("#btn-score-main").addEventListener("click", function () {
    showScores();
});

// game logic

function startQuiz() {
    {
        // make the timer visible when begin button is clicked
        timerEl.classList.replace("d-none", "d-block");

        timeLeft = 60;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        timer = setInterval(function () {
            timeLeft--;
            document.getElementById("timeLeft").innerHTML = timeLeft;

            // If timer hits below 0, the game ends
            if (timeLeft <= 0) {
                clearInterval(timer);
                endGame();
            }

        }, 1000);

        next();
    }
}
// view scores logic
function showScores() {
    console.log("showScores() Initiated!")
}

function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "");

    resetGame();
}

//for each loop
document.getElementById("highscore");