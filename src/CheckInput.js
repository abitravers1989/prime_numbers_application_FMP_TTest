// This repo/ function will: 1st be passed the number which has been input by the user.
// 2nd check the input number against the given criteria.
// 3rd It will return true or false depending on passing or failing the criteria.

var CheckInput = function() {
  this.inputNrCorrect = false;
};

// checking it is not a string
CheckInput.prototype.isString = function (userInput){
  if (isNaN(userInput)) this.inputNrCorrect = false;
};

CheckInput.prototype.validNumber = function (userInput){
   this.isString(userInput);
   if ( (userInput >= 1) && ((userInput%1) == 0) && (isFinite(userInput) === true)) this.inputNrCorrect = true;
   return this.inputNrCorrect
};

// CheckInput.prototype.return = function(){
//   return this.inputNrCorrect
// }

// module.exports.CheckInput = CheckInput;
