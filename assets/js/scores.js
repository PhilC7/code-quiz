/******************************
*   Declare Global Variables  
******************************/

var clearBtn = document.getElementById("clear");
var scoreList = document.getElementById("highscores");


/******************************
*   Submit Scores
******************************/

function clearScores() {
    localStorage.clear("highscores"); // clears local storage from any scores.
    highscores.innerHTML = ""; // clears HTML from any scores
}


/******************************
*   Display Scores
******************************/

function displayScore() {

    var highscores = JSON.parse(localStorage.getItem("highscores"));

    // for each loop to display each score in local storage
    highscores.forEach(playerScore => {
        var listItem = document.createElement("li");
        listItem.textContent = `${playerScore.playerName} - ${playerScore.score}`;
        scoreList.appendChild(listItem);
    });
    // event listener to clear scores
    clearBtn.addEventListener("click", clearScores);
}

// call function to display scores
displayScore();
