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
      // newArray.push(array2);
      // newArray.unshift(primesArray);
      // console.log(newArray);
      // return newArray;
    };
    newArray.push(array2);
    // return newArray;
    // console.log(this.multiplicationTsArray);
    // console.log("does this ever get logged");
  });
  // console.log(newArray)
  this.multiplicationTsArray = newArray
  return newArray;
  // this.multiplicationTsArray.unshift(primesArray);
  // console.log(this.multiplicationTsArray)
  // console.log("does this get logged")
}

GenerateMultiplicationTs.prototype.displayMultiplicationTsArray = function(primesArray){
  this.gMTableslogic(primesArray);
  this.multiplicationTsArray.unshift(primesArray)
};

gm = new GenerateMultiplicationTs();
// gm.gMTableslogic([2,3,5,7,11]);
gm.displayMultiplicationTsArray([2,3,5,7,11])
console.log(gm.multiplicationTsArray);
// console.log(gm.multiplicationTsArray)

// module.exports.GenerateMultiplicationTs = GenerateMultiplicationTs;

// var array = [2,3,5,7,11];
// var length = array.length
//
// var newArray = array.map(function(element){
//   var length = element.length
//   counter = 1
//   while (length >= counter) {
//     array2 = new Array
//     for(i=1; i <= length; i++){
//       array2.push(element * i)
//     }
//     counter +=1
//   };
//   var array3 = new Array
//   array3.push(array2)
//   return array3;
// });
//
// console.log(array);
// console.log(newArray);
//
// newArray.unshift(array)
