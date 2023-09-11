## JavaScript is the world's most popular programming language.

## JavaScript is the programming language of the Web.

## JavaScript accepts both double and single quotes.

## JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.


## Where To
==>In HTML, JavaScript code is inserted between <script> and </script> tags.
<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

## Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.

==>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>

==>
<body>

<h2>Demo JavaScript in Body</h2>

<p id="demo">A Paragraph</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
 

 ## Javascript Outputs
 ==>
 JavaScript can "display" data in different ways:
 
* Writing into an HTML element, using innerHTML.
1) Writing into the HTML output using document.write().
==>
document.write(5 + 6);

2) Writing into an alert box, using window.alert().
window.alert(5 + 6);

3) Writing into the browser console, using console.log().
==>
console.log(5 + 6);

4)
==>
<button onclick="window.print()">Print this page</button>


## JavaScript Statements
* A computer program is a list of "instructions" to be "executed" by a computer.

## In a programming language, these programming instructions are called statements.

## A JavaScript program is a list of programming statements.

## JavaScript statements are composed of:
==>
Values, Operators, Expressions, Keywords, and Comments.

## The statements are executed, one by one, in the same order as they are written.
==>
let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c

## When separated by semicolons, multiple statements on one line are allowed:
==>
a = 5; b = 6; c = a + b;

## JavaScript statements often start with a keyword to identify the JavaScript action to be performed.
==>

## var
Declares a variable

## let
Declares a block variable

## const	
Declares a block constant

## if
Marks a block of statements to be executed on a condition

## switch
Marks a block of statements to be executed in different cases

## for
Marks a block of statements to be executed in a loop

## function
Declares a function

## return
Exits a function

## try	
Implements error handling to a block of statements


## JavaScript Variables
# What is variable
=> It's space in a memory. 
# Type of variable
    1. var (use before 2015)
    2. let (es6)
    3. const (es6)

    1. global scope => var
        => var works globally, it can intialize anywhere and use anywhere
    2. block scope => let const
        => let & const works only block scope which is inside {} scope
        => let can reassign value  inside of block but const can not reassign value
        => when we use object & array we can change and reassign in const object & array value

==>variables are used to store data values.
==>Variables are Containers for Storing Data

=>Before ES6 (2015), JavaScript had Global Scope and Function Scope.

=>ES6 introduced two important new JavaScript keywords: let and const.

## These two keywords provide Block Scope in JavaScript.

=>Variables declared inside a { } block cannot be accessed from outside the block:

==>JavaScript uses the keywords var, let and const to declare variables.

==>An equal sign is used to assign values to variables.

==>The var keyword was used in all JavaScript code from 1995 to 2015.

=>The let and const keywords were added to JavaScript in 2015.

## The let keyword was introduced in ES6 (2015)

=>Variables defined with let cannot be Redeclared

=>Variables defined with let must be Declared before use

=>Variables defined with let have Block Scope

==>
let x = 5;
let y = 6;
let z = x + y;
console.log(z);


## The const keyword was introduced in ES6 (2015)
=>Variables defined with const cannot be Redeclared
=>Variables defined with const cannot be Reassigned
=>Variables defined with const have Block Scope
==>
const x = 5;
const y = 6;
const z = x + y; //11
console.log(z);


## What is Good?
let and const have block scope.

let and const can not be redeclared.

let and const must be declared before use.

let and const does not bind to this.

let and const are not hoisted.

## What is Not Good?
var does not have to be declared.

var is hoisted.

var binds to this.


const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}


const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}

## Operator
There are different types of JavaScript operators:

1. Arithmetic Operators +, -, *, /, %, ++, --
Arithmetic operators perform arithmetic on numbers (literals or variables).

