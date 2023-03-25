/** ACCEPTANCE CRITERIA */

/** WHEN I click the start button
 * THEN a timer starts and I am presented with a question
 * WHEN I answer a question
 * THEN I am presented with another question 
 * WHEN I answer a question incorrectly 
 * THEN time is subtracted from the clock
 * WHEN all questions are answered or the timer reaches 0
 * THEN the game is over
 * WHEN the game is over
 * THEN I can save my initials and my score
 */


/** 10 questions, 4 html, 4 javascript, 2 css */

var headerContainer = document.querySelector(".header")

var startButton = document.querySelector(".startbtn")

var timerEl = document.getElementById("time")

startButton.addEventListener("click", function(){
    console.log("clicked");
    headerContainer.style.display = "none"
    countDown()
})
var questions = [
    
    {
        question: "What does the acronym CSS stand for?",
        choices: ["a. Changing Style Sheets", "b. Cascading Style Sheets", "c. Color Style Sheets", "d. Colorbook Style Sheets"],
        answer: "b. Cascading Style Sheets"
    },
    {
        question: "What does the acronym HTML stand for?",
        choices: ["a. HyperText Markup Language", "b. HighTest Markings Level", "c. HouseplantTree Mini Love", "d. HoroscopeTesting Manufactor Lab"],
        answer: "a. HyperText Markup Language",
    },
    {
        question: "JavaScript is the scripting language of Java?",
        choices: ["a. TRUE", "b. FALSE"],
        answer: "b.FALSE",
    },
    {
        question: "Does the acronym DOM stand for Document Object Model?",
        choices: ["a TRUE", "b. FALSE"],
        answer: "a. TRUE",
    },
    {
        question: "Where do you put your JavaScript code?",
        choices: ["a. <head>", "b. <title>", "c. <script>", "d. <body>"],
        answer: "c. <script>"
    },
    {
        question: "What is the largest header in HTML by default?",
        choices: ["a. h6", "b. h4", "c. h2", "d. h1"],
        answer: "d. h1"
    },
    {
        question: "An array is a special type of boolean in Javascript that can hold more than one value?",
        choices: ["a. TRUE", "b. FALSE"],
        answer: "b. FALSE",
    },
    {
        question: "Which attribute allows an image link to show a text label if the image cannot be displayed?",
        choices: ["a. src", "b. alt", "c. lang", "d. title"],
        answer: "b. alt",
    },
    {
        question: "Which one of these is not used to declare a JavaScript variable?",
        choices: ["a. var", "b. const", "c. for", "d. let"],
        answer: "c. for",
    },
    {
        question: "What property is used to change the background color in CSS?",
        choices: ["a. background-color", "b. color-background", "c. color-space", "d. color-choice"],
        answer: "a. background-color",
    },


]



// timer
// is numbers
// numbers decrement
// once a number
// console.log(quizTimer)
function countDown() {
    var quizTimer = 100
var quizCounter = setInterval(function(){
    if (quizTimer <= 0) {
        clearInterval(quizCounter)
    }  
    timerEl.innerHTML=quizTimer
   quizTimer -- 
}, 1000)
}

// loop over the questions 
// loop over the quiz options 
//antime you click on an option it displays correct or wrong and then moves on to the next quesion. 
// most important part: SEARCH UP GLOBAL INDEX. 
// search up what is a global index. 