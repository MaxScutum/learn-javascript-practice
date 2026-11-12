// 8.3. Native prototypes. Task.

alert("8.3. Native prototypes. Task.");

// --- Task 1. Add method "f.defer(ms)" to functions (importance: 5) ---

/*
Runs the function after ms milliseconds.
*/

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

{
  function f() {
    alert("Hello!");
  }

  f.defer(1000); // Hello! after 1 second
}

// --- Task 2. Add the decorating "defer()" to functions (importance: 4) ---

/*
Returns a wrapper that delays the call by ms
and forwards all arguments (+ this).
*/

Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

{
  function f(a, b) {
    alert(a + b);
  }

  f.defer(1000)(1, 2); // 3 after 1 second
}

alert("The End of 8.3. Native prototypes. Task. (deferred alerts may follow)");
