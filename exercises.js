import { access } from "fs";
import { maxHeaderSize } from "http";
import { title } from "process";
import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  /*

    To run the code you write for each exercise, change the `exercise_01()` 
    code below to match the EXACT name
    of the exercise, as it is written in the line `function exercise_xx`.
    
     For Example:

     If I want to run exercise_05 below, 
     I would change the code below from "exercise_01()" to
     "exercise_05()", save this file. 
		 
		 Then, when I run this file by running `node exercise.js`
     in the VS Code terminal while inside this folder, your code 
     for exercise_05 will run.

  */

  // Modify the line of code BELOW to run a different exercise
  exercise_19();
  // Modify the line of code ABOVE to run a different exercise
}

function exercise_01() {
  /* 
   
    Exercise 1: Function Declarations and Naming Conventions

    Problem:

    Write a function declaration named calculateArea that takes the radius of a 
    circle as a parameter and returns the area of the circle. 

    The formula for the area of a circle: PI * radius * radius
    
    Use proper naming conventions for functions in JavaScript.
  
  */
  // CODE IN THE OPEN LINES BELOW

  function calculateArea(radius) {
  return Math.PI * radius * radius;

  }
  console.log(calculateArea(4));

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_02() {
  /* 
   
    Exercise 2: Function Expressions and Their Uses

    Problem:

    Convert the calculateArea function from Exercise 1 into 
    a function expression and assign it to a variable called calculateArea.

    Run it and log the output
  
  */
  // CODE IN THE OPEN LINES BELOW

  const calculateArea = function (radius) {
    return Math.PI * radius * radius;
  }
  console.log(calculateArea(6));
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_03() {
  /* 
    
    Exercise 3: Arrow Functions and How They Differ from Traditional Functions

    Problem:
    
    Rewrite the calculateArea function as an arrow function.
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code here";
  const calculateArea = (radius) => {
    return Math.PI * radius * radius
  }
  console.log(calculateArea(1));
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_04() {
  /* 
   
    Exercise 4: Using Functions to Validate and Transform Data

    Problem:

    Write a function isValidEmail that takes a string and returns true 
    if it is a valid email address, and false otherwise. 

    For simplicity, consider an email valid if it contains 
    exactly one @ symbol and at least one . after the @.
  
  */
  // CODE IN THE OPEN LINES BELOW

  function isValidEmail(email) {
    if(email.indexOf("@") < email.indexOf(".") && email.indexOf("@") > 0 && email.lastIndexOf("@") === email.indexOf("@")){
      return true;
    }
    else {
      return false;
    }
  }
  console.log(isValidEmail("maxvontz@gmail.com"))
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_05() {
  /* 
   
    Exercise 5: Function Parameters, Including Default Values

    Problem:

    Write a function 'greet' that takes a name and an optional greeting message. 
    If no greeting is provided, it should default to 'Hello'. 
    The function should return a greeting message.
    
    Then, log the return of this function to the console
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code here";
  function greet(name = "name", message = "Hello"){
    /*if(message === undefined){
      message = "Hello"
    }*/
  return(` ${message} ${name}`)
  
  }
  console.log(greet("max", "have a nice day"))

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_06() {
  /* 
   
   Exercise 6: Understanding Local and Global Scope

    Problem:

    Consider the following code. What will be logged to the console and why?

    Write what you think in a code comment. Then run the code.
  
  */
  let message = "Global";

  function showMessage() {
    let message = "Local";
    console.log(message);
  }

  showMessage();
  console.log(message);
  

  /*

    Write what you think will happen IN THIS COMMENT BLOCK.
    Then explain why the code behaved as it did.
    //the console will log "Global" because the variable 'message' is accessed outside of the function

    it logged both "Local" and "Global"; it logged "Local" first because the function showMessage() is called before the message is logged.

  */
}

function exercise_07() {
  /* 
   
    Exercise 7: How Function Scope Works and Variable Limitations

    Problem:

    Write a function 'incrementCounter' that declares a variable 'counter' 
    initialized to 0 inside it, increments 'counter' by 1, and logs it to the console. 
    
    Call incrementCounter twice. 
    
    What will be logged each time and why can't we access 
    counter outside the function? Provide your answer in a code comment below
    the function.
  
  */
  // CODE IN THE OPEN LINES BELOW

  function incrementCounter(){
    let counter = 0
    counter += 1
    console.log(counter);

  }
  incrementCounter()
  incrementCounter()
  console.log(counter)



  // the console will log "1" each time the function is called.
  // it does not increase each time you call the function because the counter variable
  // is set to zero each time the function initializes.
  // the counter variable is not accessible outside of the function
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_08() {
  /* 
   
    Exercise 8: Functions That Return Other Functions

    Problem:

    Write a function 'makeMultiplier' that takes a 'multiplier' number
    and returns a new function that takes a number and 
    returns that number multiplied by 'multiplier'.

  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code here";
  function makeMultiplier(multiplier){
    return function (number){
      return multiplier * number
    };
  }
  const double = makeMultiplier(3);
  console.log(double(5));
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_09() {
  /* 
   
    Exercise 9: Concepts and Use Cases for Recursive Functions

    Problem:

    Write a recursive function 'factorial' that takes a 
    non-negative integer 'n' and returns its factorial.

    If 'n' is a negative number, log "Bad number input" to the console, and 
    `return` from the function. 
    This will prevent an infinite loop from occuring.

    In the future, we can use error handling techniques to handle these use cases
    in a cleaner manner.

    Info on what a factorial is: https://www.cuemath.com/numbers/factorial/

  */
  // CODE IN THE OPEN LINES BELOW

  function factorial(n) {
    if(n < 0) {
      console.log(`Bad number input`)
      return
    }
    let factorial = n;
    n = n -1;
    while (n > 0){
      factorial *= n;
      n--;
      
    }
    return console.log(factorial)
  }
  factorial(8);
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_10() {
  const fruits = ["apple", "banana", "cherry"];
  /* 
   
   Exercise 10: Using forEach to Iterate Over Arrays
    Problem:

    Given the array `fruits` defined above, use forEach to 
    print each fruit to the console.
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code here";
  function forEach(array){
    for (let item in array){
      console.log(array[item]);
    
  }
}
  forEach(fruits);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_11() {
  /* 
   
    Exercise 11: Replacing Traditional Loops with Functional Approaches

    Problem:

    Replace the following for loop with a functional approach using 
    the reduce() method to calculate the sum of an array of numbers.
  */
  // REPLACE the code below

  const testArray = [1, 2, 3, 4, 5];
  let initalValue = 0;
 
  
  let sum = testArray.reduce((accumulator,currentValue) => accumulator + currentValue, initalValue);

  console.log(sum); // Outputs: 15

  // REPLACE the code above
}

function exercise_12() {
  const numbers = [10, 15, 20, 25, 30];
  /* 
   
    Exercise 12: Filtering Arrays with `filter`
    Problem:

    Given the array of numbers above, use the filter() method to 
    create a new array containing only the even numbers.

    Log this new array to the console
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code here";
  let even = numbers.filter((number) => number % 2 === 0);

  console.log(even)

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_13() {
  /* 
   
    Exercise 13: How JavaScript Handles Primitives and 
                 Objects Differently in Memory


    Problem:

    Explain why modifying an object passed to a function affects 
    the original object, but modifying a primitive value does not. 

    Provide code examples to illustrate this behavior.
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code here";
  let primitive = "strings are immutable";
  let object = {book: "Dungeon Crawler Carl"};

  function test(variable){
    console.log(variable)
  }
  primitive = "test";
  test(primitive)
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_14() {
  /* 
   
    Exercise 14: Reference Types and How They Are Passed Around

    Problem:

    Write code to demonstrate that objects are passed by reference by creating 
    a function that adds a new property to an object passed as an argument.
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code here";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_15() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  /* 
   
    Exercise 15: Working with Arrays using 'find'

    Problem:

    Given the array of user objects above, use the find() method to 
    locate the user with the name 'Bob'.

    Print this user object to the console
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code here";
  const found = users.find((user) => user.name === "Bob");
  console.log(found)

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_16() {
  const person = {
    name: "John Doe",
    age: 30,
    occupation: "Engineer",
  };

  /* 
   
    Exercise 16: Using Object.entries to Iterate Over Object Properties
    Problem:

    Given the 'person' object above, use Object.entries and .forEach to iterate 
    over the object's properties and print each key and value.
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code here";
  Object.entries(person).forEach(entry => {
    console.log(`${entry[0]}: ${entry[1]}`);
  })
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_17() {
  /* 
   
    Exercise 17: Using Functions to Transform Data

    Problem:

    Write a function 'capitalizeStrings' that takes an array of strings and 
    returns a new array with each string in title case
    (first letter uppercase, rest lowercase).
      
  */
  // CODE IN THE OPEN LINES BELOW

  let stringArray = ["this", "is", "an","array","of","strings"]
  let titleCase = []
  function capitalizeStrings(array) {
    Object.entries(stringArray).forEach(entry => { 
      let cap = entry[1][0].toUpperCase()
      //console.log(`this is cap ${cap}`)
      let remain = entry[1].slice(1,entry[1].length);
      //console.log(`this is remain ${remain}`);
      let word = cap + remain;
      //console.log(`this is word ${word}`);
      titleCase.push(word)
    }
  )
    
    console.log(titleCase);
    
  }
  capitalizeStrings(stringArray);
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_18() {
  /* 
   
    Exercise 18: Using Default Parameters

    Problem:

    Write a function 'power' that calculates the power of a number. 

    The function should take two parameters: base and exponent, 
    with exponent defaulting to 2 if not provided.

    You can use Math.pow in your function to find the power of a number:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code here";
  function power(base , exponent = 2){
    let result = base ** exponent;
    return result;
  }
  console.log(power(3,4))
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_19() {
  /* 
   
    Exercise 19
    
    Immediate Function: 

    Write an IIFE(Immediately Invoked Function Expression) that 
    that logs information to the console. 
		
    Here's a page with more details on IIFEs:
		https://developer.mozilla.org/en-US/docs/Glossary/IIFE
  
  */
  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code here";
  (function () {
    console.log(`automatic logger`)
  })();

  // CODE IN THE OPEN LINES ABOVE
}
