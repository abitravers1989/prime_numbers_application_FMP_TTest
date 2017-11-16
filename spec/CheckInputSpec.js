// This repo/ function will: 1st be passed the number which has been input by the user.
// 2nd check the input number against the given criteria.
// 3rd After checks are done either pass an error message to the function responsible for console in and output, or pass the number to the function responsible for calculating if it is prime.

describe("checkInput", function (){
  var checkInput;

  beforeEach(function(){
    checkInput = new CheckInput();
  });

  it("Returns true if the User Number (input number) which has been passed to it is a positive number which is higher than 1 and lower than infinity", function(){
    checkInput.validNumber(8)
    expect(checkInput.inputNrCorrect.toEqual(true));
  });

  it("Checks the User Number is not a string. It returns false if it is a string.", function(){
    checkInput.isString("not-number");
    expect(checkInput.inputNrCorrect).toEqual(false);
  });


  it("Returns false if the User Number is less than one. Negative value test", function(){
    checkInput.validNumber(-1)
    expect(checkInput.inputNrCorrect).toEqual(false);
  });

  it("Returns false if the User Number is less than one. Zero value test", function(){
    checkInput.validNumber(0)
    expect(checkInput.inputNrCorrect).toEqual(false);
  });


  it("Returns false if the User Number is a number lower than infinity", function(){
    checkInput.validNumber(100000000000000000000)
    expect(checkInput.inputNrCorrect).toEqual(false);
  });

  it("Returns false if the User Number is not a decimal number, if it is it sets this.inputNrCorrect to false", function(){
    checkInput.validNumber(9.88)
    expect(checkInput.inputNrCorrect).toEqual(false);
  });
});
