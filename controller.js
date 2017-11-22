// This module is responsible for getting the input from the user (through the console) then passing this number through the other classes
// Then outputting the table of primes and multiplication tables.

const CheckInput = require('./src/checkInput').CheckInput;
const checkInput = new CheckInput();
const readline = require('readline');
const GeneratePrimes = require('./src/generatePrimes').GeneratePrimes;
const generatePrimes = new GeneratePrimes();
const GenerateMultiplicationTables = require('./src/generateMultiplicationTables').GenerateMultiplicationTables;
const gMTs = new GenerateMultiplicationTables();
var Table = require('easy-table')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var runApplication = function(){
  rl.question("Please enter the numbers of PRIMES you want.", (userInput) => {
    if (checkInput.validNumber(userInput)){
     console.log("valid");
     generatePrimes.createArrayofPrimes(userInput)
     gMTs.addPrimesArrayToMTsArray(generatePrimes.primesarray);
     console.log(Table.print(gMTs.multiplicationTsArray))
    rl.close();
  } else {
     console.log("Sorry that number doesn't work, please enter one which is higher than 1 but not a decimal.");
     runApplication();
  }
 });
}

runApplication();
