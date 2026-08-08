// 5.4. Arrays. Task.

alert("5.4. Arrays. Task.");

// --- Task 1. Is array copied? (importance: 3) ---
/*
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
alert(fruits.length); // ?

Answer: 4
Arrays are copied by reference.
shoppingCart and fruits are the same array.
*/

{
  let fruits = ["Apples", "Pear", "Orange"];
  let shoppingCart = fruits;

  shoppingCart.push("Banana");

  alert(fruits.length); // 4
  alert(fruits); // Apples,Pear,Orange,Banana
}

// --- Task 2. Array operations. (importance: 5) ---
/*
1. styles = ["Jazz", "Blues"]
2. append "Rock-n-Roll"
3. replace middle with "Classics" (works for any odd length)
4. shift first and show it
5. unshift "Rap", "Reggae"
*/

{
  let styles = ["Jazz", "Blues"];
  alert(styles); // Jazz,Blues

  styles.push("Rock-n-Roll");
  alert(styles); // Jazz,Blues,Rock-n-Roll

  styles[Math.floor((styles.length - 1) / 2)] = "Classics";
  alert(styles); // Jazz,Classics,Rock-n-Roll

  alert(styles.shift()); // Jazz
  alert(styles); // Classics,Rock-n-Roll

  styles.unshift("Rap", "Reggae");
  alert(styles); // Rap,Reggae,Classics,Rock-n-Roll
}

// --- Task 3. Calling in an array context (importance: 5) ---
/*
let arr = ["a", "b"];
arr.push(function() {
  alert(this);
});
arr[2](); // ?

Answer: a,b,function...
Because arr[2]() is a method call:
this = arr (the object before the dot).
alert(arr) shows elements joined by comma.
*/

{
  let arr = ["a", "b"];

  arr.push(function () {
    alert(this);
  });

  arr[2](); // a,b,function(){...}
}

// --- Task 4. Sum input numbers (importance: 4) ---
/*
sumInput():
- prompt values into an array
- stop on non-numeric / empty / Cancel
- 0 is valid
- return sum
*/

function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("Enter a number", "0");

    if (value === null || value === "" || !isFinite(value)) {
      break;
    }

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

{
  alert(sumInput());
}

// --- Task 5. A maximal subarray (importance: 2) ---
/*
getMaxSubSum(arr) — max sum of contiguous subarray.
If all negative → 0.

Fast O(n) solution (Kadane-like):
keep partialSum, reset when < 0.
*/

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}

{
  alert(getMaxSubSum([-1, 2, 3, -9])); // 5
  alert(getMaxSubSum([2, -1, 2, 3, -9])); // 6
  alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
  alert(getMaxSubSum([-2, -1, 1, 2])); // 3
  alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
  alert(getMaxSubSum([1, 2, 3])); // 6
  alert(getMaxSubSum([-1, -2, -3])); // 0
}

alert("The End of 5.4. Arrays. Task.");
