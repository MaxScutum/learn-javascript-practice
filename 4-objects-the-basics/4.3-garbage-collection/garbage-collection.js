// 4.3. Garbage collection.

/*
Memory management in JavaScript is automatic and invisible.
We create primitives, objects, functions — all that takes memory.

Main concept: reachability.
"Reachable" values are accessible somehow — they stay in memory.

Roots (inherently reachable):
- currently executing function, its locals and parameters
- nested call chain functions and their locals
- global variables

Any other value is reachable if it is reachable from a root
by a reference or a chain of references.

Garbage collector removes unreachable objects.
*/

alert("4.3. Garbage collection");

// A simple example

/*
let user = {
  name: "John"
};

user = null;
// John becomes unreachable and can be removed
*/

{
  let user = {
    name: "John",
  };

  alert(user.name); // John — reachable via user

  user = null;
  alert(user); // null — reference lost, object can be collected
}

// Two references

/*
let user = {
  name: "John"
};

let admin = user;

user = null;
// object is still reachable via admin
*/

{
  let user = {
    name: "John",
  };

  let admin = user;

  user = null;

  alert(admin.name); // John — still reachable via admin
  alert(user); // null
}

// Interlinked objects

/*
function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({ name: "John" }, { name: "Ann" });

delete family.father;
delete family.mother.husband;
// John becomes unreachable (no incoming references)
*/

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

{
  let family = marry(
    {
      name: "John",
    },
    {
      name: "Ann",
    },
  );

  alert(family.father.name); // John
  alert(family.mother.name); // Ann
  alert(family.mother.husband.name); // John

  delete family.father;
  delete family.mother.husband;

  alert(family.father); // undefined
  alert(family.mother.husband); // undefined
  alert(family.mother.name); // Ann — still reachable
  alert("John is unreachable now (no incoming refs)");
}

// Unreachable island

/*
family = null;
// whole connected group becomes unreachable,
// even if John and Ann still reference each other
*/

{
  let family = marry(
    {
      name: "John",
    },
    {
      name: "Ann",
    },
  );

  alert("Before: family exists, island is reachable");

  family = null;

  alert(family); // null
  alert("After family = null: the whole island is unreachable");
}

/*
Important:
Being referenced != being reachable from a root.
A pack of interlinked objects can become unreachable as a whole.
Outgoing references do not keep an object alive by themselves.
Only incoming reachability from roots matters.
*/

/*
Internal algorithms: mark-and-sweep

1. Mark roots
2. Visit and mark references from them
3. Continue marking reachable references
4. Remove all unmarked (unreachable) objects

Imagine pouring paint from roots through all references.
Unpainted objects are removed.
*/

/*
Optimizations used by engines:

- Generational collection
  new short-lived objects are cleaned more often;
  old long-lived objects are checked less often

- Incremental collection
  many small GC steps instead of one long pause

- Idle-time collection
  GC prefers to run when CPU is idle
*/

/*
Summary:
- Garbage collection is automatic
- We cannot force or prevent it
- Objects stay in memory while reachable
- Referenced objects can still be unreachable as an island
*/

alert("The End of 4.3. Garbage collection.");
