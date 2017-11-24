var CheckInput = function() {
  this.inputNrCorrect = false;
};


CheckInput.prototype._isNotString = function (userInput){
  if (isNaN(userInput)) this.inputNrCorrect = false;
};

CheckInput.prototype._isNotInfinate = function (userInput){
  if ((isFinite(userInput) === true)) this.inputNrCorrect = true;
};

CheckInput.prototype._isNotDecimal = function (userInput){
  if ((userInput%1) == 0)) this.inputNrCorrect = true;
};

CheckInput.prototype._isNotLessThanOne = function (userInput){
  if ((userInput >= 1)) this.inputNrCorrect = true;
};

CheckInput.prototype.validNumber = function (userInput){
   this._isNotString(userInput);
   this._isNotInfinate(userInput);
   this._isNotDecimal(userInput);
   this._isNotLessThanOne(userInput);
   return this.inputNrCorrect
};

module.exports.CheckInput = CheckInput;
