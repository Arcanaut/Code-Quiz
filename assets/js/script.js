let lastQuestionIndex = questions.length-1;
let runningQuestionIndex = 0;
let q = questions[runningQuestionIndex];

const start = document.getElementById("start");
const start = document.getElementById("quiz");
const start = document.getElementById("question");
const start = document.getElementById("counter");
const start = document.getElementById("timeGauge");
const start = document.getElementById("A");
const start = document.getElementById("B");
const start = document.getElementById("C");
const start = document.getElementById("D");


var countdownTimer = setInterval('secondPassed()', 1000);
const timeleft =timer.innerHTML

//each question has scoped variables for each answer choice so that it can be used multiple times without affecting each other

let questions = [
    {
        question: "String values must be enclosed in _____ when being assigned to variables",
        choiceA: "commas",
        choiceB:"curly brackets",
        choiceC:"quotes",
        choiceD:"brackets",
        correct:"C",
    },
    {
        question: "A very useful tool during development and debugging for print content is ____",
        choiceA: "for loops",
        choiceB: "console.log",
        choiceC: "terminal bash",
        choiceD:"Javascript",
        correct: "B",
},
{
    question: "Arrays in Javascript can be used to store ____",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "All of the above",
    correct: "D",
},
    {
        question: "Commonly used data types include all of the following EXCEPT _____",
        choiceA:  "strings",
        choiceB: "alerts",
        choiceC: "booleans",
        choiceD: "numbers",
        correct: "C",
},
{
    question: "The condition in an if/else statement is enclosed in _____",
    choiceA:  "quotes",
    choiceB: "curly brackets",
    choiceC: "parenthesis",
    choiceD: "square brackets",
    correct: "C",
}
]

function renderQuestions(){
    let q = questions[runningQuestionIndex]
    question.innerHTML = "<p>" + q.question + "</p>";
    choice.innerHTML = q.choiceA;
    choice.innerHTML = q.choiceB;
    choice.innerHTML = q.choiceC;
    choice.innerHTML = q.choiceD;
    runningQuestionIndex++;
};


//Countdown Timer
let count = 0;
var quizTime = 60000;
var timeLeft =quizTime-1000;
function counterRender(){
    if(quizTime)
}


function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct) === answer) {
        timeLeft++ 5000;
    } else{

    }



    var countdownTimer = setInterval('secondPassed()', 1000);
function answerIsCorrect(){};
function answerIsWrong(){};

