// 4.6. Optional chaining '?.'.

/*
Optional chaining ?. is a safe way to access nested object properties,
even if an intermediate property doesn't exist.
Old browsers may need polyfills.
*/

alert("4.6. Optional chaining ?.");

// The “non-existing property” problem

/*
let user = {}; // a user without "address" property

alert(user.address.street); // Error!

user.address is undefined → getting .street fails.
In practice we'd often prefer undefined instead of an error.
*/

/*
Obvious check with ? :

let user = {};
alert(user.address ? user.address.street : undefined);

Works, but "user.address" appears twice. Nested paths get ugly:

alert(user.address ? user.address.street ? user.address.street.name : null : null);

A bit better with &&:

alert(user.address && user.address.street && user.address.street.name); // undefined
Still duplicates property names.
*/

{
  let user = {};

  alert(user.address ? user.address.street : undefined); // undefined
  alert(user.address && user.address.street && user.address.street.name); // undefined
}

// Optional chaining

/*
?. stops evaluation if the value before ?. is undefined or null
and returns undefined.

value?.prop:
- works as value.prop, if value exists
- otherwise returns undefined

let user = {};
alert(user?.address?.street); // undefined (no error)
*/

{
  let user = {};

  alert(user?.address?.street); // undefined
}

{
  let user = {
    address: {
      street: "Main",
    },
  };

  alert(user?.address?.street); // Main
}

/*
Reading works even if user itself is null/undefined:

let user = null;
alert(user?.address); // undefined
alert(user?.address.street); // undefined

Note: ?. makes optional only the value BEFORE it.
user?.address.street.name — only user may be null/undefined.
Further properties are accessed normally.
*/

{
  let user = null;

  alert(user?.address); // undefined
  alert(user?.address?.street); // undefined
}

/*
Don't overuse ?.
Use it only where it's ok that something doesn't exist.

If user must exist, but address is optional:
  user.address?.street
not:
  user?.address?.street

Otherwise real bugs can be hidden.
*/

// The variable before ?. must be declared

/*
If there's no variable user at all:
user?.address; // ReferenceError: user is not defined

The variable must be declared (let/const/var or parameter).
*/

// Short-circuiting

/*
?. immediately stops if the left part doesn't exist.
Further calls/operations to the right are not made.

let user = null;
let x = 0;

user?.sayHi(x++); // no sayHi, no x++

alert(x); // 0
*/

{
  let user = null;
  let counter = 0;

  user?.sayHi(counter++);

  alert(counter); // 0
}

// Other variants: ?.(), ?.[]

/*
?.() — call a function that may not exist.

let userAdmin = {
  admin() {
    alert("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing (no such method)
*/

{
  let userAdmin = {
    admin() {
      alert("I am admin");
    },
  };

  let userGuest = {};

  userAdmin.admin?.(); // I am admin
  userGuest.admin?.(); // nothing
}

/*
?.[] — safe property access with brackets.

let key = "firstName";

let user1 = { firstName: "John" };
let user2 = null;

alert(user1?.[key]); // John
alert(user2?.[key]); // undefined
*/

{
  let key = "firstName";

  let user1 = {
    firstName: "John",
  };

  let user2 = null;

  alert(user1?.[key]); // John
  alert(user2?.[key]); // undefined
}

/*
Also with delete:
delete user?.name; // deletes user.name if user exists

Cannot use ?. on the left side of assignment:
user?.name = "John"; // Error → undefined = "John"
*/

{
  let user = {
    name: "John",
  };

  delete user?.name;
  alert(user.name); // undefined
}

{
  let user = null;

  delete user?.name; // no error
  alert("delete on null user: ok");
}

/*
Summary — three forms:
- obj?.prop       → obj.prop if obj exists, else undefined
- obj?.[prop]     → obj[prop] if obj exists, else undefined
- obj.method?.()  → calls method if it exists, else undefined

Use ?. carefully, only where missing left part is acceptable.
*/

alert("The End of 4.6. Optional chaining ?.");
