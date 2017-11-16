// This module is responsible for getting the input from the user then passing this number through the other classes
// Calling instances of them to then generate the prime number table.

const CheckInput = require('./src/checkInput').CheckInput;
const readline = require('readline');

// Creating an instance of the readline class.
// Each instance only accepts a single input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter a number to be PRIMED. A valid number is one which is higher than 1, not infinate, not a decimal number and of course a number not a string (Sorry to get all ruley on you!).", (userInput) => {
  console.log("You answered ${userInput}")
  rl.close();
});


// if (checkInput.inputNrCorrect === false) console.log("Please enter a valid number. Little reminder; a valid number is one which is higher than 1, not infinate, not a decimal number and of course a number not a string.")
