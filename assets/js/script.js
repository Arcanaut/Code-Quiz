const beginButtonEl = document.getElementById("beginButton");
const quiz = document.getElementById("quiz");
const questionsContainerEl = document.getElementById("question-container");
const highscore = document.getElementById("highscore");
const feedbackEl = document.getElementById("feedback");
const questionTitleEl = document.getElementById("questionHeader")
const questionAnswersEl = document.getElementById("questionAnswers")
const initialsEl = document.getElementById("initials")
const endScreenEl = document.getElementById("end-screen");
const endScreenSubmitEl= document.getElementById("end-screen-submit");
//this goes through the various questions in the array. 
//variables for score and timer functions
var score = 0;
let currentQuestionIndex = 0;
var timeLeft = 0;
var timer;

const timerEl = document.querySelector("#timer-toggle");

//each question has scoped variables for each answer choice so that it can be used multiple times without affecting each other

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


// After start is clicked, the timer begins to count down
function startTimer() {
    // make the timer visible when begin button is clicked
    timerEl.classList.replace("d-none", "d-block");

    timeLeft = 100;
    timerEl.textContent = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;

        // If timer hits below 0, the game ends
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }

    }, 1000);
    //changes the class of beginButtonEl to "class" so that the css with the same name stops it from displaying
    beginButtonEl.setAttribute("class", "hidden")
    renderQuestions();
}

//TODO: Rewrite renderQuestions so it isn't read as 'undefined in browser' 
//https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes


// function renderQuestions() {

//     console.log('Yosemite Mudflap');
//     let q = questions[currentQuestionIndex]
//     let questionsEl = document.getElementById("question-title");
//     questionsEl.textContent = questions.questionTitle;
//     choicesEl.innerHTML = '';
//     q.choices.forEach((choice, i) => {
//         const choiceButton = document.createElement("button")
//         choiceButton.setAttribute("value", choice)
//         choiceButton.textContent = i + 1 + ". " + choice;
//         choiceButton.onclick = checkAnswer;
//         choicesEl.appendChild(choiceButton);
//     })

// };

function renderQuestions() {
    var q = questions[currentQuestionIndex];
    questionsContainerEl.children[0].textContent = q.questionTitle


    var choiceButton = document.createElement("button");
    choiceButton.textContent = q.choices[i];
    questionAnswersEl.appendChild(choiceButton);
    // erase old text
    while (questionAnswersEl.hasChildNodes()) {
        questionAnswersEl.removeChild(questionAnswersEl.lastChild);
    };

    for (var i = 0; i < q.choices.length; i++) {
        // create buttons for each answer choice
        var questionChoicesButton = document.createElement("button");
        questionChoicesButton.textContent = q.choices[i];
        questionAnswersEl.appendChild(questionChoicesButton);
    };

    // create click listener for each answer choice
    questionAnswersEl.children[0].addEventListener("click", function (event) {
        checkAnswer(questionAnswersEl.children[0]);
    });
    questionAnswersEl.children[1].addEventListener("click", function (event) {
        checkAnswer(questionAnswersEl.children[1]);
    });
    questionAnswersEl.children[2].addEventListener("click", function (event) {
        checkAnswer(questionAnswersEl.children[2]);
    });
    questionAnswersEl.children[3].addEventListener("click", function (event) {
        checkAnswer(questionAnswersEl.children[3]);
    });

}


//compares the answer submitted to the correct one
function checkAnswer(event) {
    if (this.value !== questions[currentQuestionIndex].correct) {
        incorrect()
    } else {
        correct()
    };

    timerEl.textContent = timeLeft;
    currentQuestionIndex++
    if (currentQuestionIndex === questions.length) {
        endQuiz()
    } else {
        renderQuestions();
    }



    if (questions === questions.length) {
        endQuiz()
        return;
    } else {
        renderQuestions()
    }
};
//TODO: Finish setScore save function
// function setScore() {
    
// }


function endQuiz() {
    clearInterval(timer);

    var quizContent = `
        <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-dark">
        <h2 class="text-white">Game over!</h2>
        <h3 class="text-white">You got ` + score / 20 + ` questions correct!</h3>
        <h3 class="text-white">Because of your speed and accuracy, you got ` + score + ` points!</h3>
        
        <input type="text" id="$name" required="required" placeholder="Enter initials">
        <button class="btn btn-light mt-1" onclick="saveScore()">Save score!</button>
        </div>`;

    document.getElementById("final-score").innerHTML = quizContent;
}


//Deduct 10 seconds from the timer if user guesses wrong
function incorrect() {
    timeLeft -= 10;
    score += 10;

}

//Increase the score by 15 if the user guesses right
function correct() {
    score += 10;
    timeLeft += 10;

}


// renderQuestions()

// var quizContent = "<h2 class='text-white text-center'>" + questions[currentQuestionIndex].questionTitle + "</h2>";

// listen for score click and then run showScores()

// game logic

function startQuiz() {
    {
        // make the timer visible when begin button is clicked
        timerEl.classList.replace("d-none", "d-block");
        beginButtonEl.setAttribute("class", "hidden")
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

        renderQuestions()
    }
}
// view scores logic


var saveScore = function () {
    console.log('DOM SUCKS AT BASKETBALL')
    localStorage.setItem("highScore", JSON.stringify(highscore));

    const initials = initialsEl.value.trim('')

    // make sure the user didn't leave it blank

    if (initials !== "") {
        var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
        var newScore = {
            score: timer,
            initals: initials,
        } 
        highscores.push(newScore)
        window.localStorage.setItem('highscores',JSON.stringify(highscores))
        window.location.href = "leader-board.html"
    }
    
};

var loadhighScore = function () {
    var savedHighScore = localStorage.getItem("highScoreName", "highScore");
    // if there are no highScore, set highScore to an empty array and return out of the function
    if (!savedHighScore) {
        return false;
    }
    console.log("Saved highScore found!");
    
    // else, load up saved highScore

    // parse into array of objects
    savedHighScore = JSON.parse(savedHighScore);
}

// //function createItem() {
// 	localStorage.setItem('nameOfItem', 'value'); 
// } 
// createItem() // Creates a item named 'nameOfItem' and stores a value of 'value'

// function getValue() {
// 	return localStorage.getItem('nameOfItem');  
// } // Gets the value of 'nameOfItem' and returns it
// console.log(getValue()); //'value';

endScreenSubmitEl.addEventListener('click', saveScore)