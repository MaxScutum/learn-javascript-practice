// 6.10. Function binding

/*
Problem: passing a method separately from the object → this is lost.
Typical with setTimeout / callbacks.
*/

alert("6.10. Function binding");

// Losing "this"

{
  let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    },
  };

  setTimeout(user.sayHi, 1000); // Hello, undefined!

  // same as:
  // let f = user.sayHi;
  // setTimeout(f, 1000);
}

// Solution 1: wrapper

{
  let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    },
  };

  setTimeout(function () {
    user.sayHi(); // Hello, John!
  }, 1000);

  // shorter
  // setTimeout(() => user.sayHi(), 1000);
}

{
  // vulnerability: user may change before timeout fires
  let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    },
  };

  setTimeout(() => user.sayHi(), 1000);

  user = {
    sayHi() {
      alert("Another user in setTimeout!");
    },
  };
  // → Another user in setTimeout!
}

// Solution 2: bind

/*
let boundFunc = func.bind(context);
boundFunc(...) ≈ func(...) with this fixed to context.
*/

{
  let user = {
    firstName: "John",
  };

  function func() {
    alert(this.firstName);
  }

  let funcUser = func.bind(user);
  funcUser(); // John
}

{
  let user = {
    firstName: "John",
  };

  function func(phrase) {
    alert(phrase + ", " + this.firstName);
  }

  let funcUser = func.bind(user);
  funcUser("Hello"); // Hello, John
}

{
  let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    },
  };

  let sayHi = user.sayHi.bind(user);

  sayHi(); // Hello, John!
  setTimeout(sayHi, 1000); // Hello, John!

  // changing user later does NOT affect bound sayHi
  user = {
    sayHi() {
      alert("Another user in setTimeout!");
    },
  };
}

{
  let user = {
    firstName: "John",
    say(phrase) {
      alert(`${phrase}, ${this.firstName}!`);
    },
  };

  let say = user.say.bind(user);

  say("Hello"); // Hello, John!
  say("Bye"); // Bye, John!
}

// bindAll — bind every method

{
  let user = {
    firstName: "John",
    sayHi() {
      alert(`Hi, ${this.firstName}`);
    },
    sayBye() {
      alert(`Bye, ${this.firstName}`);
    },
  };

  for (let key in user) {
    if (typeof user[key] == "function") {
      user[key] = user[key].bind(user);
    }
  }

  setTimeout(user.sayHi, 500); // Hi, John
}

// Partial functions

/*
Full syntax:
let bound = func.bind(context, arg1, arg2, ...)

Fixes this AND starting arguments.
→ "partial application"
*/

{
  function mul(a, b) {
    return a * b;
  }

  let double = mul.bind(null, 2);

  alert(double(3)); // 6
  alert(double(4)); // 8
  alert(double(5)); // 10
}

{
  function mul(a, b) {
    return a * b;
  }

  let triple = mul.bind(null, 3);

  alert(triple(3)); // 9
  alert(triple(4)); // 12
  alert(triple(5)); // 15
}

// Partial without fixing this

/*
bind always needs a context.
For args-only: write partial() yourself (or _.partial).
*/

{
  function partial(func, ...argsBound) {
    return function (...args) {
      return func.call(this, ...argsBound, ...args);
    };
  }

  let user = {
    firstName: "John",
    say(time, phrase) {
      alert(`[${time}] ${this.firstName}: ${phrase}!`);
    },
  };

  user.sayNow = partial(
    user.say,
    new Date().getHours() + ":" + new Date().getMinutes(),
  );

  user.sayNow("Hello"); // [HH:MM] John: Hello!
}

/*
Summary:
- bind(context, ...args) → fixed this (+ optional args)
- wrappers / arrows — simple, but may see later changes of the variable
- partial = fix some arguments (less universal function)
*/

alert("The End of 6.10. Function binding (timeout alerts may follow)");
