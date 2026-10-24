// 6.11. Arrow functions revisited

/*
Not only shorthand — special features.

Common: pass a small function somewhere else
(forEach, setTimeout, …) and keep the current context.
*/

alert("6.11. Arrow functions revisited");

// No "this" — taken from the outside

{
  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
      this.students.forEach((student) => alert(this.title + ": " + student));
    },
  };

  group.showList();
  // Our Group: John
  // Our Group: Pete
  // Our Group: Alice
}

{
  // regular function inside forEach → this = undefined (strict) / window
  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
      this.students.forEach(function (student) {
        try {
          alert(this.title + ": " + student);
        } catch (err) {
          alert("regular function: " + err.message);
        }
      });
    },
  };

  group.showList();
}

// Can't run with new

{
  let getUser = () => ({ name: "John" });

  try {
    new getUser(); // Error
  } catch (err) {
    alert("arrow + new: " + err.message);
  }
}

/*
Arrow VS bind:
- bind(this) → creates a bound function with fixed this
- => → no this at all; lookup like a variable in outer LE
*/

// No "arguments"

/*
Useful in decorators: forward this + arguments easily.
*/

{
  function defer(f, ms) {
    return function () {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  }

  function sayHi(who) {
    alert("Hello, " + who);
  }

  let sayHiDeferred = defer(sayHi, 2000);
  sayHiDeferred("John"); // Hello, John after 2s
}

{
  // same without arrow — need extra variables
  function defer(f, ms) {
    return function (...args) {
      let ctx = this;
      setTimeout(function () {
        return f.apply(ctx, args);
      }, ms);
    };
  }

  function sayBye(who) {
    alert("Bye, " + who);
  }

  defer(sayBye, 1000)("Pete");
}

/*
Summary — arrow functions:
- no this
- no arguments
- can't new
- no super (later: Class inheritance)

Meant for short code that uses the outer context.
*/

alert(
  "The End of 6.11. Arrow functions revisited (deferred alerts may follow)",
);
