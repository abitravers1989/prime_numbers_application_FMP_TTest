var CheckInput = function() {
  // Why is this.inputNrCorrect undefined here?... because this is the window
  this.inputNrCorrect = false;
};

// checking it is not a string
CheckInput.prototype.isString = function (userInput){
  if (isNaN(userInput)) this.inputNrCorrect = false;
};

CheckInput.prototype.validNumber = function (userInput){
   this.isString(userInput);
   if ( (userInput >= 1) && ((userInput%1) == 0) && (isFinite(userInput) === true)) this.inputNrCorrect = true;
};

// module.exports.CheckInput = CheckInput;
//
// checkInput = new CheckInput();
// checkInput.validNumber(8)
// checkInput.inputNrCorrect
// console.log(checkInput.inputNrCorrect)
//
// checkInput.validNumber("nnn")
// checkInput.inputNrCorrect
// console.log(checkInput.inputNrCorrect)
//
// checkInput.validNumber(9.888)
// checkInput.inputNrCorrect
// console.log(checkInput.inputNrCorrect)
