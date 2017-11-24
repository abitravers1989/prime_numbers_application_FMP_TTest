var CheckInput = function() {
  this.inputNrCorrect = false;
};


CheckInput.prototype.validNumber = function (userInput){
  if ( (!isNaN(userInput)) && (userInput >= 1) && ((userInput%1) == 0) && (isFinite(userInput)) ) this.inputNrCorrect = true;
   return this.inputNrCorrect
};

module.exports.CheckInput = CheckInput;
