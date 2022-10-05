let userSelection = prompt("Player vs Computer: ROCK, PAPER, OR SCISSORS. Refresh the web to play again!").toLocaleLowerCase();
console.log("You chose" + userSelection);

let computerSelection = Math.random();

if (computerSelection >= 0 && computerSelection <= 0.34) {
    console.log("Computer Chose PAPER");
    if (userSelection == "rock" ) {
        document.write("Computer wins")
    }
    if (userSelection == ("paper") ) {
        document.write("It is a tie! try again")
    }
    if (userSelection == "scissors") {
        document.write("You win")
    }
    
} 
else if (computerSelection >= 0.35 && computerSelection <= 0.67) {
    console.log("Computer Chose SCISSORS");
    if (userSelection == ("paper")) {
        document.write("Computer wins")
    }
    if (userSelection == "scissors") {
        document.write("It is a tie! try again")
    }
    if (userSelection == "rock") {
        document.write("You win")
    }   
} 
else {
    console.log("Computer Chose ROCK");
    if (userSelection == "scissors") {
        document.write("Computer wins")
    }
    if (userSelection ==  "rock") {
        document.write("It is a tie! try again")
    }
    if (userSelection == ("paper")) {
        document.write("You win")
    }
}