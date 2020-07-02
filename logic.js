var currentQuestionIndex = 0;
var questions = [
{
    title:" Commonly used data types do NOT include:",
    choices:[ "Strings", "Booleans", "Alerts","Burnt Cheese"],
    answer: "Alerts"
},{
    title:" Arrays in JavaScript are used to store ____.",
    choices:[ "Numbers and Strings", "Other Arrays", "Booleans","All of the above"],
    answer: "all of the above"
},{
    title:" NaN stands for:",
    choices:[ "Numbers-are-neat", "Not-a-Number", "New and nice","Not-a-nanny"],
    answer: "Not-a-Number"
},{
    title:" The greater than/or equal operator is:",
    choices:[ ">>", "<<>", ">=","<----<O"],
    answer: ">="
},{
    title:" What puts an Array together?:",
    choices:[ "Basketballs", "Quotes", "Curly Brackets","Squares Brackets"],
    answer: "Square Brackets"
},{
    title:" What are the 3 fundamentals of a webpage?:",
    choices:[ "HTML/JS/CSS", "HTML/RUBY/JASMINE", "VSSTUDIO/terminal/CSS","JS/Scripts/Errors"],
    answer: "HTML/JS/CSS"
},{
    title:"The condition in an if/ else statement is enclosed within _____. ",
    choices:[ "Quotes", "Curly Brackets", "Parentheses","Square Brackets"],
    answer: "Parentheses"
},{
    title:" What can you use the LS and CD commands?",
    choices:[ "Bash/terminal", "Javascript/CSS", "VSCODE","Internet Explorer"],
    answer: "Bash/terminal"
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






startBtn.onclick = startQuiz




