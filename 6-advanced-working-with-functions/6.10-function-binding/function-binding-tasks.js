// 6.10. Function binding. Task.

alert("6.10. Function binding. Task.");

// --- Task 1. Bound function as a method (importance: 5) ---

/*
Output: null (in browser → [object Window]? No — bind(null))

In browser non-strict: null/undefined this → window.
But bind(null) hard-fixes this to null.
So alert(this) → null

(Actually in browser: bound with null → this is null in strict,
in non-strict mode for bound functions this is still the bound value null)
*/

{
  function f() {
    alert(this); // null
  }

  let user = {
    g: f.bind(null),
  };

  user.g(); // null (bind ignores the object before the dot)
}

// --- Task 2. Second bind (importance: 5) ---

/*
Output: John

A function can't be bound twice.
The second bind is ignored — this stays from the first bind.
*/

{
  function f() {
    alert(this.name);
  }

  f = f.bind({ name: "John" }).bind({ name: "Ann" });

  f(); // John
}

// --- Task 3. Function property after bind (importance: 5) ---

/*
Output: undefined

bind creates a new exotic object (bound function).
It does not carry custom properties of the original.
sayHi.test = 5 → bound.test is undefined
*/

{
  function sayHi() {
    alert(this.name);
  }
  sayHi.test = 5;

  let bound = sayHi.bind({
    name: "John",
  });

  alert(bound.test); // undefined
}

// --- Task 4. Fix a function that loses "this" (importance: 5) ---

/*
askPassword(user.loginOk, user.loginFail) passes methods without object
→ this lost → error / wrong this.

Fix: bind (or wrappers).
*/

{
  function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
  }

  let user = {
    name: "John",

    loginOk() {
      alert(`${this.name} logged in`);
    },

    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  };

  // fixed line:
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

  // also ok:
  // askPassword(() => user.loginOk(), () => user.loginFail());
}

// --- Task 5. Partial application for login (importance: 5) ---

/*
Need: ok → user.login(true), fail → user.login(false)
with correct this.
*/

{
  function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
  }

  let user = {
    name: "John",

    login(result) {
      alert(this.name + (result ? " logged in" : " failed to log in"));
    },
  };

  // fixed fragment:
  askPassword(user.login.bind(user, true), user.login.bind(user, false));

  // also ok:
  // askPassword(() => user.login(true), () => user.login(false));
}

alert("The End of 6.10. Function binding. Task.");
