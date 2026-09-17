// 6.1. Recursion and stack

/*
Recursion: a function calls itself.
Useful when a task splits into simpler tasks of the same kind.
*/

alert("6.1. Recursion and stack");

// Two ways: iterative vs recursive

{
  function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  }

  alert(pow(2, 3)); // 8
}

{
  function pow(x, n) {
    if (n == 1) {
      return x; // base of recursion
    }
    return x * pow(x, n - 1); // recursive step
  }

  alert(pow(2, 3)); // 8
}

{
  // shorter
  function pow(x, n) {
    return n == 1 ? x : x * pow(x, n - 1);
  }

  alert(pow(2, 4)); // 16
}

/*
Recursion depth ≈ max nested calls (here = n).
JS engines usually allow ~10000, not 100000.
Loop uses less memory (one context).
Any recursion can be rewritten as a loop.
*/

// Execution context and stack

/*
Each call has an execution context (vars, where we are...).
Nested call:
1) pause current function
2) push its context to the stack
3) run nested call
4) pop context and resume

pow(2, 3):
pow(2,3) → pow(2,2) → pow(2,1)=2 → 4 → 8
Depth = 3 contexts at peak.
*/

{
  function pow(x, n) {
    alert(`call pow(${x}, ${n})`);
    if (n == 1) return x;
    return x * pow(x, n - 1);
  }

  alert(pow(2, 3)); // 8
}

// Recursive traversals

/*
Company structure:
- array of people → sum salaries (base)
- object of departments → recurse into each (step)
*/

{
  let company = {
    sales: [
      { name: "John", salary: 1000 },
      { name: "Alice", salary: 1600 },
    ],
    development: {
      sites: [
        { name: "Peter", salary: 2000 },
        { name: "Alex", salary: 1800 },
      ],
      internals: [{ name: "Jack", salary: 1300 }],
    },
  };

  function sumSalaries(department) {
    if (Array.isArray(department)) {
      return department.reduce((prev, current) => prev + current.salary, 0);
    }

    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }

  alert(sumSalaries(company)); // 7700
}

// Linked list (recursive structure)

/*
Element: { value, next }  (next = next element or null)

Fast insert/delete anywhere (no renumbering).
Slow access by index (must walk from head).
Good for queue/deque.
*/

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

  // walk the list
  let text = "";
  let node = list;
  while (node) {
    text += node.value + " ";
    node = node.next;
  }
  alert(text); // 1 2 3 4
}

{
  let list = { value: 1 };
  list.next = { value: 2 };
  list.next.next = { value: 3 };
  list.next.next.next = { value: 4 };
  list.next.next.next.next = null;

  // prepend
  list = { value: "new item", next: list };
  alert(list.value); // new item
  alert(list.next.value); // 1

  // remove the element after head (value 1)
  list.next = list.next.next;
  alert(list.next.value); // 2
}

/*
Summary:
- base case + recursive step
- stack of execution contexts
- great for nested/unknown-depth structures
- linked list: value + next
*/

alert("The End of 6.1. Recursion and stack.");
