var GeneratePrimes = function () {
  this.primesarray = [];
};


GeneratePrimes.prototype.isPrime = function(n){
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
};

GeneratePrimes.prototype.createArrayofPrimes = function (inputNumber) {
  // var primesarray = [];
  var number = 2;
  while(this.primesarray.length < inputNumber) {
    if (this.isPrime(number)) { this.primesarray.push(number) }
    number+=1;
    // If i return the primes array here then it only sets the first one then ends the loop
  }
  return this.primesarray;
}

generatePrimes = new GeneratePrimes();
generatePrimes.createArrayofPrimes(2)
// Javascript doesn't explicitly return so i have to call it to see it?
console.log(generatePrimes.primesarray)
