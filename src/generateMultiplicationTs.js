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

new array

primes array first 5

push into new array

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
