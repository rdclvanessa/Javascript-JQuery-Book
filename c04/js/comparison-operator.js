var pass = 50;   //Pass
var score = 90;  //Score

//Check if the user has passed
var hasPassed = score >= pass;

//Write the message into the page
var el = document.getElementById('answer');
el.textContent = 'Level passed: ' + hasPassed;