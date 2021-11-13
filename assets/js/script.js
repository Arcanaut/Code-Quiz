let lastQuestion = questions.length-1;
let runningQuestionIndex = 0;


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
//this goes through the various questions in the array. 
function renderQuestions(){
    let q = questions[runningQuestionIndex]
    //displays the current question and answers
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    //proceeds to next question 
    runningQuestionIndex++;
};

start.style.display ="none";
renderQuestions();
start.style.display ="block";

let count
const time =60000; 
function renderCounter(){
if (count <= time)
counter.innerHTML = count;
count++}
else { count = 0;
}
Timer=setInterval(renderCounter, time)
function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct time + 5000;) {

    } else{time - 5000;

    }
};
start.addEventListener("click",startQuiz)
//start quiz

function startQuiz(){
    start.style.display ="none";
    renderQuestions();
    start.style.display ="block";
    

var Countdown = setTimeout(Timer[Delay, 6000;]){

}