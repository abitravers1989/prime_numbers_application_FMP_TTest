var CheckInput = function() {
  // Why is this.inputNrCorrect undefined here?
  this.inputNrCorrect = false;
};

// checking it is not a string
CheckInput.prototype.isString = function (userInput){
   if (isNaN(userInput)) this.inputCorrect = false;
   console.log('String checked called');
   // return this.inputCorrect
};

CheckInput.prototype.validNumber = function (userInput){
   // this.isString(userInput)
   // console.log(userInput)
   // console.log("1")
   // console.log(this.inputCorrect)
   if (userInput >= 1) this.inputCorrect = true;
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
