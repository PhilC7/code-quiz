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
var time = document.getElementById("time");

/******************************
*   Set Variables  
******************************/

var score = 0;
var timeLeft; // Declare timeLeft 
var countdown; // Declare countdown
var questionNumber = 0;


/******************************
*   Event Listeners  
******************************/

// Start game
startScreen.addEventListener("click", startGame)

/******************************
*   Start Game  
******************************/
function startGame(event) {
    resetGame();
    // Hide start screen
    startScreen.classList.add("hide");
    // Show question container
    questionContainer.classList.remove("hide");

}


/******************************
*   Quiz Reset 
******************************/

function resetGame() {
    score = 0;
    timeLeft = 75;
    time.textContent = timeLeft;
    timer();
}

/******************************
*   Timer Function
******************************/
function timer() {
    countdown = setInterval(function () {
        timeLeft--
        time.textContent = timeLeft;

        if (timeLeft === 0) {
            //add stop game function
        }
    }, 1000) // countdown 1 second at a time
}



/******************************
*   Reference to question access - Delete logs when finished
******************************/
// access to questions
console.log(questions[0].title);
// access to choices
console.log(questions[0].choices);
// access to correct answer
console.log(questions[0].answer);
