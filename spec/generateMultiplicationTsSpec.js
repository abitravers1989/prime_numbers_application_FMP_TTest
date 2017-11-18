describe ('generateMultiplicationTs', function(){
  var generatePrime;

  beforeEach(function(){
    multiplicationTables = new GenerateMultiplicationTs();
  });

  it("IS given an array of prime numbers", function(){
    multiplicationTables.primesarray
  });

  it("Generates an array of multiplication tables for each of the numbers in the primes array passed to it.", function(){
    multiplicationTables.generateMultiplicationTables([2, 3, 5, 7, 11])
    // expect(generatePrime.primesarray).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71])
  });

  it("The length of the multiplication table arrays is the same as length of the primes array passed to it.", function(){
    multiplicationTables.generateMultiplicationTables([2, 3, 5, 7, 11])
    // expect(generatePrime.primesarray.length).toEqual(20000)
  });

});
