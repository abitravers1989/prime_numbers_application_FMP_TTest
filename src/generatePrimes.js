array = []

var GeneratePrimes = function () {
  this.primesarray = [];
};

GeneratePrimes.prototype.createArrayofPrimes = function (inputNumber) {

  var number = 2;

  Loop from number to inputNumber

  check each of these is not divisible by 2 and 3

  i = 2
  while(array.length < inputNumber) {
    if i.isPrime   array << i
    i++
  }
}

}


GeneratePrimes.Prototype.isPrime = function(){
  for(var i = 2; i < num; i++)
   if(num % i === 0) return false;
 return num !== 1;
}













var GeneratePrimes = function (){
  //  Find all prime numbers less than this number
  var max_size = 1000;

    // Initialize the array.
  var number_list = new Array(max_size);

  // Omit all multiples of two except 2 itself.
  numberList[2] = 1;
  for(var i=3; i< max_size; i+=2)
  // Iterator starts at 3. then increments itself till the max size. It increases by 2 at a time.
  {
    numberList[i] = 1;
  }
  // Omit all other non-prime numbers.
  for(var i = 3; i < max_size; i +=2)
  {
    for(var j = 3; i* j < max_size; j +=2)

    {
      numberList[i*j] = 0;
    }
  }
};
