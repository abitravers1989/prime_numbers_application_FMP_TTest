describe ('generateMultiplicationTables', function(){

  const inputPimesArray = [2, 3, 5, 7, 11];


  const expectedOutput = [ [ '-', 2, 3, 5, 7, 11 ],
  [ 2, 4, 6, 8, 10, 12 ],
  [ 3, 6, 9, 12, 15, 18 ],
  [ 5, 10, 15, 20, 25, 30 ],
  [ 7, 14, 21, 28, 35, 42 ],
  [ 11, 22, 33, 44, 55, 66 ] ]

  const inputPimesArray2 = [2, 3, 5];

  const expectedOutput2 = [ [ '-', 2, 3, 5 ],
  [ 2, 4, 6, 8 ],
  [ 3, 6, 9, 12 ],
  [ 5, 10, 15, 20 ] ]

  beforeEach(function(){
    multiplicationTableGenerator = new GenerateMultiplicationTables();
  });

  it("Is initalized with an empty array", function(){
    expect(multiplicationTableGenerator.multiplicationTsArray).toEqual([])
  });

  it("Generates an array of multiplication tables for each of the numbers in the primes array passed to it.", function(){
    multiplicationTableGenerator.addPrimesArrayToMTsArray(inputPimesArray)
    expect(multiplicationTableGenerator.multiplicationTsArray).toEqual(expectedOutput)
  });

  it("Generates an array of multiplication tables for each of the numbers in the primes array passed to it.", function(){
    multiplicationTableGenerator.addPrimesArrayToMTsArray(inputPimesArray2)
    expect(multiplicationTableGenerator.multiplicationTsArray).toEqual(expectedOutput2)
  });

  it("The length of the multiplication table arrays is the length+1 of the primes array passed to it.", function(){
    const inputPrimeArrLength = inputPimesArray.length;
    multiplicationTableGenerator.addPrimesArrayToMTsArray(inputPimesArray);
    expect(multiplicationTableGenerator.multiplicationTsArray.length).toEqual(inputPrimeArrLength + 1);
  });

});
