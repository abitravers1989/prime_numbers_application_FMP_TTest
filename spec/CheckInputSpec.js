// This repo/ function will: 1st be passed the number which has been input by the user.
// 2nd check the input number against the given criteria.
// 3rd After checks are done either pass an error message to the function responsible for console in and output, or pass the number to the function responsible for calculating if it is prime.

describe("checkInput", function (){
  var checkInput;

  beforeEach(function(){
    checkInput = new CheckInput();
  });

  it("Checks the input number which has been passed to it is not a string", function(){
    checkInput.isString("not-number");
    expect(checkInput.inputNrCorrect).toEqual(false);
  });

  it("Checks the input number which has been passed to it is not a string", function(){
    checkInput.isString(4);
    expect(checkInput.inputNrCorrect).toEqual(true);
  });

  it("Checks the input number is a positive number which is higher than 1", function(){
    checkInput.isString(-1);
    checkInput.validNumber(-1)
    expect(checkInput.inputNrCorrect.toEqual(false));
  });

  it("Checks the input number is a positive number which is higher than 1 and lower than infinity", function(){
    checkInput.isString(8);
    checkInput.validNumber(8)
    expect(checkInput.inputNrCorrect.toEqual(true));
  });

  it("Checks the input number is a positive number which is lower than infinity", function(){
    checkInput.isString(100000000000000000000);
    checkInput.validNumber(100000000000000000000)
    expect(checkInput.inputNrCorrect.toEqual(false));
  });

  it("Checks the input number is not a decimal number, if it is it sets this.inputNrCorrect to false", function(){
    checkInput.isString(9.88);
    checkInput.validNumber(9.88)
    expect(checkInput.inputNrCorrect.toEqual(false));
  });
});
