// 7.2. Property getters and setters

/*
Two kinds of properties:
1) data properties — value + flags (previous chapter)
2) accessor properties — get / set functions that look like normal props
*/

alert("7.2. Property getters and setters");

// Getters and setters in object literal

/*
get propName()  — runs on read:  obj.propName
set propName(v) — runs on write: obj.propName = v
*/

{
  let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  };

  alert(user.fullName); // John Smith
  // not user.fullName() — looks like a regular property
}

{
  // getter only → assign fails
  let user = {
    get fullName() {
      return "...";
    },
  };

  try {
    user.fullName = "Test";
  } catch (err) {
    alert("getter only: " + err.message);
  }
}

{
  let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
      return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  };

  user.fullName = "Alice Cooper";

  alert(user.name); // Alice
  alert(user.surname); // Cooper
  alert(user.fullName); // Alice Cooper
}

// Accessor descriptors

/*
No value / writable.
Instead: get, set (+ enumerable, configurable).

A property is EITHER accessor OR data — not both.
*/

{
  let user = {
    name: "John",
    surname: "Smith",
  };

  Object.defineProperty(user, "fullName", {
    get() {
      return `${this.name} ${this.surname}`;
    },

    set(value) {
      [this.name, this.surname] = value.split(" ");
    },
  });

  alert(user.fullName); // John Smith

  for (let key in user) alert(key); // name, surname
  // fullName not listed (enumerable default false for defineProperty)
}

{
  try {
    Object.defineProperty({}, "prop", {
      get() {
        return 1;
      },
      value: 2,
    });
  } catch (err) {
    alert("get + value: " + err.message); // Invalid property descriptor
  }
}

// Smarter getters/setters — wrap a real value

/*
Convention: _name — “internal”, don’t touch from outside.
*/

{
  let user = {
    get name() {
      return this._name;
    },

    set name(value) {
      if (value.length < 4) {
        alert("Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    },
  };

  user.name = "Pete";
  alert(user.name); // Pete

  user.name = ""; // Name is too short...
  alert(user.name); // Pete (unchanged)
}

// Compatibility — replace data prop with accessor later

{
  function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
      get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
      },
    });
  }

  let john = new User("John", new Date(1992, 6, 1));

  alert(john.birthday); // Date object
  alert(john.age); // calculated from birthday
}

/*
Summary:
- accessors look like props, run get/set behind the scenes
- descriptor: get / set / enumerable / configurable
- use for virtual props, validation, backward-compatible APIs
- _prop naming = internal by convention
*/

alert("The End of 7.2. Property getters and setters");
