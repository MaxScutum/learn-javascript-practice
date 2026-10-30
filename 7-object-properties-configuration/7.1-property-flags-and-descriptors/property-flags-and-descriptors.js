// 7.1. Property flags and descriptors

/*
Property = more than key-value.
Three flags:
- writable     — can change value
- enumerable   — shows in loops / Object.keys
- configurable — can delete / change flags

Usual creation → all flags true.
*/

alert("7.1. Property flags and descriptors");

// getOwnPropertyDescriptor

/*
Object.getOwnPropertyDescriptor(obj, propertyName)
→ { value, writable, enumerable, configurable }
*/

{
  let user = {
    name: "John",
  };

  let descriptor = Object.getOwnPropertyDescriptor(user, "name");
  alert(JSON.stringify(descriptor, null, 2));
  /*
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
  */
}

// defineProperty

/*
Object.defineProperty(obj, propertyName, descriptor)

If property exists → update flags.
If new → missing flags default to false.
*/

{
  let user = {};

  Object.defineProperty(user, "name", {
    value: "John",
  });

  let descriptor = Object.getOwnPropertyDescriptor(user, "name");
  alert(JSON.stringify(descriptor, null, 2));
  /*
  writable/enumerable/configurable → false
  */
}

// Non-writable

{
  let user = {
    name: "John",
  };

  Object.defineProperty(user, "name", {
    writable: false,
  });

  try {
    user.name = "Pete"; // Error in strict mode
  } catch (err) {
    alert("non-writable: " + err.message);
  }

  alert(user.name); // John
}

{
  // create from scratch — list true flags explicitly
  let user = {};

  Object.defineProperty(user, "name", {
    value: "John",
    enumerable: true,
    configurable: true,
  });

  alert(user.name); // John

  try {
    user.name = "Pete";
  } catch (err) {
    alert("new prop non-writable: " + err.message);
  }
}

/*
In non-strict mode: no error, but write still fails (ignored).
*/

// Non-enumerable

{
  let user = {
    name: "John",
    toString() {
      return this.name;
    },
  };

  for (let key in user) alert(key); // name, toString
}

{
  let user = {
    name: "John",
    toString() {
      return this.name;
    },
  };

  Object.defineProperty(user, "toString", {
    enumerable: false,
  });

  for (let key in user) alert(key); // name
  alert(Object.keys(user)); // name
}

// Non-configurable

/*
configurable: false
- can't delete
- can't change flags (mostly)
- one-way: can't turn configurable back on

value can still change if writable: true
*/

{
  let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
  alert(JSON.stringify(descriptor, null, 2));
  // writable/enumerable/configurable all false
}

{
  try {
    Math.PI = 3;
  } catch (err) {
    alert("Math.PI assign: " + err.message);
  }

  try {
    Object.defineProperty(Math, "PI", { writable: true });
  } catch (err) {
    alert("Math.PI redefine: " + err.message);
  }
}

{
  let user = {
    name: "John",
  };

  Object.defineProperty(user, "name", {
    configurable: false,
  });

  user.name = "Pete"; // ok (still writable)
  alert(user.name); // Pete

  try {
    delete user.name; // Error
  } catch (err) {
    alert("non-configurable delete: " + err.message);
  }
}

{
  // forever sealed (like Math.PI)
  let user = {
    name: "John",
  };

  Object.defineProperty(user, "name", {
    writable: false,
    configurable: false,
  });

  try {
    user.name = "Pete";
  } catch (err) {
    alert("sealed assign: " + err.message);
  }

  try {
    delete user.name;
  } catch (err) {
    alert("sealed delete: " + err.message);
  }

  try {
    Object.defineProperty(user, "name", { value: "Pete" });
  } catch (err) {
    alert("sealed redefine: " + err.message);
  }
}

/*
Exception: for non-configurable, writable true → false is allowed.
Not the other way.
*/

// defineProperties / getOwnPropertyDescriptors

{
  let user = {};

  Object.defineProperties(user, {
    name: { value: "John", writable: false, enumerable: true },
    surname: { value: "Smith", writable: false, enumerable: true },
  });

  alert(user.name + " " + user.surname); // John Smith
}

{
  // flags-aware clone
  let user = {
    name: "John",
  };

  Object.defineProperty(user, "name", {
    writable: false,
  });

  let clone = Object.defineProperties(
    {},
    Object.getOwnPropertyDescriptors(user),
  );

  let descriptor = Object.getOwnPropertyDescriptor(clone, "name");
  alert(descriptor.writable); // false (flags copied)

  // for..in copy would NOT copy flags / skips non-enumerable & symbols
}

// Sealing globally (rarely used)

/*
Object.preventExtensions(obj) — no new properties
Object.seal(obj)              — no add/remove; configurable:false all
Object.freeze(obj)            — no add/remove/change; configurable+writable false

Tests:
Object.isExtensible(obj)
Object.isSealed(obj)
Object.isFrozen(obj)
*/

{
  let user = { name: "John" };

  Object.freeze(user);

  try {
    user.name = "Pete";
  } catch (err) {
    alert("frozen: " + err.message);
  }

  alert(Object.isFrozen(user)); // true
}

/*
Summary:
- flags: writable / enumerable / configurable
- getOwnPropertyDescriptor / defineProperty / defineProperties
- getOwnPropertyDescriptors — clone with flags
- preventExtensions / seal / freeze — whole object
*/

alert("The End of 7.1. Property flags and descriptors");
