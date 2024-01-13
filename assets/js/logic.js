/******************************
*   Declare Global Variables  
******************************/

var startScreen = document.getElementById("start-screen");
var startQuiz = document.getElementById("start");
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
var currentQuestion = 0;


/******************************
*   Event Listeners  
******************************/

// Start game
startQuiz.addEventListener("click", startGame)

/******************************
*   Start Game  
******************************/
function startGame(event) {
    resetGame();
    // Hide start screen
    startScreen.classList.add("hide");
    // Show question container
    questionContainer.classList.remove("hide");

    askQuestion();
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
*   Ask Question Function
******************************/

function askQuestion() {

    currentQuestion = questions[questionNumber];
    var title = currentQuestion.title;
    questionTitle.textContent = title;

    currentQuestion.choices.forEach(choice => {

        //declare button variable and create button
        var button = document.createElement("button");

        // set button text
        button.textContent = choice;

        //add button to choices container
        choiceContainer.appendChild(button)
        console.log(choice);
    });
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
*   Testing Section
******************************/








/******************************
*   Reference to question access - Delete logs when finished
******************************/
// access to questions
// console.log(questions[0].title);
// // access to choices
// console.log(questions[0].choices);
// // access to correct answer
// console.log(questions[0].answer);
