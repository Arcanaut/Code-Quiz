// let currentQuestionIndex = 0;
// const time = questions.length * 15;
//set interval for 
const startId = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const highscore = document.getElementById("highscore");
const title = document.getElementById("title");

//variables for score and timer functions
var score = 0; /* Possibly set to 100. Intent is to make points = time remaining. */
let currentQuestion = -1; /* <-- might need to make '0'*/
var timeLeft = 0;
var timer;

const timerEl = document.querySelector("#timer-toggle");

//these will be later be styled to appear/disappear based on checkAnswer
var feedbackC = document.getElementById("answer-correct")
var feedbackW = document.getElementById("answer-wrong")
// //answerCorrect.setAttribute.(hidden);
document.getElementsByClassName("feedback")
feedbackC.style.visibility = "hidden";
feedbackW.style.visibility = "hidden";
answerCorrect.style.display="hidden";
// answerWrong.style.display="hidden";
//each question has scoped variables for each answer choice so that it can be used multiple times without affecting each other


// After start is clicked, the timer begins to count down
function start() {
    // make the timer visible when begin button is clicked
    timerEl.classList.replace("d-none", "d-block");

    timeLeft = 100;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        // If timer hits below 0, the game ends
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }

    }, 1000);

    next();
}


const questions = [{
        questionTitle: "String values must be enclosed in _____ when being assigned to variables",
        choices: ["commas", "curly brackets", "quotes", "brackets", "quotes"],
        correct: "quotes"
    },
    {
        questionTitle: "A very useful tool during development and debugging for print content is ____",
        choices: ["for loops", "console.log", "terminal bash", "Javascript", "console.log", ],
        correct: "console.log"
    },
    {
        questionTitle: "Arrays in Javascript can be used to store ____",
        choices: ["numbers and strings", "other arrays", "booleans", "All of the above"],
        correct: "All of the above"
    },
    {
        questionTitle: "Commonly used data types include all of the following EXCEPT _____",
        choices: ["strings", "alerts", "numbers", "booleans"],
        correct: "booleans"
    },
    {
        questionTitle: "The condition in an if/else statement is enclosed in _____",
        choices: ["parenthesis", "curly brackets", "quotes", "square brackets", ],
        correct: "parenthesis"
    }
]


const lastQuestion = questions.length - 1;
//this goes through the various questions in the array. 


function next() {
    questions++;

    if (questions++ > lastQuestion) {
        endQuiz();
        return;
    };
}

function renderQuestions() {
    let q = [questionTitle[questions]]
    //displays the current question and answers
    title.innerHTML = q.questions;

    //proceeds to next question
    console.log(questions);
};

//compares the answer submitted to the correct one
function checkAnswer(event) {
    let q = questionTitle[questions]
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
    questions++

    if (questions === questions.length) {
        endQuiz()
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


function endQuiz() {
    clearInterval(timer);

    var quizContent = `
        <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-dark">
        <h2 class="text-white">Game over!</h2>
        <h3 class="text-white">Because of your speed and accuracy, you got ` + score + ` points!</h3>
        <h3 class="text-white">That means you got ` + score / 20 + ` questions correct!</h3>
        <input type="text" id="name" required="required" placeholder="Enter your name.">
        <button class="btn btn-light mt-1" onclick="setScore()">Set score!</button>
        </div>`;

    document.getElementById("quiz-body").innerHTML = quizContent;
}


//Deduct 10 seconds from the timer if user guesses wrong
function incorrect() {
    timeLeft -= 10;
    score += 10;
    next();
}

//Increase the score by 15 if the user guesses right
function correct() {
    score += 10;
    timeLeft += 10;
    next();
}


// startId.style.display ="none";

// startId.style.display = "block";

// renderQuestions()

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
                endQuiz();
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



var quizContent = "<h2 class='text-white text-center'>" + questions[currentQuestion].questionTitle + "</h2>";

//for each loop
document.getElementById("highscore");