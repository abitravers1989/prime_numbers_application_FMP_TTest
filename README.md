## What is this application?

A node.js application which runs in the terminal.

When ran it prompts the user for a number of prime numbers they would like to see. For example 4.

It then outputs a table (to the terminal):

The first row are the prime numbers, the number of primes given are the same as the number the user requested to see. So in this example, the first 4 prime numbers.

The next rows are the multiplication tables of the prime numbers.

The length of multiplication tables given are the count number plus one.
In this example the first 4 prime numbers, (so 2, 3, 5, 7) first 5 times tables numbers are displayed.

The number given by the user must be between 1 and most be finite. It must be a whole number.

## Demonstration of the app working:

![Using the App Demo ](https://github.com/abitravers1989/prime_numbers_application_FMP_TTest/blob/master/public/first_design.jpg)


## How Do I run it myself?

1st install Node.js if you haven't already.

Or check you have it installed by running in your terminal:

```````
$node -v
```````

Next, navigate to your terminal:

``````
$ git clone https://github.com/abitravers1989/prime_numbers_application_FMP_TTest.git
``````

Navigate to the newly downloaded directory in your terminal:

`````
$ cd prime_numbers_application_FMP_TTest
`````

Next, you want to download all the dependencies. In your terminal type:

`````
$npm install
`````

Your now ready for prime time fun.
Stay in your terminal, type:

`````
node controller.js
`````

Enter the number of primes you want and wait for the magic to happen!!


## How can I test it?

First make sure you have jasmine installed:

``````
$npm install -g jasmine
``````
(Information on how to downlaod jasmine also found here; https://jasmine.github.io/pages/getting_started.html).


To run it open the specRunner.html file in your browser.


## What language is it in? And What design pattern have you followed?

The language of the code is Javascript.

Node.js is used to run the application. The environment the application is ran in is the terminal (not the browser).

The testing framework was Jasmine.

I have used Jasmine for unit tests before and liked the amount of information it provides when a test is failing.


## How did I design/ structure the code?

Constructor-prototype Javascript design pattern was used. I like this design pattern because it allows you to encapsulate responsibilities within modules then export them so their functionality can be used, but not changed, throughout the rest of the programme.

Each module has been separated into its own file. This was done in an attempt to separate out concerns. Each constructor has it's own unique responsibility:

Controller:
 - It is responsible for all the command line stuff. For taking input from the user, calling the other classes, then outputting the table to the command line. It formats the output into a table using the node module easy table.

CheckInput:
- It is responsible for checking the validity of the number given by the user. It makes sure a whole number above one but below infinity is passed to the rest of the programme.

GeneratePrimes:

- It is responsible for taking a number (X) then using this as the count to generate a list (array) of the first X prime numbers.

GenerateMultiplicationTables:

- It is responsible for taking that primes array and calculating the times tables of these prime numbers. It outputs a 2D array containing these plus the original prime numbers array.


## Generating Prime module (my thinking / approach)


Testing helped me with this as I started by writing out lists of prime numbers in the tests. This allowed me to get a feel for what the prime numbers were.

I first wrote the method in sudo code.

I wanted it to loop through from 2(the first prime) generating prime numbers, storing them in an array, until it had the same amount of prime numbers as the number provided to it.

I then tried to create my own prime number finder method. I started by checking the provided number's(which has been supplied to it by the function which is looping through / counting all numbers from 2) divisibility by 2, 3, then 6 and 7. I stopped it at the square root of the number (because according to google that's what you are supposed to do).

This was super slow and unnecessary and I wasn't sure that it accounted for all primes. So I used this to create a new one: (http://studymaths.co.uk/topics/checkIfPrime.php).


## What did you do with it that you are pleased about?


I understood how the information flowed through the programme. I could see how to clearly separate out functionality.

Doing it test first really helped with design and understanding what that part of the programme needed to do.

I managed to create an array of arrays in javascript.

I used the prototype design functionality properly.


## Improvements

The generate multiplication table needs to be refactored. I need to separate out the functionality better, the encapsulation is currently incorrect. One function should loop through the array calling another function to generate the multiplication table for that number.

The table output could be more attractive. Instead of using easy table and the command-line, I would use a HTML file (styled with CSS) to output a more attractive table to the browser.

Possible edge cases could be added to the tests for generate primes and multiplication tables. At the moment I have not done this because I am assuming the checkInput functionality / tests are filtering out most of these cases.


## My approach.


1. Since this is test driven; workout testing framework to use.
Settled with Jasmine as have used it before when building a javascript / node application.

2. Wrote out in english the information flow through the programme then diagrammed this.

4. Define my unknowns.

5. Started to work on the easiest functionality first, my knowns. Checking the input number.

6. I then moved onto my first unknown,  getting input from the commandline with node. It turns out this wasn't as difficult as I thought.

7. Next I did some research on prime numbers and how to generate them. Wrote the tests then the functionality for this.

8. I wrote the tests for the generating multiplication tables functionality. Doing this allowed me to visualise the output for this class, and that it would be a 2D array. I researched this plus some methods like reduce and map. I wrote an ugly but working functionality. Then attempted to refactor.

9. I called all these modules in the controller class and started to visualise the flow of information. In the controller I format the output into a table with easy-table.


## Research

Generating an output table to STDOUT:
https://blog.nodejitsu.com/npmawesome-table-formatting-in-the-terminal-with-cli-tables/
s
Infinity:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity

Understanding how to read input from console:
https://stackoverflow.com/questions/20086849/how-to-read-from-stdin-line-by-line-in-node
https://nodejs.org/api/readline.html

Understanding error message (x is not a Constructor TypeError):
https://airbrake.io/blog/javascript-error-handling/x-not-constructor-typeerror

Understanding prime number algorithms:
https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
https://www.youtube.com/watch?v=I6HrVRGGYNI


Multiplication Tables:
https://www.youtube.com/watch?v=t4MOEfpsC60
https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter
