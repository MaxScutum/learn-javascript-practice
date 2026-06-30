// 2.15. Functions. Task.

// --- Task 1. Is "else" required? (importance: 4) ---
/*
The function returns true if age > 18.
Otherwise asks for confirmation.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

Without else:

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm('Did parents allow you?');
}

Answer: NO difference. If age > 18, function returns true and stops.
Otherwise execution continues to the second return.
*/

function checkAgeWithElse(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}

function checkAgeWithoutElse(age) {
  if (age > 18) {
    return true;
  }
  return confirm("Did parents allow you?");
}

let testAge = 16;

alert(checkAgeWithElse(testAge));
alert(checkAgeWithoutElse(testAge));
alert("Task 1 answer: both variants work the same");

// --- Task 2. Rewrite using '?' or '||' (importance: 4) ---
/*
Rewrite checkAge in one line without if:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
*/

// Variant 1: question mark operator
function checkAgeQuestion(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}

// Variant 2: OR operator
function checkAgeOr(age) {
  return age > 18 || confirm("Did parents allow you?");
}

let taskAge = 20;

alert(checkAgeQuestion(taskAge));
alert(checkAgeOr(taskAge));

// --- Task 3. Function min(a, b) (importance: 1) ---
/*
Write a function min(a, b) which returns the least of two numbers.

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function min(first, second) {
  return first < second ? first : second;
}

alert(min(2, 5) == 2);
alert(min(3, -1) == -1);
alert(min(1, 1) == 1);

alert(min(2, 5));
alert(min(3, -1));
alert(min(1, 1));

// --- Task 4. Function pow(x, n) (importance: 4) ---
/*
Write a function pow(x, n) that returns x in power n.

pow(3, 2) = 9
pow(3, 3) = 27
pow(1, 100) = 1

Create a web-page that prompts for x and n, then shows the result.
n must be a natural number (integer >= 1).
*/

function pow(base, exponent) {
  let result = 1;

  for (let step = 1; step <= exponent; step++) {
    result *= base;
  }

  return result;
}

alert(pow(3, 2));
alert(pow(3, 3));
alert(pow(1, 100));

let baseValue = +prompt("x?", "");
let exponentValue = +prompt("n?", "");

if (exponentValue < 1) {
  alert(`Степень ${exponentValue} должна быть натуральным числом (целое >= 1)`);
} else {
  alert(pow(baseValue, exponentValue));
}

alert("The End of 2.15. Functions. Task.");
