describe ('generateMultiplicationTs', function(){
  // var multiplicationTables;
  const inputPimesArray = [2,3,5,7,11];
  const expectedOutput = [ [ 2, 3, 5, 7, 11 ],
  [ null, 2, 4, 6, 8, 10 ],
  [ 3, 6, 9, 12, 15, 18 ],
  [ 5, 10, 15, 20, 25, 30 ],
  [ 7, 14, 21, 28, 35, 42 ],
  [ 11, 22, 33, 44, 55, 66 ] ]

  const inputPimesArray2 = [2,3,5];
  const expectedOutput2 = [ [ 2, 3, 5 ], [ 2, 4, 6 ], [ 3, 6, 9 ], [ 5, 10, 15 ] ]

  beforeEach(function(){
    multiplicationTables = new GenerateMultiplicationTs();
  });

  it("Is initalized with an empty array", function(){
    expect(multiplicationTables.multiplicationTsArray).toEqual([])
  });

  it("Generates an array of multiplication tables for each of the numbers in the primes array passed to it.", function(){
    multiplicationTables.addPrimesArrayToMTsArray(inputPimesArray)
    expect(multiplicationTables.multiplicationTsArray).toEqual(expectedOutput)
  });

  it("Generates an array of multiplication tables for each of the numbers in the primes array passed to it.", function(){
    multiplicationTables.addPrimesArrayToMTsArray(inputPimesArray2)
    expect(multiplicationTables.multiplicationTsArray).toEqual(expectedOutput2)
  });

  it("The length of the multiplication table arrays is the same as length of the primes array passed to it.", function(){
    multiplicationTables.addPrimesArrayToMTsArray(inputPimesArray)
    expect(multiplicationTables.multiplicationTsArray.length).toEqual(6)
  });

});
