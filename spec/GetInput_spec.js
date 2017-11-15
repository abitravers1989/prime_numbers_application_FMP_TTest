// This repo/ function will: 1st be passed the number which has been input by the user.
// 2nd check the input number against the given criteria.
// 3rd After checks are done either pass an error message to the function responsible for console in and output, or pass the number to the function responsible for calculating if it is prime.

describe("CheckInput", function (){
  var checkInput;

  beforeEach(function(){
    checkInput = new CheckInput();
  });

  it("Checks the input number which has been passed to it is a number", function(){
    expect(checkInput.isNumber("not-number")).toEqual(false);
  });
});
