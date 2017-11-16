const CheckInput = require('./src/checkInput').CheckInput;
var readLine = rquire('readline');

console.log("Please enter a number to be PRIMED. A valid number is one which is higher than 1, not infinate, not a decimal number and of course a number not a string (Sorry to get all ruley on you!).")
if (checkInput.inputNrCorrect === false) console.log("Please enter a valid number. Little reminder; a valid number is one which is higher than 1, not infinate, not a decimal number and of course a number not a string.")
