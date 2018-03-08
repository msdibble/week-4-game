// Start the game

$(document).ready(function () {

// A random number between 19 - 120 is given

var randomNumber = Math.floor(Math.random() * 100 + 20);
    console.log(randomNumber);

$('#selectNum').text(randomNumber);

// Each crystal has a random value between 1 - 12

var num1 = Math.floor(Math.random() * 11 + 1);
    console.log(num1);
var num2 = Math.floor(Math.random() * 11 + 1);
    console.log(num2);
var num3 = Math.floor(Math.random() * 11 + 1);
    console.log(num3);
var num4 = Math.floor(Math.random() * 11 + 1);
    console.log(num4);


var gameSetUp = function () {
    randomNumber = Math.floor(Math.random() * 100 + 20);
    console.log(randomNumber);
    $('#selectNum').text(randomNumber);

    num1 = Math.floor(Math.random() * 11 + 1);
    console.log(num1);
    num2 = Math.floor(Math.random() * 11 + 1);
    console.log(num2);
    num3 = Math.floor(Math.random() * 11 + 1);
    console.log(num3);
    num4 = Math.floor(Math.random() * 11 + 1);
    console.log(num4);

    totalScore = 0;
    $('#keptScore').text(totalScore);
}
// Number of wins and number of losses

var numWins = 0;
var numLosses = 0;

$('winNum').text(numWins);
$('lossNum').text(numLosses);
// Total score of the user

var totalScore = 0;

$('#keptScore').text(totalScore);

// First crystal is clicked and the random value that it is assigned is added to the total score

$('#crystal1').on('click', function () {
    totalScore = totalScore + num1;
    $('#keptScore').text(totalScore);
    gameResult ();
})

// Second crystal is clicked and the random value that it is assigned is added to the total score

$('#crystal2').on('click', function () {
    totalScore = totalScore + num2;
    $('#keptScore').text(totalScore);
    gameResult ();
})

// Third crystal is clicked and the random value that it is assigned is added to the total score

$('#crystal3').on('click', function () {
    totalScore = totalScore + num3;
    $('#keptScore').text(totalScore);
    gameResult ();
})

// Fourth crystal is clicked and the random value that it is assigned is added to the total score

$('#crystal4').on('click', function () {
    totalScore = totalScore + num4;
    $('#keptScore').text(totalScore);
    gameResult ();
})

// Losing vs winning the game

var gameResult = function () {
    if (totalScore > randomNumber) {
        alert ("You lose!"); 
        gameSetUp ();
        numLosses++;
        $('#lossNum').text(numLosses);
    }

    else if (totalScore === randomNumber) {
        alert ("You win!")
        gameSetUp ();
        numWins++;
        $('#winNum').text(numWins);
    }
       
}


})