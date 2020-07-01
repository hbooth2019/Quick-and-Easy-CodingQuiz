var secondsleft = 60 
var startQuiz = document.querySelector("start");
var questions = [
    {  question: "Question,"
      answers: ["answer1", "answer 2","answer 3","answer 4",]
      correctAns: "answer1",}
     
     {
      question: "Question,"
      answers: ["answer1", "answer 2","answer 3","answer 4",]
      correctAns: "answer1",
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
 ];

var score = 0;
var j = 0;
var interval;




function renderQuestion(){
    document.querySelector(".questions").innerHTML = "";
    startQuiz.setAttribute("style"), display: none");
    document.querySelector(".quiz").setAttribute("style");
    var q = questions[j].questions;
    var questionEl = document.createElement("h2");
    var ans = questions[j].answers;
    questionEl.textContent = q;
    document,querySelector("questions").appendChild(questionEl)


    for (var i = 0; i < ans.length; i++) 
    var ansBtn = document.createElement("button")
    ansBtn.textContent = ans[i];
    document.querySelector("questions").appendChild(ansBtn);
    ansBtn.addEventListener("click", checkAnswer);
}

function counter(){
    interval = setInterval(function() => {
       document.querySelector("#timer")
       secondsLeft--;
       if(secondsleft === 0) {
       clearInterval(interval);
     } else {
         return secondsLeft
     }, 1000;
    }
function checkAnswer(event){
    console.log("check");
    if (questions[j].correct !== event.target.textContent){
    }
    if (j < questions.length) {j++;
      renderQuestion()
    }
     else endGame();
} 
function endGame(){
    clearInterval;
    document.querySelector(".results")setAttribute("style", "display:block");
    localStorage.getItem()
}
function storeScores(){
    localStorage.setItem("score", secondsLeft);

}

startQuiz.addEventListener("click", renderQuestion)
startQuiz.addEventListener("click", counter)