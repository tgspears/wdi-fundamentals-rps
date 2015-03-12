////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    }
    else if (randomNumber < 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    var move;
    // If a `move` has a value, your expression should evaluate to that value.
    move = move || getInput();
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    var move;
    // If a `move` has a value, your expression should evaluate to that value.
    move = move || randomPlay();
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (computerMove == "rock") {
        if (playerMove == "rock") {
            winner = "tie";
        }
            else if (playerMove == "paper") {
            winner = "player";
        }
            else if (playerMove == "scissors") {
            winner = "computer";
        }
        else {
            winner = "FINE NOBODY WINS I HOPE YOU'RE HAPPY!"
        }
    }
    if (computerMove == "paper") {
        if (playerMove == "rock") {
            winner = "computer";
        }
        else if (playerMove == "paper") {
            winner = "tie";
        }
        else if (playerMove == "scissors") {
            winner = "player";
        }
        else {
            winner = "FINE NOBODY WINS I HOPE YOU'RE HAPPY!"
        }
    }
    if (computerMove == "scissors") {
        if (playerMove == "rock") {
            winner = "player";
        }
        else if (playerMove == "paper") {
            winner = "computer";
        }
        else if (playerMove == "scissors") {
            winner = "tie";
        }
        else {
            winner = "FINE NOBODY WINS I HOPE YOU'RE HAPPY!"
        }
    }
    return winner;
}

function playToFive() {
    console.log("Ley's play Rock, Paper, Scissors!");
    var highScore = 0;
    var playerWins = 0;
    var computerWins = 0;
    
    while (highScore < 5) {
        var playerMove = getInput();
        var computerMove = randomPlay();
        
        var winner = getWinner(playerMove, computerMove);
    
        
        if (winner == "player") {
            playerWins += 1;
        }
        else if (winner == "computer") {
            computerWins += 1;
        }
        else if (winner == "tie") {
            playerWins += 1;    
            computerWins += 1;
        }
        else {
            break;
        }
        
        
        if (playerWins >= computerWins) {
            highScore = playerWins;
        }
        else {highScore = computerWins;}
        
        console.log("The player chose: " + playerMove);
        console.log("The computer chose: " + computerMove);
        console.log("The winner of that round was: " + winner);
        console.log("Player Score is: " + playerWins);
        console.log("Computer Score is: " + computerWins);
        console.log("The leader's score is: " + highScore);
        
        if (highScore === 5) {
            if (playerWins > computerWins) {
                console.log ("The player won!");
            }
            else if (computerWins > playerWins) {
                console.log ("The computer won!");
            }
            else {
                console.log("OMG it's a tie!");
            }
        }
    }
    return [playerWins, computerWins]
}