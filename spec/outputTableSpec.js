describe("outputTable", function (){

  var outputTable;
  const input2DArray = [ [ null, 2, 3, 5 ],
  [ 2, 4, 6, 8 ],
  [ 3, 6, 9, 12 ],
  [ 5, 10, 15, 20 ] ];

  const expectedOutput = [ '|   |  2|  3|  5|',
                           '|  2|  4|  6| 10|',
                           '|  3|  6|  9| 15|',
                           '|  5| 10| 15| 25|', ];

  beforeEach(function(){
    outputTable = new OutputTable();
  });

  it("Returns the input 2D array as a formatted table", function(){
    expect(outputTable.formattTable(input2DArray)).toEqual(expectedOutput);
  });

});
