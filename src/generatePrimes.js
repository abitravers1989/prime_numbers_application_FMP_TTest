var GeneratePrimes = function () {
  this.primesarray = [];
};


GeneratePrimes.prototype._isPrime = function(n){
  if (n != Math.round(n) || n <= 1) {return false}
  var isPrime = true;
  for (var i = 2; i <= Math.sqrt(n); i++) {
     if (n % i == 0) {isPrime = false}
  }
  return isPrime;
};


GeneratePrimes.prototype.createArrayofPrimes = function (inputNumber) {
  var number = 2;
  while(this.primesarray.length < inputNumber) {
    if (this._isPrime(number)) { this.primesarray.push(number) }
    number+=1;
  }
  return this.primesarray;
};

module.exports.GeneratePrimes = GeneratePrimes;
