var CheckInput = function(userInput) {
  this.userInput = userInput;
  this.inputNrCorrect = false;
};

// checking it is not a string
CheckInput.prototype.isString = function (){
   if (isNaN(this.userInput) === true) {
     console.log("nnn")
     this.inputCorrect = false
   }
   // else {
   //   this.inputCorrect = true
   // }
};

CheckInput.prototype.validNumber = function (userInput){
   if (this.userInput > 1) {
     this.inputCorrect = true
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
console.log(checkInput.inputNrCorrect)

checkInput = new CheckInput(-1);
checkInput.isString();
checkInput.validNumber()
checkInput.inputNrCorrect
console.log(checkInput.inputNrCorrect)
