var CheckInput = function() {
  this.inputNrCorrect = false;
};


CheckInput.prototype._isNotString = function (userInput){
  if (isNaN(userInput)) this.inputNrCorrect = false;
};

CheckInput.prototype.validNumber = function (userInput){
   this._isNotString(userInput);
   if ( (userInput >= 1) && ((userInput%1) == 0) && (isFinite(userInput) === true)) this.inputNrCorrect = true;
   return this.inputNrCorrect
};

module.exports.CheckInput = CheckInput;
