var score = 75;  //Score
var msg;        //message

if (score >= 50) {
    msg = 'Congrats!';
    msg += 'Proceed to the next round.';
}

var el = document.getElementById('answer');
el.textContent = msg;

