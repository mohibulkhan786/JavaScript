//var function scope
var b = 2
function myFunc() {
    var b = 5 
}
myFunc()
console.log(b) // output 2


function myFunc2() {
    var a = 3
    function myfuncTwo(){
    var a = 6  
    }
   console.log(a) // output 3
}
myFunc2()



let a = 5
function myfunc3() {
  
    var b = 2
    let a = 10
    if(true) {
       var b = 6
       a = 7
    }
    function funcTwo2() {
       a = 10 
    }
    funcTwo2()
    console.log(b) //6
    console.log(a) //10
   
}
myfunc3()


let isStudent = true;
let hasPartTimeJob = false;
let canApplyForScholarship = isStudent && !hasPartTimeJob; 
console.log(canApplyForScholarship); // true

let counter = 0;
console.log(counter++); // Post-increment //a =>  0, v => 0 
console.log(counter); // a =>  1, v => 1
console.log(++counter); // Pre-increment // a =>  2, v => 2


let x = 10;
x += 5; // Equivalent to x = x + 5
console.log(x); // output 15


let age = 18;
let gender = 'female'
let isAdult = (age >= 18) ? (gender === 'male' ? 'Yes' : 'No') : "No";
console.log(isAdult);  // No

 // Nullish Coalescing Operator
let defaultValue = "Default Value";
let userInput = undefined; // try with ==> true, false, undefined, 'any string value', 123
let result = userInput ?? defaultValue;
console.log(result); // defaultValue



let result2 = 5; // NaN
console.log(result2); // 5
console.log(typeof result); // number
console.log(isNaN(result)); //  false


let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
console.log(positiveInfinity + 5); 
console.log(negativeInfinity - 10); 


let num = 5; // Binary: 00000101
console.log(num << 2); // 00010100 // 20
console.log(num >> 2); // 00000001 // 1

// var let and const

function exampleVar() {
    if (true) {
        var x = 10; 
    }
    console.log(x); // 10
}
exampleVar();
console.log(x); // 15


function exampleLet() {
    if (true) {
        let y = 20; 
    }
    console.log(y); //Refrence Error y is not defiend
}
exampleLet();



function exampleConst() {
    const z = 30; 
    // z = 40; 
    console.log(z); // 30
}
exampleConst();
 
//Hoisting

console.log(xx); 
var xx = 10;
console.log(xx);


console.log(name); // Throws ReferenceError (Temporal Dead Zone: accessing before declaration)
    let name = "Bob";
    console.log(name);

    sayHello();
    function sayHello() {
        console.log("Hello!"); // output Hello
    }

    var count = 5;
    if (count > 0) {
        var count = 10; // Redeclares the same variable in the same scope
    }
    console.log(count) // output 10


    if (true) {
        let age = 25; // Block-scoped variable
    }
    console.log(age); // output 25


    var w = 10;
    function printX() {
        console.log(w) // undefiend
        var w = 20;
        console.log(w) //20
    }
    printX();
    console.log(x)


    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i); // output 5
        }, 1000);
    }

    
    for (let j = 0; j < 5; j++) {
        setTimeout(function() {
            console.log(j); // block scope [8, 0, 1, 2, 3, 4]
        }, 1000);
    }

    function exampleOverwrite() {
        console.log(foo);
        var foo = "baz";
        console.log(foo);  // baz
    }
    exampleOverwrite();

    function exampleLoop() {
        for (var i = 0; i < 5; i++) {
            // Code here
        }
        console.log(i); // 5
        for (let j = 0; j < 5; j++) {
            // Code here
        }
        console.log(j); // reference Error  j is not defiend
    }
    exampleLoop()


    function exampleHoisting() {
        console.log(a); 
        var a = 5;
        console.log(b); 
        let b = 10;
    }
    exampleHoisting();  //  ReferenceError: Cannot access 'b' before initialization  at exampleHoisting


    let mutableVar = 15;
    mutableVar = 25; // 25

    const immutableConst = 35;
    immutableConst = 45;  // 45


    let s = 10;
    let d = 5;
    console.log(s + d); // Addition 15
    console.log(s - d); // Subtraction 5
    console.log(s * d); // Multiplication 15
    console.log(s / d); // Division 2
    console.log(s % d); // Modulus 0


