function CheckInput(input) {
  this.input = input
  this.inputNrCorrect = true
};

// checking it is not a string
CheckInput.prototype.isString = function (){
   if (isNaN(this.input) === true) {
     this.inputCorrect = false
   }
};

module.exports.CheckInput = CheckInput;

checkInput = new CheckInput("not-number");
console.log(checkInput)

// CheckInput.prototype.validNumber = function(){
//   if this.input !=
// };
