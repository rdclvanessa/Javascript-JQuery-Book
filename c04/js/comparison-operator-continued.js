var score1 = 90;    //Round 1 score
var score2 = 95;    //Round 2 score
var highscore = 75; //Round 1 high score
var highscore2 = 95;//Round 2 high score

// Check if scores are higher than current highscore
var comparison = (score1 + score2) > (highscore + highscore2);

//Write the message into the page
var el = document.getElementById('answer');
el.textContent = "New high score: " + comparison;