2. Assignment Operators  =, +=, -=, *=, /=, %=
3. Comparison Operators  ==, !=, ===, !==, >, <, >=, <=
4. String Operators
5. Logical Operators     &&, ||, !
6. Bitwise Operators      &, |, ^, ~, <<, >>, >>>
7. Ternary Operators      ??
8. Type Operators      typeof(Returns the type of a variable)
                       instanceof	(Returns true if an object is an instance of an object type)


# Data Types (Primitive)

    ==>Primitive
        1. String
        2. Number
        3. Bigint
        4. Boolean
        5. Undefined
        6. Null
        7. Symbol(Assignment)
    
    =>Non-Primitive / Object
        1. An object
        2. An array
        3. A date

    // Numbers:
    let length = 16;
    let weight = 7.5;

    // Strings:
    let color = "Yellow";
    let lastName = "Johnson";

    // Booleans
    let x = true;
    let y = false;

    // Object:
    const person = {firstName:"John", lastName:"Doe"};

    // Array object:
    const cars = ["Saab", "Volvo", "BMW"];

    // Date object:
    const date = new Date("2022-03-25");
 

 ## Conditional statements 
 1)  Conditional statements are used to perform different actions based on different conditions.
 2) when you write code, you want to perform different actions for different decisions.You can use conditional statements

## Use if to specify a block of code to be executed, if a specified condition is true

if (condition) {
  //  block of code to be executed if the condition is true
}

## Use else to specify a block of code to be executed, if the same condition is false

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}


## Use else if to specify a new condition to test, if the first condition is false

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}


## Use switch to specify many alternative blocks of code to be executed

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

## JavaScript Loops
Loops are handy, if you want to run the same code over and over again, each time with a different value.
## JavaScript supports different kinds of loops:

1) for - loops through a block of code a number of times

=>The for statement creates a loop with 3 optional expressions:

Syntax

for (expression 1; expression 2; expression 3) {
  // code block to be executed
}

 const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
        
        for (let i = 0; i < cars.length; i++) {
            console.log(cars[i]); 
        }


Expression 1 is executed (one time) before the execution of the code block.
Expression 2 defines the condition for executing the code block.
Expression 3 is executed (every time) after the code block has been executed.





2) for/in - loops through the properties of an object


Syntax

for (key in object) {
  // code block to be executed
}

const person = {fname:"John", lname:"Doe", age:25};

for (let x in person) {
  console.log(person[x]); // john doe 25
}


The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]

for (variable in array) {
  code
}

const numbers = [45, 4, 9, 16, 25];
for (let x in numbers) {
  console.log(numbers[x]); // 45, 4, 9, 16, 25
}

Array.forEach()
The forEach() method calls a function (a callback function) once for each array element.

const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  console.log(value); // 45, 4, 9, 16, 25
}

3) for/of - loops through the values of an iterable object

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

Syntax
for (variable of iterable) {
  // code block to be executed
}

variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
iterable - An object that has iterable properties.
For/of was added to JavaScript in 2015 (ES6)

const cars = ["BMW", "Volvo", "Mini"];          
            
            for (let x of cars) {
             console.log(x); // BMW, Volvo, Mini 
            }



4) while - loops through a block of code while a specified condition is true
while (condition) {
  // code block to be executed
}

let i = 0; 
while (i < 10) {
  console.log(i);
  i++;
}


5) do/while - also loops through a block of code while a specified condition is true
The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

syntax
do {
  // code block to be executed
}
while (condition);


do {
  text += "The number is " + i;
  i++;
}
while (i < 10);


const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  text += cars[i];
  i++;
}


## The Break Statements
You have already seen the break statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch() statement.
The break statement can also be used to jump out of a loop:

for (let i = 0; i < 10; i++) {
  if (i === 6) { break; }
  console.log("The number is " + i); 
}

## The continue statement
The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.


for (let i = 0; i < 10; i++) {
  if (i === 3) { Continue; }
  console.log("The number is " + i); 
}
This example skips the value of 3:


The continue statement (with or without a label reference) can only be used to skip one loop iteration.

