// 4.2. Object references and copying.

/*
Objects are stored and copied "by reference".
Primitives (string, number, boolean, etc.) are always copied "as a whole value".
*/

// Primitive copy — independent values

/*
let message = "Hello!";
let phrase = message;
*/

{
  let message = "Hello!";
  let phrase = message;

  phrase = "Bye!";
  alert(message); // Hello! — still the same
  alert(phrase); // Bye!
}

/*
A variable assigned to an object stores not the object itself,
but its "address in memory" — a reference.
*/

// Copying by reference

/*
let user = { name: "John" };
let admin = user; // copies the reference

admin.name = "Pete";
alert(user.name); // Pete — same object
*/

{
  let user = { name: "John" };
  let admin = user;

  admin.name = "Pete";
  alert(user.name); // Pete
  alert(admin.name); // Pete
}

// Comparison by reference

/*
Objects are equal only if they are the same object.

let a = {};
let b = a;
alert(a == b); // true
alert(a === b); // true

let a = {};
let b = {};
alert(a == b); // false — two independent objects
*/

{
  let first = {};
  let second = first;

  alert(first == second); // true
  alert(first === second); // true
}

{
  let first = {};
  let second = {};

  alert(first == second); // false
}

/*
Cloning and merging, Object.assign

Object.assign(dest, [src1, src2, src3...])
- copies properties from src objects into dest
- returns dest
*/

// Manual clone with for..in

/*
let user = {
  name: "John",
  age: 30
};

let clone = {};

for (let key in user) {
  clone[key] = user[key];
}

clone.name = "Pete";
alert(user.name); // John
*/

{
  let user = {
    name: "John",
    age: 30,
  };

  let clone = {};

  for (let key in user) {
    clone[key] = user[key];
  }

  clone.name = "Pete";
  alert(user.name); // John
  alert(clone.name); // Pete
}

// Object.assign — merge objects

/*
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2);
// user = { name: "John", canView: true, canEdit: true }
*/

{
  let user = { name: "John" };
  let permissions1 = { canView: true };
  let permissions2 = { canEdit: true };

  Object.assign(user, permissions1, permissions2);

  alert(user.name); // John
  alert(user.canView); // true
  alert(user.canEdit); // true
}

// Object.assign overwrites existing keys

/*
let user = { name: "John" };
Object.assign(user, { name: "Pete" });
alert(user.name); // Pete
*/

{
  let user = { name: "John" };
  Object.assign(user, { name: "Pete" });
  alert(user.name); // Pete
}

// Object.assign for simple cloning

/*
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);
*/

{
  let user = {
    name: "John",
    age: 30,
  };

  let clone = Object.assign({}, user);

  clone.name = "Pete";
  alert(user.name); // John
  alert(clone.name); // Pete
}

/*
Nested cloning

Object.assign is a shallow copy:
nested objects are still copied by reference.
*/

{
  let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50,
    },
  };

  alert(user.sizes.height); // 182

  let clone = Object.assign({}, user);

  alert(user.sizes === clone.sizes); // true — same nested object

  user.sizes.width++;
  alert(clone.sizes.width); // 51 — shared nested object
}

/*
Deep clone:
- recursion
- _.cloneDeep(obj) from lodash
- structuredClone() in modern browsers
*/

{
  let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50,
    },
  };

  let deepClone = structuredClone(user);

  alert(user.sizes === deepClone.sizes); // false — independent nested object

  user.sizes.width++;
  alert(user.sizes.width); // 51
  alert(deepClone.sizes.width); // 50
}

/*
Const objects can be changed

const user = {
  name: "John"
};

user.name = "Pete"; // works
// user = ... would be an error
*/

{
  const user = {
    name: "John",
  };

  user.name = "Pete";
  alert(user.name); // Pete
}

/*
Summary:
- Objects are assigned and copied by reference
- A variable stores a reference (memory address), not the object value
- Operations through copied references change the same object
- For a real copy (clone):
  - Object.assign / for..in → shallow copy
  - structuredClone / _.cloneDeep → deep copy
*/

alert("The End of 4.2. Object references and copying.");
