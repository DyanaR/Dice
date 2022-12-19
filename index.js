
//Dice Image 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = ("images/dice" + randomNumber1 + ".png");

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
//Dice Image 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = ("images/dice" + randomNumber2 + ".png");

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

//Winner Announcement
if ( randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!"
}
else if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩"
}
else {
  document.querySelector("h1").innerHTML = "Player 1 Wins 🚩"
}
