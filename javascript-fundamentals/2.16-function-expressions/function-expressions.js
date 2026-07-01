// 2.16. Function expressions.

/*
In JavaScript, a function is not a "magical language structure", but a special kind of value.
Function Expression allows us to create a new function in the middle of any expression.
*/

// Function Expression

/*
let sayHi = function() {
  alert("Hello");
};
*/

let sayHi = function () {
  alert("Hello");
};

sayHi();

// Function is a value

/*
function sayHi() {
  alert("Hello");
}

alert(sayHi); // shows the function code
*/

function showHi() {
  alert("Hello");
}

alert(showHi); // shows the function code, does not run it
showHi(); // runs the function

// Copy a function to another variable

/*
function sayHi() {
  alert("Hello");
}

let func = sayHi;
func();
sayHi();
*/

function greet() {
  alert("Hello");
}

let funcCopy = greet;
funcCopy();
greet();

// Function Expression equivalent

/*
let sayHi = function() {
  alert("Hello");
};

let func = sayHi;
*/

{
  let sayHiExpr = function () {
    alert("Hello");
  };

  let funcExpr = sayHiExpr;
  funcExpr();
  sayHiExpr();
}

// Why semicolon at the end?
/*
Function Expression is part of an assignment statement:
let sayHi = function() { ... };
The semicolon ends the statement, not the function syntax.
*/

// Callback functions

/*
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

ask("Do you agree?", showOk, showCancel);
*/

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

ask("Do you agree?", showOk, showCancel);

// Anonymous callback functions

/*
ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/

ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution.");
  },
);

// Function Declaration vs Function Expression

/*
// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression
let sum = function(a, b) {
  return a + b;
};
*/

function sumDecl(first, second) {
  return first + second;
}

let sumExpr = function (first, second) {
  return first + second;
};

alert(sumDecl(2, 3));
alert(sumExpr(2, 3));

// Function Declaration can be called before definition

/*
sayHi("John");

function sayHi(name) {
  alert(`Hello, ${name}`);
}
*/

sayHiHoist("John");

function sayHiHoist(userName) {
  alert(`Hello, ${userName}`);
}

// Function Expression cannot be called before definition

/*
sayHi("John"); // error!

let sayHi = function(name) {
  alert(`Hello, ${name}`);
};
*/

let sayHiLate = function (userName) {
  alert(`Hello, ${userName}`);
};

sayHiLate("John");

// Function Declaration block scope

/*
let age = 16;

if (age < 18) {
  welcome();
  function welcome() {
    alert("Hello!");
  }
  welcome();
} else {
  function welcome() {
    alert("Greetings!");
  }
}

welcome(); // Error: welcome is not defined
*/

{
  let age = 16;

  if (age < 18) {
    welcomeBlock();
    function welcomeBlock() {
      alert("Hello!");
    }
    welcomeBlock();
  } else {
    function welcomeBlockElse() {
      alert("Greetings!");
    }
  }

  // welcomeBlock(); // Error outside block scope in strict mode for some cases
}

// Function Expression with conditional assignment

/*
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {
  welcome = function() {
    alert("Hello!");
  };
} else {
  welcome = function() {
    alert("Greetings!");
  };
}

welcome();
*/

{
  let ageValue = 16;

  let welcome;

  if (ageValue < 18) {
    welcome = function () {
      alert("Hello!");
    };
  } else {
    welcome = function () {
      alert("Greetings!");
    };
  }

  welcome();
}

// Ternary with Function Expression

/*
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome();
*/

{
  let ageValue = 16;

  let welcomeTernary =
    ageValue < 18
      ? function () {
          alert("Hello!");
        }
      : function () {
          alert("Greetings!");
        };

  welcomeTernary();
}

alert("The End of 2.16. Function expressions.");
