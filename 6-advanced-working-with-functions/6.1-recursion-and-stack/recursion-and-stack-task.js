// 6.1. Recursion and stack. Task.

alert("6.1. Recursion and stack. Task.");

// --- Task 1. Sum all numbers till the given one (importance: 5) ---
/*
sumTo(n) = 1 + 2 + ... + n
Three variants: loop, recursion, formula.

Fastest: formula (O(1))
Then: loop
Slowest: recursion (extra calls + stack)
Recursion for sumTo(100000)? Usually NO — stack overflow.
*/

function sumToLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumToRec(n) {
  if (n == 1) return 1;
  return n + sumToRec(n - 1);
}

function sumToFormula(n) {
  return (n * (n + 1)) / 2;
}

{
  alert(sumToLoop(100)); // 5050
  alert(sumToRec(100)); // 5050
  alert(sumToFormula(100)); // 5050
}

// --- Task 2. Calculate factorial (importance: 4) ---
/*
n! = n * (n-1)!
*/

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

{
  alert(factorial(5)); // 120
}

// --- Task 3. Fibonacci numbers (importance: 5) ---
/*
Naive recursion is too slow for fib(77).
Use loop (bottom-up).
*/

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

{
  alert(fib(3)); // 2
  alert(fib(7)); // 13
  alert(fib(77)); // 5527939700884757
}

// --- Task 4. Output a single-linked list (importance: 5) ---
/*
Loop is usually better for long lists (no stack growth).
Recursion is shorter/clearer for small depth.
*/

function printListLoop(list) {
  let text = "";
  let node = list;
  while (node) {
    text += node.value + " ";
    node = node.next;
  }
  alert(text);
}

function printListRec(list) {
  alert(list.value);
  if (list.next) {
    printListRec(list.next);
  }
}

{
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  };

  printListLoop(list); // 1 2 3 4
  printListRec(list); // 1, then 2, then 3, then 4
}

// --- Task 5. Output a single-linked list in reverse order (importance: 5) ---

function printReverseListRec(list) {
  if (list.next) {
    printReverseListRec(list.next);
  }
  alert(list.value);
}

function printReverseListLoop(list) {
  let arr = [];
  let node = list;

  while (node) {
    arr.push(node.value);
    node = node.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert(arr[i]);
  }
}

{
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  };

  printReverseListRec(list); // 4, 3, 2, 1
  printReverseListLoop(list); // 4, 3, 2, 1
}

alert("The End of 6.1. Recursion and stack. Task.");
