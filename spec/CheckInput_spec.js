// This repo/ function will: 1st be passed the number which has been input by the user.
// 2nd check the input number against the given criteria.
// 3rd After checks are done either pass an error message to the function responsible for console in and output, or pass the number to the function responsible for calculating if it is prime.

describe("checkInput", function (){
  var checkInput;
  checkInput = new CheckInput("not-number");

  // beforeEach(function(){
  //   checkInput = new CheckInput("not-number");
  // });

  it("Checks the input number which has been passed to it is not a string", function(){
    checkInput.isString();
    expect(checkInput.inputNrCorrect).toEqual(false);
  });

//   it("Checks the input number is a positive number", function(){
//     expect(checkInput.validNumber(-8).toEqual(false));
//     expect(checkInput.validNumber(8).toEqual(true));
//   })
});
