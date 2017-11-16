// This module is responsible for getting the input from the user then passing this number through the other classes
// Calling instances of them to then generate the prime number table.

// const CheckInput = require('./src/checkInput').CheckInput;
// const checkInput = new CheckInput();
const readline = require('readline');

// Creating an instance of the readline class.
// Each instance only accepts a single input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var runApplication = function(){
  rl.question("Please enter the numbers of PRIMES you want. A valid number is one which is higher than 1, not infinate, not a decimal number and of course a number not a string (Sorry to get all ruley on you!).", (userInput) => {
     console.log(userInput)
    if (checkInput.validNumber(userInput)){
     console.log("valid")
    rl.close();
    }
  // rl.close();
 });
}

runApplication();

// rl.question("Please enter a number to be PRIMED. A valid number is one which is higher than 1, not infinate, not a decimal number and of course a number not a string (Sorry to get all ruley on you!).", (userInput) => {
//   console.log(userInput)

//   // if (checkInput.inputNrCorrect === false) console.log("Sorry this is not a valid number please start again.")
//   // console.log(checkInput.inputNrCorrect);
//
