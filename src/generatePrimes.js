// Find out whether 337 is a prime number or not?
//
// Step 1: 19 ¿ square root (337) Prime numbers less than 19 are 2, 3, 5, 7, 11, 13, 17 Step 2: 337 is not divisible by any of them
//
// Therefore 337 is a prime number


// Find square root of the number.. if this number is decimal take the next number
// Then take all the avliable numbers from 1 to the square root of that number.

var GeneratePrimes = function (){
  //  Find all prime numbers less than this number
  var max_size = 1000;
  var number_list = new Array(max_size);

  // Initialize the array.
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
    for(var....)
    {
      numberList[i*j] = 0;
    }
  }
};
