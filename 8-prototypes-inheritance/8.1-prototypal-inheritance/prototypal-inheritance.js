// 8.1. Prototypal inheritance

/*
Reuse / extend objects without copying methods.
Hidden property [[Prototype]]: object or null.
If a property is missing → look it up in the prototype.
*/

alert("8.1. Prototypal inheritance");

// [[Prototype]] / __proto__

/*
__proto__ = historical getter/setter for [[Prototype]].
Modern: Object.getPrototypeOf / Object.setPrototypeOf (later).

Limits:
- no circular references
- only object or null (other types ignored)
- only ONE prototype
*/

{
  let animal = {
    eats: true,
  };
  let rabbit = {
    jumps: true,
  };

  rabbit.__proto__ = animal;

  alert(rabbit.eats); // true (from animal)
  alert(rabbit.jumps); // true
}

{
  let animal = {
    eats: true,
    walk() {
      alert("Animal walk");
    },
  };

  let rabbit = {
    jumps: true,
    __proto__: animal,
  };

  rabbit.walk(); // Animal walk
}

// Longer chain

{
  let animal = {
    eats: true,
    walk() {
      alert("Animal walk");
    },
  };

  let rabbit = {
    jumps: true,
    __proto__: animal,
  };

  let longEar = {
    earLength: 10,
    __proto__: rabbit,
  };

  longEar.walk(); // Animal walk
  alert(longEar.jumps); // true (from rabbit)
}

// Writing does NOT use prototype

/*
Read → may go to prototype.
Write/delete → on the object itself (data properties).
*/

{
  let animal = {
    eats: true,
    walk() {
      /* won't be used by rabbit after override */
    },
  };

  let rabbit = {
    __proto__: animal,
  };

  rabbit.walk = function () {
    alert("Rabbit! Bounce-bounce!");
  };

  rabbit.walk(); // Rabbit! Bounce-bounce!
}

// Exception: accessors — assignment calls the setter

{
  let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  };

  let admin = {
    __proto__: user,
    isAdmin: true,
  };

  alert(admin.fullName); // John Smith

  admin.fullName = "Alice Cooper";

  alert(admin.fullName); // Alice Cooper
  alert(user.fullName); // John Smith (user unchanged)
}

// this is NOT affected by prototypes

/*
In method call, this = object before the dot.
Even if the method was found in the prototype.
→ methods shared, state stays on each object.
*/

{
  let animal = {
    walk() {
      if (!this.isSleeping) {
        alert("I walk");
      }
    },
    sleep() {
      this.isSleeping = true;
    },
  };

  let rabbit = {
    name: "White Rabbit",
    __proto__: animal,
  };

  rabbit.sleep();

  alert(rabbit.isSleeping); // true
  alert(animal.isSleeping); // undefined
}

// for..in vs Object.keys

/*
for..in → own + inherited (enumerable)
Object.keys / values / … → own only
hasOwnProperty(key) → true if own
*/

{
  let animal = {
    eats: true,
  };

  let rabbit = {
    jumps: true,
    __proto__: animal,
  };

  alert(Object.keys(rabbit)); // jumps

  for (let prop in rabbit) alert(prop); // jumps, eats
}

{
  let animal = {
    eats: true,
  };

  let rabbit = {
    jumps: true,
    __proto__: animal,
  };

  for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
      alert(`Our: ${prop}`); // Our: jumps
    } else {
      alert(`Inherited: ${prop}`); // Inherited: eats
    }
  }
}

/*
hasOwnProperty comes from Object.prototype
(enumerable: false → not listed in for..in)

Chain: rabbit → animal → Object.prototype → null
*/

/*
Summary:
- [[Prototype]] for missing property lookup
- write goes to the object (except setters)
- this = caller object (before the dot)
- for..in sees inherited; Object.keys etc. do not
*/

alert("The End of 8.1. Prototypal inheritance");
