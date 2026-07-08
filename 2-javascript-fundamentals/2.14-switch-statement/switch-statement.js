// 2.14. The "switch" statement.

/*
A switch statement can replace multiple if checks.
It gives a more descriptive way to compare a value with multiple variants.
*/

// An example

/*
let a = 2 + 2;

switch (a) {
  case 3:
    alert('Too small');
    break;
  case 4:
    alert('Exactly!');
    break;
  case 5:
    alert('Too big');
    break;
  default:
    alert("I don't know such values");
}
*/

let sumValue = 2 + 2;

switch (sumValue) {
  case 3:
    alert("Too small");
    break;
  case 4:
    alert("Exactly!");
    break;
  case 5:
    alert("Too big");
    break;
  default:
    alert("I don't know such values");
}

// An example without break

/*
let a = 2 + 2;

switch (a) {
  case 3:
    alert('Too small');
  case 4:
    alert('Exactly!');
  case 5:
    alert('Too big');
  default:
    alert("I don't know such values");
}
*/

let sumNoBreak = 2 + 2;

switch (sumNoBreak) {
  case 3:
    alert("Too small");
  case 4:
    alert("Exactly!");
  case 5:
    alert("Too big");
  default:
    alert("I don't know such values");
}

// Any expression can be a switch/case argument

/*
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;
  default:
    alert("this doesn't run");
}
*/

let strNum = "1";
let zeroNum = 0;

switch (+strNum) {
  case zeroNum + 1:
    alert("this runs, because +strNum is 1, exactly equals zeroNum+1");
    break;
  default:
    alert("this doesn't run");
}

// Grouping of "case"

/*
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;
  case 3:
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;
  default:
    alert('The result is strange. Really.');
}
*/

let groupedValue = 3;

switch (groupedValue) {
  case 4:
    alert("Right!");
    break;
  case 3:
  case 5:
    alert("Wrong!");
    alert("Why don't you take a math class?");
    break;
  default:
    alert("The result is strange. Really.");
}

// Type matters

/*
let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert('One or zero');
    break;
  case '2':
    alert('Two');
    break;
  case 3:
    alert('Never executes!');
    break;
  default:
    alert('An unknown value');
}
*/

let inputValue = "3";

switch (inputValue) {
  case "0":
  case "1":
    alert("One or zero");
    break;
  case "2":
    alert("Two");
    break;
  case 3:
    alert("Never executes!");
    break;
  default:
    alert("An unknown value");
}

alert("The End of 2.14. The switch statement.");
