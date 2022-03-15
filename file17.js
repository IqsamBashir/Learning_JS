// nested if else
// logic of game
//winning number 19
// if say 19 your guess is right
// if 17 too low
// if 20 too high 

let winningNumber = 19;
let userGuess = +prompt("Guess a number");
// console.log(typeof userGuess, userGuess);

if (userGuess === winningNumber)
{
    console.log("your guess is right");

}
else
{   
    if (userGuess < winningNumber)
    {
    console.log("your guess is too low");
    }
    else{
        console.log("our guess is too high");
    }
}
