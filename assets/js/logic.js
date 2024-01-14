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

// Submit scores
submitBtn.addEventListener("click", submit);


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
*   Ask Question
******************************/

function askQuestion() {

    choiceContainer.innerHTML = "";
    // set current question to array number
    currentQuestion = questions[questionNumber];
    questionTitle.textContent = currentQuestion.title;
    displayChoices()


};


/******************************
*   Display Choices
******************************/

function displayChoices() {
    currentQuestion.choices.forEach(choice => {
        //declare button variable and create button
        var button = document.createElement("button");

        // set button text
        button.textContent = choice;

        //add button to choices container
        choiceContainer.appendChild(button)

        button.addEventListener("click", checkAnswer)
    })
}


/******************************
*   Check Answer
******************************/

function checkAnswer(event) {
    var answer = currentQuestion.answer;
    var selectedAnswer = event.target
    if (selectedAnswer.textContent == answer) {
        feedbackContainer.textContent = "Correct!";
        feedbackContainer.classList.remove("hide");
    } else if (selectedAnswer.textContent !== answer) {
        timeLeft -= 10;
        time.textContent = timeLeft;
        feedbackContainer.textContent = "Incorrect!";
        feedbackContainer.classList.remove("hide");
    }

    setTimeout(function () {
        feedback.classList.add("hide");
        feedback.textContent = "";
    }, 1000);

    questionNumber++;

    if (currentQuestion === questions.length) {
        questionContainer.classList.add("hide");
        endScreen.classList.remove("hide");
    } else {
        askQuestion();
    }
}


/******************************
*   Next Question
******************************/

function nextQuestion() {
    feedbackContainer.classList.add("hide");
    currentQuestion++
    choiceContainer.innerHTML = "";
    questionTitle.textContent = "";
}


/******************************
*   Timer
******************************/

function timer() {
    var countdown = setInterval(function () {
        timeLeft--

        if (timeLeft > 0) {
            time.textContent = timeLeft;
        }

        // End game
        if (timeLeft <= 0 || questionNumber === questions.length) {
            clearInterval(countdown); // stop timer
            score = timeLeft; // add value of time left to score
            finalScore.textContent = score; // add value of score to final score
            time.textContent = 0; // reset timer
            questionContainer.classList.add("hide"); //hide questions
            endScreen.classList.remove("hide"); // show end screen
        }
    }, 1000) // countdown 1 second at a time
}


/******************************
*   Submit Scores
******************************/

function submit(event) {
    event.preventDefault();

    var playerName = initials.value.trim();

    // get local storage of current scores and set as a variable
    var currentScore = JSON.parse(localStorage.getItem("highscores"));


    if (playerName.length <= 3) {
        // check if current score exists, if not create an empty array
        if (currentScore == null) currentScore = [];

        // // create empty object with key values
        var playerScore = {
            playerName,
            score,
        }

        //push player score object to current scores array
        currentScore.push(playerScore);

        // sort the order of scores
        currentScore.sort((a, b) => b.score - a.score);

        // set local storage
        localStorage.setItem("highscores", JSON.stringify(currentScore));

        // directs you to the highscores page.
        window.location.href = "highscores.html";
    } else {
        alert("Maximum of 3 characters. Please try again.");
    }
}