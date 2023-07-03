var pass = 50;  //Pass mark
var score = 45; //Current score
var msg;        //Message

//Select message to write based on score
if (score >= 50){
    msg = 'Congrats! You passed :)';
} else {
    msg = 'Have another go!';
}

var el = document.getElementById('answer');
el.textContent = msg;