var currentQuestionIndex = 0;
var questions = [
{
    title:" Title 1",
    choices:[ "answer1", "answer2", "answer3","answer4"],
    answer: "answer2"
},{
    title:" Title 2",
    choices:[ "answer1", "answer2", "answer3","answer4"],
    answer: "answer2"
},{
    title:" Title 3",
    choices:[ "answer1", "answer2", "answer3","answer4"],
    answer: "answer2"
},{
    title:" Title 4",
    choices:[ "answer1", "answer2", "answer3","answer4"],
    answer: "answer2"
},{
    title:" Title 5",
    choices:[ "answer1", "answer2", "answer3","answer4"],
    answer: "answer2"
},{
    title:" Title 6",
    choices:[ "answer1", "answer2", "answer3","answer4"],
    answer: "answer2"
},{
    title:" Title 7",
    choices:[ "answer1", "answer2", "answer3","answer4"],
    answer: "answer2"
},{
    title:" Title 8",
    choices:[ "answer1", "answer2", "answer3","answer4"],
    answer: "answer2"
}
]
var time = questions.length * 15;
var timerId;

var questionsEl = document.getElementById("questions");

var timerEl = document.getElementById("time")
var choicesEl = document.getElementById("choices")
var submitBtn = document.getElementById("choices")
var startBtn = document.getElementById("start")
var initialsEl = document.getElementById("initials")
var feedbackEl = document.getElementById("feedback")

function startQuiz (){
// Hide start screen and unhide questions
timerId=setInterval(clockTick,1000)
timerEl.textContent=time
getQuestion()
}

function clockTick () {
time--
timerEl.textContent=time
if (time <= 0){
    quizEnd()
}

}

function getQuestion(){
    var currentQuestion=questions[currentQuestionIndex]
    var titleEl=document.getElementById("question-title")
    titleEl.textContent=currentQuestion.title
    choicesEl.innerHTML= ""
    currentQuestion.choices.forEach(function(choice){
        var choiceNode=document.createElement("button")
        choiceNode.setAttribute("class", "choice")
               // ^ for styling purposes^
        choiceNode.setAttribute("value", choice)
        choiceNode.textContent=choice
        choiceNode.onclick=questionClick
        choicesEl.appendChild(choiceNode)
    })

}

function questionClick(){
    if (this.value !== questions[currentQuestionIndex].answer)
{
    time=time- 15
    if (time < 0){
        time = 0
    }
    timerEl.textContent = time
    feedbackEl.textContent="Wrong"
    // if you want to come back and add sound effects, right here.
} else {
    feedbackEl.textContent = "Correct!"
    // other sound effect would go here.
}
 currentQuestionIndex++
 if (currentQuestionIndex===questions.length){
     quizEnd()
 } else {
     getQuestion()
 }
}

function quizEnd(){
    clearInterval(timerId)
    var finalScoreEl = document.getElementById("final-score")
    finalScoreEl.textContent=time
    // show end screen and hide questions
}






// function saveHighScore(localstorage.setitem)
startBtn.onclick = startQuiz