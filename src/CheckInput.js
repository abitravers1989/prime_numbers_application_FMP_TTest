var CheckInput = function(userInput) {
  this.userInput = userInput;
  // Why is this.inputNrCorrect undefined here?
  this.inputNrCorrect = false;
};

// checking it is not a string
CheckInput.prototype.isString = function (){
   if (Number.isNaN(this.userInput) !== true) {
     this.inputCorrect = true;
     return this.inputCorrect
     console.log(this.inputCorrect)
   // }; else {
   //   this.inputCorrect = false;
   // };
};

CheckInput.prototype.validNumber = function (userInput){
   if (this.userInput > 1) {
     this.inputCorrect = true
   };
 };
};
//
module.exports.CheckInput = CheckInput;

checkInput = new CheckInput("nnn");
checkInput.isString()
checkInput.inputNrCorrect
console.log(checkInput.inputNrCorrect)

checkInpu = new CheckInput(8);
checkInpu.isString()
checkInpu.inputNrCorrect
console.log(checkInpu.inputNrCorrect)

checkInput = new CheckInput(-1);
checkInput.isString();
checkInput.validNumber()
checkInput.inputNrCorrect
console.log(checkInput.inputNrCorrect)
