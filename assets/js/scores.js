var clearBtn = document.getElementById("clear");

/******************************
*   Event Listener
******************************/

clearBtn.addEventListener("click", clearScores);

/******************************
*   Submit Scores
******************************/

function clearScores() {
    localStorage.clear("highscores");
}