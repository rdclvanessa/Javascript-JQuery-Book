var score1 = 8; //Round 1 score
var score2 = 8; //Round 2 score
var pass1 = 6;  //Round 1 pass mark
var pass2 = 6;  //Round 2 pass mark

//Check whether user passed one of the 2 round, store as var
var minPass = ((score1 >= pass1) || (score2 >= pass2));

//Create message
var msg = 'Resit required: ' + !(minPass);

//Write msg into the page
var el = document.getElementById('answer');
el.textContent = msg;