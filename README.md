# What is this application?

A console application which given a number, N, outputs a table of the first N number of Prime Numbers.

To use it just input a whole number at or above 1 and expect to see a grid of XXX number prime numbers which occur after it.

A prime number is a number larger than 1 which only has two factors, 1 and the number itself.

# What language is it in?

Javascript

Tested with Jasmine.

# What was my MVP

A user gives a number to the console.
A javascript programme which has been test driven, has an algorithm which can generate a list of 20,000+ prime numbers which start with (N+1 x N+1).
A grid of these number is output to the console.
An example when N is 3:

|      |    2 |    3 |    5 |
|    2 |    4 |    6 |   10 |
|    3 |    6 |    9 |   15 |
|    5 |   10 |   15 |   25 |

The number N must be 1 or above. First MVP will not include an error message for when this isn't done.

Unit test coverage is high.

# How do I run it?

1st install Node.js if you haven't already.

Or check you have it installed by running in your terminal:

```````
$node -v
```````

# How do I test it?

First make sure you have jasmine installed:

``````
$npm install -g jasmine
``````
(Information on how to downlaod jasmine found here; https://jasmine.github.io/pages/getting_started.html).


To run it open the specRunner.html file in your browser.

Further Tests to add:

Navigate to app directory, run eslint {folder name} to run the linter
Navigate to app directory, run istanbul cover {test file} to check code coverage..

# What did you do with it that you are pleased about?

# What would you do if you had more time?

# What was the key criteria?

performant prime algorithm which can generate large primes
simple and extensible solution
formatting the output.


-	a test driven approach
- loosely coupled and highly cohesive design
- perfection is not when there is nothing left to add, but when there is nothing left to take away


# My approach.

1. Since this is test driven; workout testing framework to use.
Settled with Jasmine as have used it before when building a javascript / node application. (I looked at when I have done this in the past).

2. Define MVP.

3. Simple design - non-code breaking down responsibilities and potential relationships.

4. Define my unknowns.

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



# The information flow through the app

Input number passed to programme

Number checked

Prime numbers generated


# Unit Test

Taking a unit of code and making sure it works in a repeatable / replicable way.

# Research

Building Modular, single responsibility javascript; https://www.youtube.com/watch?v=yD2lMmmjB2E

Understanding modules:
http://www.tutorialsteacher.com/nodejs/nodejs-module-exports https://www.sitepoint.com/understanding-module-exports-exports-node-js/
https://www.youtube.com/watch?v=SmBb2SSZqFU
