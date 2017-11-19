var GenerateMultiplicationTs = function(){
    this.primesArray = "unset";
};

GenerateMultiplicationTs.prototype.gMTables = function(primesArray){
  var length = primesArray.length
  primesArray.forEach((number)=> {
    counter = 1
    while (length >= counter) {
      array = new Array
      for(i=0; i < length; i++){
        array.push(number * i)
      }
      counter +=1
    };
    primesArray.push(array)
  });
   this.primesArray = primesArray;
   return this.primesArray;
};

GenerateMultiplicationTs.prototype.output = function (){
   console.log("primes array")
   console.log(this.primesArray)
   this.primesArray.forEach((array)=>{
     array.forEach((num)=>{
       console.log(num)
     });
   });
};

gm = new GenerateMultiplicationTs();
gm.gMTables([2,3,5,7,11]);

module.exports.GenerateMultiplicationTs = GenerateMultiplicationTs;

var array = [2,3,5,7,11];
var length = array.length

var newArray = array.map(function(element){
  counter = 1
  while (length >= counter) {
    array2 = new Array
    for(i=1; i <= length; i++){
      array2.push(element * i)
    }
    counter +=1
  };
  var array3 = new Array
  array3.push(array2)
  return array3;
});

console.log(array);
console.log(newArray);

newArray.unshift(array)
