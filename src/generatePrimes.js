var GeneratePrimes = function () {
  this.primesarray = [];
};

GeneratePrimes.prototype.createArrayofPrimes = function (inputNumber) {
  var number = 2;
  Loop from number to inputNumber

  check each of these is not divisible by 2 and 3

  i = 2
  while(array.length < inputNumber) {
    if num.isPrime   array << num
    i++
  }
}

}


GeneratePrimes.Prototype.isPrime = function(num){
  console.log(num)
  for(var i = 2; i < num; i++)
   if(num % i === 0) return false;
 return num !== 1;
}





function isPrime(n) {

   // If n is less than 2 or not an integer then by definition cannot be prime.
   if (n < 2) {return false}
   if (n != Math.round(n)) {return false}

   // Now assume that n is prime, we will try to prove that it is not.
   var isPrime = true;

   // Now check every whole number from 2 to the square root of n. If any of these divides n exactly, n cannot be prime.
   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {isPrime = false}
   }

   // Finally return whether n is prime or not.
   return isPrime;

}
