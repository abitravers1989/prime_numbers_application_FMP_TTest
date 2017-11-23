var GenerateMultiplicationTables = function(){
  this.multiplicationTsArray = [];
};

GenerateMultiplicationTables.prototype._iterateThroughPrimesArray = function (primesArray){
  // Takes in the primes array and interates through, generating the multiplication tables, where the output is an array of arrays
  const newArray = new Array
  const tableLength = primesArray.length;
  primesArray.map(function(element){
    counter = 1
    while ((tableLength+1) >= counter) {
      array2 = new Array
      for(i=1; i <= (tableLength+1); i++){
        array2.push(element * i)
      }
      counter +=1
    };
    newArray.push(array2);
  });
  this.multiplicationTsArray = newArray
  return newArray;
};


GenerateMultiplicationTables.prototype.addPrimesArrayToMTsArray = function(primesArray){
  this._iterateThroughPrimesArray(primesArray);
  primesArray.unshift('-');
  this.multiplicationTsArray.unshift(primesArray)
};

module.exports.GenerateMultiplicationTables = GenerateMultiplicationTables;
