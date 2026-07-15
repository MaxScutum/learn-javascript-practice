// 3.3. Comments.

// Bad comments — explain "what" instead of writing clear code

/*
// This code does this (...) and that (...)
very;
complex;
code;
*/

// Recipe: extract code into functions (self-documenting)

/*
function showPrimes(n) {
  nextPrime:
  for (let i = 2; i < n; i++) {

    // check if i is a prime number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }
}
*/

function showPrimesBadStyle(limit) {
  nextPrime: for (let candidate = 2; candidate < limit; candidate++) {
    // check if candidate is a prime number
    for (let divisor = 2; divisor < candidate; divisor++) {
      if (candidate % divisor == 0) continue nextPrime;
    }

    alert(candidate);
  }
}

showPrimesBadStyle(10);

/*
Better: use a separate function isPrime

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

function showPrimes(limit) {
  for (let num = 2; num < limit; num++) {
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

showPrimes(10);

// Recipe: create functions instead of comment blocks

/*
// here we add whiskey
for (let i = 0; i < 10; i++) {
  let drop = getWhiskey();
  smell(drop);
  add(drop, glass);
}

// here we add juice
for (let t = 0; t < 3; t++) {
  let tomato = getTomato();
  examine(tomato);
  let juice = press(tomato);
  add(juice, glass);
}
*/

function getWhiskey() {
  return "whiskey drop";
}

function smell(drop) {
  // smell step for the demo
}

function add(item, container) {
  container.push(item);
}

function getTomato() {
  return "tomato";
}

function examine(tomato) {
  // examine step for the demo
}

function press(tomato) {
  return tomato + " juice";
}

let glass = [];

addWhiskey(glass);
addJuice(glass);
alert(glass.join(", "));

function addWhiskey(container) {
  for (let step = 0; step < 10; step++) {
    let drop = getWhiskey();
    smell(drop);
    add(drop, container);
  }
}

function addJuice(container) {
  for (let step = 0; step < 3; step++) {
    let tomato = getTomato();
    examine(tomato);
    let juice = press(tomato);
    add(juice, container);
  }
}

// Good comments — JSDoc for parameters and usage

/*
/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */

/*
function pow(x, n) {
  ...
}
*/

/**
 * Returns base raised to the exponent power.
 *
 * @param {number} base The number to raise.
 * @param {number} exponent The power, must be a natural number.
 * @return {number} base raised to the exponent power.
 */
function pow(base, exponent) {
  let result = 1;

  for (let step = 0; step < exponent; step++) {
    result *= base;
  }

  return result;
}

alert(pow(2, 3)); // 8

/*
Good comments:
- Architecture overview
- Function parameters and usage (JSDoc)
- Why this solution was chosen
- Non-obvious details / tricky parts

Avoid comments that only explain what obvious code does.
Prefer self-documenting code with clear function names.
*/

alert("The End of 3.3. Comments.");
