// 4.5. Constructor, operator "new".

/*
The regular {...} syntax creates one object.
To create many similar objects — constructor functions + new.
*/

alert("4.5. Constructor, operator new");

// Constructor function

/*
Constructors are regular functions with two conventions:
1. Named with capital letter first.
2. Should be executed only with "new".

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
*/

{
  function User(userName) {
    this.name = userName;
    this.isAdmin = false;
  }

  let user = new User("Jack");

  alert(user.name); // Jack
  alert(user.isAdmin); // false
}

/*
When a function is executed with new:
1. A new empty object is created and assigned to this.
2. The function body executes (usually adds properties to this).
3. The value of this is returned.

function User(name) {
  // this = {};  (implicitly)
  this.name = name;
  this.isAdmin = false;
  // return this;  (implicitly)
}

So new User("Jack") is like:
let user = {
  name: "Jack",
  isAdmin: false
};
*/

{
  function User(userName) {
    // this = {};  (implicitly)
    this.name = userName;
    this.isAdmin = false;
    // return this;  (implicitly)
  }

  let user = new User("Jack");
  alert(user.name); // Jack
  alert(user.isAdmin); // false

  let userAnn = new User("Ann");
  let userAlice = new User("Alice");
  alert(userAnn.name); // Ann
  alert(userAlice.name); // Alice
}

// new function() { … }

/*
Wrap creation of a single complex object
in an immediately called constructor:

let user = new function() {
  this.name = "John";
  this.isAdmin = false;
  // ...other code for user creation
};

This constructor can't be called again —
it is not saved anywhere.
*/

{
  let user = new (function () {
    this.name = "John";
    this.isAdmin = false;
  })();

  alert(user.name); // John
  alert(user.isAdmin); // false
}

// Constructor mode test: new.target

/*
new.target is undefined for regular calls
and equals the function if called with new.

function User() {
  alert(new.target);
}

User(); // undefined
new User(); // function User { ... }
*/

{
  function User() {
    alert(new.target);
  }

  User(); // undefined
  new User(); // function User() { ... }
}

/*
Make both new and regular calls do the same:

function User(name) {
  if (!new.target) {
    return new User(name);
  }

  this.name = name;
}

let john = User("John"); // redirects to new User
alert(john.name); // John
*/

{
  function User(userName) {
    if (!new.target) {
      return new User(userName);
    }

    this.name = userName;
  }

  let john = User("John");
  alert(john.name); // John

  let jack = new User("Jack");
  alert(jack.name); // Jack
}

// Return from constructors

/*
Usually constructors have no return.
If there is return:
- return with an object → that object is returned instead of this
- return with a primitive / empty return → ignored, this is returned
*/

{
  function BigUser() {
    this.name = "John";
    return { name: "Godzilla" }; // returns this object
  }

  alert(new BigUser().name); // Godzilla
}

{
  function SmallUser() {
    this.name = "John";
    return; // returns this
  }

  alert(new SmallUser().name); // John
}

// Omitting parentheses

/*
let user = new User; // no parentheses
// same as
let user = new User();

Not considered good style, but allowed.
*/

{
  function User(userName) {
    this.name = userName || "Guest";
  }

  let user = new User();
  alert(user.name); // Guest
}

// Methods in constructor

/*
We can add not only properties, but methods as well.

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert("My name is: " + this.name);
  };
}

let john = new User("John");
john.sayHi(); // My name is: John
*/

{
  function User(userName) {
    this.name = userName;

    this.sayHi = function () {
      alert("My name is: " + this.name);
    };
  }

  let john = new User("John");
  john.sayHi(); // My name is: John
}

/*
Summary:
- Constructors are regular functions, named with capital letter.
- Call them only with new → empty this at start, return this at end.
- Used to create many similar objects.
- Built-in constructors: Date, Set, etc.
*/

alert("The End of 4.5. Constructor, operator new.");
