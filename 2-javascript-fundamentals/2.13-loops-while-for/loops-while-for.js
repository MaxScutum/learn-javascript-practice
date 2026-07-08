// 2.13. Loops: while and for.

/*
Loops are a way to repeat the same code multiple times.
*/

// The “while” loop

/*
let i = 0;
while (i < 3) {
  // shows 0, then 1, then 2
  alert(i);
  i++;
}
*/

let number = 0;
while (number < 3) {
  // shows 0, then 1, then 2
  alert(number);
  number++;
}

// A single execution of the loop body is called an iteration.

/*
let i = 3;
while (i) {
  // when i becomes 0, the condition becomes falsy, and the loop stops
  alert(i);
  i--;
}
*/

let value = 3;
while (value) {
  // when value becomes 0, the condition becomes falsy, and the loop stops
  alert(value);
  value--;
}

// Curly braces are not required for a single-line body

let i = 3;
while (i) alert(i--);

// The “do..while” loop

/*
The condition check can be moved below the loop body using the do..while syntax:
*/

do {
  // loop body
} while (condition);

/*
The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
*/

let count = 0;

do {
  alert(count);
  count++;
} while (count < 3);

// The “for” loop

/*
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}
*/

for (let index = 0; index < 3; index++) {
  alert(index);
}

// Inline variable declaration

/*
for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // error, no such variable
*/

for (let indexInline = 0; indexInline < 3; indexInline++) {
  alert(indexInline);
}

alert(indexInline);
// error, no such variable

// Using an existing variable

/*
let i = 0;
for (i = 0; i < 3; i++) {
  alert(i);
}
alert(i); // 3
*/

let outerIndex = 0;
for (outerIndex = 0; outerIndex < 3; outerIndex++) {
  alert(outerIndex);
}
alert(outerIndex); // 3

// Skipping parts

/*
let i = 0;
for (; i < 3; i++) {
  alert(i);
}
*/

let skipBegin = 0;
for (; skipBegin < 3; skipBegin++) {
  alert(skipBegin);
}

/*
let i = 0;
for (; i < 3;) {
  alert(i++);
}
*/

let skipStep = 0;
for (; skipStep < 3; ) {
  alert(skipStep++);
}

/*
for (;;) {
  // repeats without limits
}
*/

// Breaking the loop

/*
let sum = 0;
while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break;
  sum += value;
}
alert('Sum: ' + sum);
*/

let sum = 0;
let step = 1;
while (true) {
  if (step > 3) break;
  sum += step;
  step++;
}
alert("Sum: " + sum);

// Continue to the next iteration

/*
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  alert(i); // 1, then 3, 5, 7, 9
}
*/

for (let oddIndex = 0; oddIndex < 10; oddIndex++) {
  if (oddIndex % 2 == 0) continue;
  alert(oddIndex);
}

/*
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    alert(i);
  }
}
*/

for (let nestedIndex = 0; nestedIndex < 10; nestedIndex++) {
  if (nestedIndex % 2) {
    alert(nestedIndex);
  }
}

// Labels for break/continue

/*
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    if (!input) break outer;
  }
}
alert('Done!');

*/
outer: for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    alert(`coords (${row},${col})`);
    if (row === 1 && col === 1) break outer;
  }
}
alert("Done!");
alert("The End of 2.13. Loops: while and for.");