The break statement, without a label reference, can only be used to jump out of a loop or a switch.

With a label reference, the break statement can be used to jump out of any code block:


## Function 
A  function is a block of code designed to perform a particular task.
A  function is executed when "something" invokes it (calls it).
A  function is code of block where we write a separate logic and return some output.

1. function statement / function declaration
when we use function keyword and function name with parentheses and curly brackets it's called function statement.
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

SYNTAX

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

function myFunc() {
    // logic
    // return something
}

2. function expression
when we assign a function to a variable is called function expression.

const myFuncExp = function() {
    // logic
    // return something
}


3. function declaration
    it is similar to function statement

4. anonymous function
function without a name is called anonymous function.

=> use in callback
setTimeout(function(){

})

=> use in function expression
const myFunc = function() {

}

=>we can not use anonymous function directly because it will give syntax error
function() {
    console.log('my anonymous function')
}

5. named function expression
function with name and assign to a variable
const myFunc = function namedFunc() {
    console.log('my named function')
}
myFunc()

6. difference between parameters & arguments
    function myFunction(a, b) { // parameters
        console.log(a + b)
    }

    myFunction(3, 6) // arguments


7. first class / first citizen function

    =>. assign to variable
    const myFunc = function() {

    }
    => pass a function as argument
    function myFunction(a, b) {

    }
    function a() {
        return 10
    }

    myFunction(a, b)

    => return a function from a function

    function myFunc() {
        return function myChild() {
            console.log('runnnn')
            return 
        }
    }

    myFunc()

8. arrow function
    const myFunc = (a, b) =>  a + b

    myFunc(2, 5)
const myFunc = (a, b) => {
    const c = a + b
    return c + a + b
}

 const a = () => 10




9. pure function
function which takes same input and return same output and there is no side effect of this function in outer scope of state.

let a = 10
function nonPureFunction(x) {
    a = 30
    return a * x
}
nonPureFunction(30)
console.log(a)

function pureFunction(x) {
    const y = 30
    return y * x
}
pureFunction(30)



10. higher order function
A function which takes one or more then one function as arguments or return a function is called higher order function.

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide() {
    return a / b;
}

function higherOrderFunc(calculate) {
    return function(type, a, b) { 
        calculate.type(a, b) 
    }

}

const a = 5
const b = 3
const myCalculate = [add, subtract, multiply, divide]
const calculator = higherOrderFunc(myCalculate)

calculator(0, a, b)




11. immediately invoked function expressions (IIFE)

(function() {
    console.log("run iife")
})()



## Objects
In real life, a car is an object.
A car has properties like weight and color, and methods like start and stop:

SYNTAX
const car = {type:"Fiat", model:"500", color:"white"};
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

## Object Methods
1)Objects can also have methods.
2)Methods are actions that can be performed on objects.
3)Methods are stored in properties as function definitions.
4)A method is a function stored as a property.

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

## This Keyword 
=>  this refers to the "owner" of the function.
=>  In the example above, this is the person object that "owns" the fullName function.
=>  In other words, this.firstName means the firstName property of this object.

=>  the this keyword refers to an object. Which object depends on how this is being invoked (used or called).
=>  In an object method, this refers to the object.
=>  Alone, this refers to the global object.
=>  In a function, this refers to the global object.
=>  In a function, in strict mode, this is undefined.
=>  In an event, this refers to the element that received the event.
=>  Methods like call(), apply(), and bind() can refer this to any object.


## JavaScript Events
=> HTML events are "things" that happen to HTML elements.
=> When JavaScript is used in HTML pages, JavaScript can "react" on these events.

## HTML Events
=> An HTML event can be something the browser does, or something a user does.
=> Here are some examples of HTML events:

=> An HTML web page has finished loading
=> An HTML input field was changed
=> An HTML button was clicked






















## Hoisting
Variables defined with var are hoisted to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared:
