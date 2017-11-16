var CheckInput = function() {
  // Why is this.inputNrCorrect undefined here?... because this is the window
  this.inputNrCorrect = false;
};

// checking it is not a string
CheckInput.prototype.isString = function (userInput){
   if (isNaN(userInput)) this.inputNrCorrect = false;
   console.log('String checked called');
   // return this.inputCorrect
};

CheckInput.prototype.validNumber = function (userInput){
   if (userInput >= 1) this.inputNrCorrect = true;
 };

//
// module.exports.CheckInput = CheckInput;

checkInput = new CheckInput();


checkInput.validNumber(8)
checkInput.inputNrCorrect
console.log(checkInput.inputNrCorrect)
//
//
// console.log(checkInput.inputNrCorrect)
//
// checkInput = new CheckInput(-1);
// checkInput.isString();
// checkInput.validNumber()
// checkInput.inputNrCorrect
console.log(checkInput.inputNrCorrect)
