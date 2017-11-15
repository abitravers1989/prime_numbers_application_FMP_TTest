// This repo/ function will: 1st be passed the number which has been input by the user.
// 2nd check the input number against the given criteria.
// 3rd After checks are done either pass an error message to the function responsible for console in and output, or pass the number to the function responsible for calculating if it is prime.

const CheckInput = require('../src/CheckInput').CheckInput;

describe("checkInput", function (){
  var checkInput;

  // beforeEach(function(){
  //   checkInput = new CheckInput();
  // });

  it("Checks the input number which has been passed to it is not a string", function(){
    checkInput = new CheckInput("not-number");
    checkInput.isString();
    expect(checkInput.inputNrCorrect).toEqual(false);
  });

  it("Checks the input number which has been passed to it is not a string", function(){
    checkInput = new CheckInput(4);
    checkInput.isString();
    expect(checkInput.inputNrCorrect).toEqual(true);
  });

  it("Checks the input number is a positive number", function(){
    checkInput = new CheckInput(-1);
    checkInput.isString();
    checkInput.validNumber()
    expect(checkInput.inputNrCorrect.toEqual(false));
  });

  it("Checks the input number is a positive number", function(){
    checkInput = new CheckInput(8);
    checkInput.isString();
    checkInput.validNumber()
    expect(checkInput.validNumber().toEqual(true));
  });
});
