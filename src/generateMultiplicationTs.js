var GenerateMultiplicationTs = function(){
  this.multiplicationTsArray = new Array;
};

GenerateMultiplicationTs.prototype.gMTableslogic = function(primesArray){
  var newArray = new Array
  primesArray.map(function(element){
    var length = primesArray.length
    counter = 1
    while (length >= counter) {
      array2 = new Array
      for(i=1; i <= length; i++){
        array2.push(element * i)
      }
      counter +=1
    };
    newArray.push(array2);
  });
  this.multiplicationTsArray = newArray
  return newArray;
};

GenerateMultiplicationTs.prototype.addPrimesArrayToMTsArray = function(primesArray){
  this.gMTableslogic(primesArray);
  this.multiplicationTsArray.unshift(primesArray)
};

gm = new GenerateMultiplicationTs();
gm.addPrimesArrayToMTsArray([2,3,5])
console.log(gm.multiplicationTsArray);
