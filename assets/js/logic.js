/******************************
*   Declare Global Variables  
******************************/

var startScreen = document.getElementById("start-screen");
var questionContainer = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choiceContainer = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var feedbackContainer = document.getElementById("feedback");

/******************************
*   Set Variables  
******************************/

var score = 0;
var timer = 75;
var countdown; //variable to later set timer
