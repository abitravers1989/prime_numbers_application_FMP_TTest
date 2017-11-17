describe ('generatePrime', function(){
  var generatePrime;

  beforeEach(function(){
    generatePrime = new GeneratePrime();
  });

  it("Is initialized with an empty array", function(){
    expect(generatePrime.primesarray).toEqual([]);
  });

  it("Generated an array of prime numbers which is as long as the number passed to it. (The input number).", function(){
    generatePrime.createArrayofPrimes(2)
    expect(generatePrime.primesarray).toEqual([2, 3])
  });

  it("Generated an array of prime numbers which is as long as the number passed to it. (The input number).", function(){
    generatePrime.createArrayofPrimes(10)
    expect(generatePrime.primesarray).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ])
  });

  it("Generated an array of prime numbers which is as long as the number passed to it. (The input number).", function(){
    generatePrime.createArrayofPrimes(20)
    expect(generatePrime.primesarray).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71])
  });

  it("It can generate up to 20,000 prime numbers", function(){
      generatePrime.createArrayofPrimes(20000)
      expect(generatePrime.primesarray.length).toEqual(20000)
    });

});
