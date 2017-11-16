var CheckInput = function() {
  // Why is this.inputNrCorrect undefined here?
  this.inputNrCorrect = false;
};

// checking it is not a string
CheckInput.prototype.isString = function (userInput){
   if (isNaN(userInput)) {
     inputCorrect = false;
     this.inputCorrect = inputCorrect
   } else {
     inputCorrect = true;
     this.inputCorrect = inputCorrect
   }
   return this.inputCorrect
};

CheckInput.prototype.validNumber = function (userInput){
   if (userInput > 1) {
     this.inputCorrect = true
   };
 };

//
// module.exports.CheckInput = CheckInput;

checkInput = new CheckInput();
checkInput.isString("nnn")
checkInput.inputNrCorrect

checkInput.isString(8)
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
