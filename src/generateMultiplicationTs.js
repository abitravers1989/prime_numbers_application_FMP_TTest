var GenerateMultiplicationTs = function(){
    this.primesArray = "unset";
};

GenerateMultiplicationTs.prototype.gMTables = function(primesArray){
  var length = primesArray.length
    primesArray.forEach((number)=> {
      counter = 1
      while (length >= counter) {
      array = new Array
      length times do
         array.push(number * counter)
      end
    counter +=1
      // console.log(array)
    };
    primesArray.push(array)
  });
    this.primesArray = primesArray;
    return this.primesArray;
};

gm = new GenerateMultiplicationTs();
gm.gMTables([2,3,5,7,11]);

module.exports.GenerateMultiplicationTs = GenerateMultiplicationTs;
