// 4.4. Object methods, "this".

/*
Objects represent real-world entities: users, orders, etc.
Actions are functions stored in object properties — methods.
*/

alert("4.4. Object methods, this");

// Method examples

/*
let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Hello!");
};

user.sayHi(); // Hello!
*/

{
  let user = {
    name: "John",
    age: 30,
  };

  user.sayHi = function () {
    alert("Hello!");
  };

  user.sayHi(); // Hello!
}

/*
Pre-declared function as a method:

function sayHi() {
  alert("Hello!");
}

user.sayHi = sayHi;
user.sayHi();
*/

{
  let user = {
    name: "John",
  };

  function sayHi() {
    alert("Hello!");
  }

  user.sayHi = sayHi;
  user.sayHi(); // Hello!
}

// Method shorthand

/*
user = {
  sayHi: function() {
    alert("Hello");
  }
};

user = {
  sayHi() {
    alert("Hello");
  }
};
*/

{
  let user = {
    sayHi() {
      alert("Hello");
    },
  };

  user.sayHi(); // Hello
}

// "this" in methods

/*
let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(this.name);
  }
};

user.sayHi(); // John
*/

{
  let user = {
    name: "John",
    age: 30,

    sayHi() {
      alert(this.name);
    },
  };

  user.sayHi(); // John
}

/*
Do not use outer variable instead of this:

let user = {
  name: "John",
  sayHi() {
    alert(user.name); // unreliable
  }
};

let admin = user;
user = null;
admin.sayHi(); // Error
*/

{
  let user = {
    name: "John",
    age: 30,

    sayHi() {
      alert(this.name); // reliable with this
    },
  };

  let admin = user;
  user = null;

  admin.sayHi(); // John
}

// "this" is not bound — evaluated at call-time

/*
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f(); // John
admin.f(); // Admin
admin["f"](); // Admin
*/

{
  let user = { name: "John" };
  let admin = { name: "Admin" };

  function sayHi() {
    alert(this.name);
  }

  user.f = sayHi;
  admin.f = sayHi;

  user.f(); // John
  admin.f(); // Admin
  admin["f"](); // Admin
}

/*
Calling without an object:

function sayHi() {
  alert(this);
}

sayHi(); // undefined in strict mode
*/

{
  function showThis() {
    "use strict";
    alert(this); // undefined
  }

  showThis();
}

// Arrow functions have no "this"

/*
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya
*/

{
  let user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    },
  };

  user.sayHi(); // Ilya
}

/*
Summary:
- Functions in object properties are methods
- Methods use this to access the object
- this is set at call-time: object.method() → this = object
- Arrow functions have no own this — take it from outer normal function
*/

alert("The End of 4.4. Object methods, this.");
