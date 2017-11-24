var GenerateMultiplicationTables = function(){
  this.multiplicationTsArray = [];
};

GenerateMultiplicationTables.prototype._calculateMultiplicationTablesofPrimes = function (primesArray){
  const newArray = new Array
  const tableLength = (primesArray.length+1);
  primesArray.map(function(element){
    counter = 1
    while ((tableLength) >= counter) {
      array2 = new Array
      for(i=1; i <= (tableLength); i++){
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
  this._calculateMultiplicationTablesofPrimes(primesArray);
  primesArray.unshift('-');
  this.multiplicationTsArray.unshift(primesArray)
};

module.exports.GenerateMultiplicationTables = GenerateMultiplicationTables;
