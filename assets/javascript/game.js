var winCounter = 0;
var lossesCounter = 0;
var guessLeftCounter = 10;
var guessMadeCounter = "";
var letters = "abcdefghijklmnopqrstuvwxyz";
var lettersarray = letters.split('');
var randomLetter = Math.floor(Math.random() * 26);
function reset (){
    guessLeftCounter = 10;
    guessMadeCounter = "";
    randomLetter = Math.floor(Math.random() * 26);
}
document.onkeyup = function (event){
   
if (event.key === lettersarray[randomLetter]) {  
    document.getElementById("winCounter").innerHTML = "Wins: " + ++winCounter;
    document.getElementById("announcement").innerHTML =  "Congrats, you won!";
    reset();
}
else if (((lettersarray.indexOf(event.key) != -1)) && guessLeftCounter > 0) {
    document.getElementById("guessLeftCounter").innerHTML = "Guesses Left: " + --guessLeftCounter;
    guessMadeCounter += event.key;
    document.getElementById("guessMadeCounter").innerHTML = "Your guesses so far: " + guessMadeCounter;
    document.getElementById("announcement").innerHTML =  "keep guessing";
}
else if (((lettersarray.indexOf(event.key) == -1))){
    document.getElementById("announcement").innerHTML =  "that's not a good guess!";
}
else {
    document.getElementById("lossesCounter").innerHTML = "Losses: " + ++lossesCounter;
    document.getElementById("announcement").innerHTML =  "Sorry, you lost. Play again!";
    reset();
}
}