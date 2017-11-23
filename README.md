# What is this application?

A node.js application which runs in the terminal.

When ran it prompts the user for a number of prime numbers they would like to see. For example 4.

It then outputs a table (to the terminal):

The first row are the prime numbers, the number of primes given are the same as the number the user requested to see. So in this example, the first 4 prime numbers.

The next rows are the multiplication tables of the prime numbers.

The length of multiplication tables given are the count number plus one.
In this example the first 4 prime numbers, (so 2, 3, 5, 7) first 5 times tables numbers are displayed.

The number given by the user must be between 1 and most be finite. It must be a whole number.

# Demonstration of the app working:


# How Do I run it myself?

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


# How can I test it?

First make sure you have jasmine installed:

``````
$npm install -g jasmine
``````
(Information on how to downlaod jasmine also found here; https://jasmine.github.io/pages/getting_started.html).


To run it open the specRunner.html file in your browser.


# What language is it in? And What design pattern have you followed?

The language of the code is Javascript.

Node.js is used to run the application. The environment the application is ran in is the terminal (not the browser).

The testing framework was Jasmine.

I have used Jasmine for unit tests before and liked the amount of information it provides when a test is failing.


# How did I design/ structure the code?

Constructor-prototype Javascript design pattern was used. I like this design pattern because it allows you to encapsulate responsibilities within modules then export them so their functionality can be used, but not changed, throughout the rest of the programme.

Each module has been separated into its own file. This was done in an attempt to separate out concerns. Each constructor has it's own unique responsibility:

Controller:
 - It is responsible for all the command line stuff. For taking input from the user, calling the other classes, then outputting the table to the command line. It creates new instances of the modules in the rest of the programme.

CheckInput:
- It is responsible for checking the validity of the number given by the user. It makes sure a whole number above one but below infinity is passed to the rest of the programme.

GeneratePrimes:

- It is responsible for taking a number (X) then using this as the count to generate a list (array) of the first X prime numbers.

GenerateMultiplicationTables:

- It is responsible for taking that primes array and calculating the times tables of these prime numbers. It outputs a 2D array containing these plus the original prime numbers array.


# The information flow through the app

The controller file gets the number from the user. It does this through asking the user to input a number in the console.

It then creates a new instance of the check Number module. Which checks the number is valid and fits the given criteria.

The controller then creates a new instance of the generate primes module. This module will generate an array of the first N(where N is the number input) prime numbers.

Next a new instance of the multiplication generator is called.
This generates the multiplication tables......

Table formatter ...

output

# Generating Prime module explained.

<!-- I have modelled this on the 'sieve of Eratosthenes Algorithm'. -->

1 is not a prime number so it starts with 2.

Testing helped me with this as I started by writing out lists of prime numbers in the tests. These lists contained the same number of prime numbers as the number passed to it when calling the function. This allowed me to get a feel for what the prime numbers were.

I first wrote the method in sudo code. I wanted it to loop through from 2(the first prime) generating prime numbers, storing them in an array, until it had the same amount of prime numbers as the number provided to it. For this i knew I needed to check the length of the primes array.

I then tried to create my own prime number finder method. I started by checking the provided number's(which has been supplied to it by the function which is looping through / counting all numbers from 2) divisibility by 2, 3, then 6 and 7. I stopped it at the square root of the number. This was super slow and unnecessary and I wasn't sure that it accounted for all primes. So I used this to create a new one: (http://studymaths.co.uk/topics/checkIfPrime.php).


# What did you do with it that you are pleased about?

I learnt how to generate a list of prime numbers with an algorithm. I have not done maths since A level Chemistry which was a long time ago for me.

I understood how the information flowed through the programme.

I managed to generate an array of arrays which contained the multiplication tables of all the prime arrays. I implemented it using the map functionality. (It was harder and messier to do than in ruby. I feel ruby is better for looping logic / where there is potentially a lot of data.). The method is messy and needs refactoring but I got full visibility and understanding of the functionality and how important where you returned from the function was.(See all the console logs in the past commits).

# What would you do if you had more time?/ IMPROVEMENTS

controller.js

Additional functionality; if the user input an invalid number it loops back to the start of the programme automatically, instead of user having to re-start it.


Unsure how to test controllers output.
- Or if need to test it because it is using easy table which wasn't built by myself.


gMTableslogic function in generateMultiplicationTas module:

Too long needs refactoring.
Tests need to test more scenarios / edge cases.



# My approach.



1. Since this is test driven; workout testing framework to use.
Settled with Jasmine as have used it before when building a javascript / node application. (I looked at when I have done this in the past).

2. Define MVP.

3. Simple design - non-code breaking down responsibilities and potential relationships.

4. Define my unknowns.

START WORK ON THE EASIEST FUNCTIONALITY FIRST (get a good mental state going). Then after some part of the code is working - the check numbers functionality- then i put this in the controller.

Then I moved on to trying to understand what prime numbers are and how to generate them. wrote the tests and code for this.

Put this in the controller.

Then moved on to designing and understanding how to generate the multiplication tables.

<!-- 5. Unknowns included prime numbers / what actually to output. Since this seemed a very important part of the whole app I researched this before continuing.

6. Writing a Javascript application which works in the console. Taking user input from stdin and outputting a table of prime numbers back to the console.
So the next thing I looking into was how to create a command line application in node.js.

7. Had to think about how to render this and have it running in the command line.  -->

Design the first part if the programme:
![Design Example / Thinking](https://github.com/abitravers1989/prime_numbers_application_FMP_TTest/blob/master/public/first_design.jpg)


Decided to start with the functionality/ repo responsible for checking the input number since this was a known and I could start coding before trying to understand how to get user input from the console:

Created the information story for this class / functionality/ repo:


-  1st be passed the number which has been input by the user.
- 2nd check the input number against the given criteria.
- 3rd After checks are done either pass an error message to the function responsible for console in and output, or pass the number to the function responsible for calculating if it is prime.

Used this to write the tests.

Then wrote the code.

I tested the code with; the unit tests, running parts of it in the console, and by running the specific file (checkInput.js) in the terminal and calling an instance of the class with it. If you want to replicate this, add the following to the bottom of the checkInput.js file:

```````
checkInput = new CheckInput();
checkInput.validNumber(8)
checkInput.inputNrCorrect
console.log(checkInput.inputNrCorrect)

checkInput.validNumber("nnn")
checkInput.inputNrCorrect
console.log(checkInput.inputNrCorrect)

checkInput.validNumber(9.888)
checkInput.inputNrCorrect
console.log(checkInput.inputNrCorrect)

```````

Then open the terminal and run:

``````
$node checkInput.js
``````

I went about creating all the other modules and functionality with the same process.





Further Tests to add:

Navigate to app directory, run eslint {folder name} to run the linter
Navigate to app directory, run istanbul cover {test file} to check code coverage..










# Unit Test

Taking a unit of code and making sure it works in a repeatable / replicable way.

Just doing unit tests and other tests in the console / by running the file ... WHY .ANSWER please me

# Research

Generating an output table to STDOUT:
https://blog.nodejitsu.com/npmawesome-table-formatting-in-the-terminal-with-cli-tables/



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
