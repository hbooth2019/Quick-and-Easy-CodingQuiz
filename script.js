var startBtn = document.querySelector("#start-button")
var timeEl = document.querySelector("#timer")

var myQuestions = [
{
    question: "Question,"
    answers: ["answer1", "answer 2","answer 3","answer 4",]
    correctAns: "answer1"
   }
   {
    question: "Question,"
    answers: ["answer1", "answer 2","answer 3","answer 4",]
    correctAns: "answer1"
   }
   {
    question: "Question,"
    answers: ["answer1", "answer 2","answer 3","answer 4",]
    correctAns: "answer1"
   }
   {
    question: "Question,"
    answers: ["answer1", "answer 2","answer 3","answer 4",]
    correctAns: "answer1"
    question: "Question,"
    answers: ["answer1", "answer 2","answer 3","answer 4",]
    correctAns: "answer1"
   }
   {
    question: "Question,"
    answers: ["answer1", "answer 2","answer 3","answer 4",]
    correctAns: "answer1"
   }
   {
    question: "Question,"
    answers: ["answer1", "answer 2","answer 3","answer 4",]
    correctAns: "answer1"
   }
   {
    question: "Question,"
    answers: ["answer1", "answer 2","answer 3","answer 4",]
    correctAns: "answer1"
 } 


 ]

function renderQuestion(){
    document.querySelector(".questions").innerHTML = "";
    startQuiz.setAttribute("style"), display: none");
    document.querySelector(".quiz").setAttribute("style");
    var q = questions[j].questions;
    var questionEl = document.createElement("h2");



    for (var)
}
function counter (){
    interval = setInterval(function() => {
       document.querySelector("#timer")
       secondsLeft--;
       if(secondsleft === 0) {
       clearInterval;
       }
    }, interval);

}
function checkAnswer(){
    console.log("check");
    if (questions[j].correct !==event.target.textContent){
    }
    if (j < questions.length) {j++};
}
function endGame(){
    clearInterval;
    document.querySelector(".results")setAttribute("style", "display:block");

}
function storeScores(){

}

startQuiz.addEventListener("click,renderQuestion")
