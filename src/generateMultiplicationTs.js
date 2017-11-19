var GenerateMultiplicationTs = function(){
    this.primesArray = "unset";
};

GenerateMultiplicationTs.prototype.gMTables = function(primesArray){
  var length = primesArray.length
  primesArray.forEach((number)=> {
    counter = 1
    while (length >= counter) {
      array = new Array
      for(i=1; i < length; i++){
        array.push(number * i)
      }
      counter +=1
    };
    primesArray.push(array)
  });
   this.primesArray = primesArray;
   return this.primesArray;
};

gm = new GenerateMultiplicationTs();
gm.gMTables([2,3,5,7,11]);

module.exports.GenerateMultiplicationTs = GenerateMultiplicationTs;
