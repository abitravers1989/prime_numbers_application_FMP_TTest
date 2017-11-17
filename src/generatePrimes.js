// First check if the number is divisible by 2 or 3

// Then we check if the numbers from 5 upwards are prime or not. We begin with a variable of 5 and increment it by 6 each time until we get to the square root of the argument.

// If the argument is perfectly divisible by the variable or the variable + 2, then it isn't prime. This is why we can increment the variable by 6 as each number between 5 and 11 will be checked either from the original if statement, or by this new if statement.
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
