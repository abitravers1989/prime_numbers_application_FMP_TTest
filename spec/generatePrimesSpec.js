describe ('generatePrime', function(){
  var generatePrime;

  beforeEach(function(){
    generatePrime = new GeneratePrimes();
  });

  it("Is initialized with an empty array", function(){
    expect(generatePrime.primesarray).toEqual([]);
  });

  it("Generated an array of prime numbers which is as long as the number passed to it. (The input number).", function(){
    expect(generatePrime.createArrayofPrimes(2)).toEqual([2, 3])
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

  it("The isPrime method returns false for 0", function(){
    result = generatePrime._isPrime(0)
    expect(result).toEqual(false)
  });

  it("The isPrime method returns false for 1", function(){
    result = generatePrime._isPrime(1)
    expect(result).toEqual(false)
  });

  it("The isPrime method returns true for 2", function(){
    result = generatePrime._isPrime(2)
    expect(result).toEqual(true)
  });

  it("The isPrime method returns true for 3", function(){
    result = generatePrime._isPrime(3)
    expect(result).toEqual(true)
  });

  it("The isPrime method returns false for 4", function(){
    result = generatePrime._isPrime(4)
    expect(result).toEqual(false)
  });

  it("The isPrime method returns false for -100", function(){
    result = generatePrime._isPrime(-100)
    expect(result).toEqual(false)
  });

  it("The isPrime method returns false for 9.78", function(){
    result = generatePrime._isPrime(9.78)
    expect(result).toEqual(false)
  });

  it("The isPrime method works for a large number such as, 1000000000000000000", function(){
    result = generatePrime._isPrime(1000000000000000000)
    expect(result).toEqual(false)
  });

});
