// 2.15. Functions.

/*
Quite often we need to perform a similar action in many places of the script.
Functions are the main "building blocks" of the program.
They allow the code to be called many times without repetition.
*/

// Function Declaration

/*
function showMessage() {
  alert('Hello everyone!');
}

showMessage();
showMessage();
*/

function showMessage() {
  alert("Hello everyone!");
}

showMessage();
showMessage();

// Local variables

/*
function showMessage() {
  let message = "Hello, I'm JavaScript!";
  alert(message);
}

showMessage();
alert(message); // Error! local variable
*/

{
  function showMessageLocal() {
    let localMessage = "Hello, I'm JavaScript!";
    alert(localMessage);
  }

  showMessageLocal();
  // alert(localMessage); // Error! local variable
}

// Outer variables

/*
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage();
*/

{
  let userName = "John";

  function showMessageOuter() {
    let message = "Hello, " + userName;
    alert(message);
  }

  showMessageOuter();
}

// Outer variable modification

/*
let userName = 'John';

function showMessage() {
  userName = "Bob";
  let message = 'Hello, ' + userName;
  alert(message);
}

alert(userName);
showMessage();
alert(userName);
*/

{
  let userName = "John";

  function showMessageModify() {
    userName = "Bob";
    let message = "Hello, " + userName;
    alert(message);
  }

  alert(userName);
  showMessageModify();
  alert(userName);
}

// Local shadows outer

/*
let userName = 'John';

function showMessage() {
  let userName = "Bob";
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage();
alert(userName);
*/

{
  let userName = "John";

  function showMessageShadow() {
    let userName = "Bob";
    let message = "Hello, " + userName;
    alert(message);
  }

  showMessageShadow();
  alert(userName);
}

// Parameters

/*
function showMessage(from, text) {
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!');
showMessage('Ann', "What's up?");
*/

function showMessageParams(from, text) {
  alert(from + ": " + text);
}

showMessageParams("Ann", "Hello!");
showMessageParams("Ann", "What's up?");

// Parameter is copied

/*
function showMessage(from, text) {
  from = '*' + from + '*';
  alert(from + ': ' + text);
}

let from = "Ann";
showMessage(from, "Hello");
alert(from);
*/

{
  function showMessageCopy(from, text) {
    from = "*" + from + "*";
    alert(from + ": " + text);
  }

  let sender = "Ann";
  showMessageCopy(sender, "Hello");
  alert(sender);
}

// Default values

/*
function showMessage(from, text = "no text given") {
  alert(from + ": " + text);
}

showMessage("Ann");
showMessage("Ann", undefined);
*/

function showMessageDefault(from, text = "no text given") {
  alert(from + ": " + text);
}

showMessageDefault("Ann");
showMessageDefault("Ann", undefined);

// Old style: undefined check

/*
function showMessage(from, text) {
  if (text === undefined) {
    text = 'no text given';
  }
  alert(from + ": " + text);
}
*/

function showMessageOld(from, text) {
  if (text === undefined) {
    text = "no text given";
  }
  alert(from + ": " + text);
}

showMessageOld("Ann");

// Old style: ||

/*
function showMessage(from, text) {
  text = text || 'no text given';
  alert(from + ": " + text);
}
*/

function showMessageOr(from, text) {
  text = text || "no text given";
  alert(from + ": " + text);
}

showMessageOr("Ann");

// Alternative default inside function

/*
function showMessage(text) {
  if (text === undefined) {
    text = 'empty message';
  }
  alert(text);
}
showMessage();
*/

function showMessageAlt(text) {
  if (text === undefined) {
    text = "empty message";
  }
  alert(text);
}

showMessageAlt();

// Nullish coalescing ??

/*
function showCount(count) {
  alert(count ?? "unknown");
}
showCount(0);
showCount(null);
showCount();
*/

function showCount(count) {
  alert(count ?? "unknown");
}

showCount(0);
showCount(null);
showCount();

// Returning a value

/*
function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
alert(result);
*/

function sum(first, second) {
  return first + second;
}

let sumResult = sum(1, 2);
alert(sumResult);

// checkAge

/*
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}
let age = prompt('How old are you?', 18);
if (checkAge(age)) {
  alert('Access granted');
} else {
  alert('Access denied');
}
*/

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?");
  }
}

let ageValue = 20;

if (checkAge(ageValue)) {
  alert("Access granted");
} else {
  alert("Access denied");
}

// return without value

/*
function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }
  alert("Showing you the movie");
}
*/

function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }
  alert("Showing you the movie");
}

showMovie(ageValue);

// Function returns undefined

/*
function doNothing() {}
alert(doNothing() === undefined);

function doNothing() {
  return;
}
alert(doNothing() === undefined);
*/

function doNothing() {
  return;
}

alert(doNothing() === undefined);

// return on the same line (multiline expression)

/*
return (
  some + long + expression
);
*/

function calcExpression() {
  return 2 + 2 + 2;
}

alert(calcExpression());

// showPrimes – with label

/*
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    alert(i);
  }
}
*/

function showPrimes(primeLimit) {
  nextPrime: for (let candidate = 2; candidate < primeLimit; candidate++) {
    for (let divisor = 2; divisor < candidate; divisor++) {
      if (candidate % divisor == 0) continue nextPrime;
    }
    alert(candidate);
  }
}

showPrimes(10);

// showPrimes – with isPrime

/*
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    alert(i);
  }
}
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
*/

function showPrimesClean(primeLimit) {
  for (let num = 2; num < primeLimit; num++) {
    if (!isPrime(num)) continue;
    alert(num);
  }
}

function isPrime(number) {
  for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor == 0) return false;
  }
  return true;
}

showPrimesClean(10);

alert("The End of 2.15. Functions.");
