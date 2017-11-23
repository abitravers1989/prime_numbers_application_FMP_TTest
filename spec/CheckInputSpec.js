
describe("checkInput", function (){
  var checkInput;

  beforeEach(function(){
    checkInput = new CheckInput();
  });

  it("Returns true if the User Number (input number) which has been passed to it is a positive number which is higher than 1 and lower than infinity", function(){
    checkInput.validNumber(8)
    expect(checkInput.inputNrCorrect).toEqual(true);
  });

// Although don't need to test this as it is a private function
  it("Checks the User Number is not a string. It returns false if it is a string.", function(){
    checkInput._isNotString("not-number");
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
    checkInput.validNumber(Infinity)
    expect(checkInput.inputNrCorrect).toEqual(false);
  });

  it("Returns false if the User Number is not a decimal number, if it is it sets this.inputNrCorrect to false", function(){
    checkInput.validNumber(9.88)
    expect(checkInput.inputNrCorrect).toEqual(false);
  });
});
