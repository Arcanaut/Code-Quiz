
let currentQuestionIndex = 0;


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


//these will be later be styled to appear/disappear based on checkAnswer
var feedbackC = document.getElementById("answerCorrect")
var feedbackW = document.getElementById("answerWrong")
//answerCorrect.setAttribute.(hidden);
feedbackC.style.visibility = "hidden";
feedbackW.style.visibility = "hidden";
// answerCorrect.style.display="hidden";
// answerWrong.style.display="hidden";
//each question has scoped variables for each answer choice so that it can be used multiple times without affecting each other

let questions = [
    {
        question: "String values must be enclosed in _____ when being assigned to variables",
        choiceA: "commas",
        choiceB:"curly brackets",
        choiceC:"quotes",
        choiceD:"brackets",
        correct:"quotes",
    },
    {
        question: "A very useful tool during development and debugging for print content is ____",
        choiceA: "for loops",
        choiceB: "console.log",
        choiceC: "terminal bash",
        choiceD:"Javascript",
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
        choiceA:  "strings",
        choiceB: "alerts",
        choiceC: "booleans",
        choiceD: "numbers",
        correct: "C",
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


let lastQuestion = questions.length-1;
//this goes through the various questions in the array. 



function renderQuestions(){
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
    
    //for(currentQuestionIndex++ =<lastQuestion){};
};

//compares the answer submitted to the correct one
function checkAnswer(event){
    let q = questions[currentQuestionIndex]

    console.log(event.target.innerHTML)
    if (event.target.innerHTML == q.correct) {feedbackC.style.visibility="visible";}
    else (feedbackW.style.visibility="visible");

};

// start.style.display ="none";
renderQuestions();
start.style.display ="block";

//start quiz

/*function startQuiz(){
    start.style.display ="none";
    renderQuestions();
    start.style.display ="block"
}*/



//add class remove class in css

//for each loop

// {answerWrong.style.display="visible";
// if (event.target.innerHTML == q.correct){answerCorrect.style.display
// }
//     }