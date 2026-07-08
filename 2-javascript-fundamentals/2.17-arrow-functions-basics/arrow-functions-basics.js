// 2.17. Arrow functions, the basics.

/*
There's another very simple and concise syntax for creating functions.
It's called "arrow functions":

let func = (arg1, arg2, ..., argN) => expression;
*/

// Basic arrow function

/*
let sum = (a, b) => a + b;

let sum = function(a, b) {
  return a + b;
};

alert(sum(1, 2));
*/

let sum = (first, second) => first + second;

alert(sum(1, 2)); // 3

// One argument — parentheses can be omitted

/*
let double = n => n * 2;

alert(double(3));
*/

let double = (num) => num * 2;

alert(double(3)); // 6

// No arguments — empty parentheses are required

/*
let sayHi = () => alert("Hello!");
sayHi();
*/

let sayHi = () => alert("Hello!");

sayHi();

// Arrow functions like Function Expressions

/*
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();
*/

{
  let ageValue = 16;

  let welcome =
    ageValue < 18 ? () => alert("Hello!") : () => alert("Greetings!");

  welcome();
}

// Multiline arrow functions

/*
let sum = (a, b) => {
  let result = a + b;
  return result;
};

alert(sum(1, 2));
*/

let sumMultiline = (first, second) => {
  let result = first + second;
  return result;
};

alert(sumMultiline(1, 2)); // 3

alert("The End of 2.17. Arrow functions, the basics.");
