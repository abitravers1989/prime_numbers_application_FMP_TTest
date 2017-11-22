var generateMultiplicationTables = function(){
  this.multiplicationTsArray = new Array;
};

GenerateMultiplicationTables.prototype.gMTableslogic = function(primesArray){
  var newArray = new Array
  var length = primesArray.length
  primesArray.map(function(element){
    counter = 1
    while ((length+1) >= counter) {
      array2 = new Array
      for(i=1; i <= (length+1); i++){
        array2.push(element * i)
      }
      counter +=1
    };
    newArray.push(array2);
  });
  this.multiplicationTsArray = newArray
  return newArray;
};

generateMultiplicationTables.prototype.addPrimesArrayToMTsArray = function(primesArray){
  this.gMTableslogic(primesArray);
  primesArray.unshift('-');
  this.multiplicationTsArray.unshift(primesArray)
};

module.exports.generateMultiplicationTables = generateMultiplicationTables;


gm = new generateMultiplicationTables();
gm.addPrimesArrayToMTsArray([2, 3, 5])
console.log(gm.multiplicationTsArray);
