// 8.2. F.prototype

/*
F.prototype — ordinary property named "prototype" on a function.
When new F() runs, if F.prototype is an object,
the new object's [[Prototype]] is set to it.

Not the same as [[Prototype]] itself.
*/

alert("8.2. F.prototype");

// Setting F.prototype

{
  let animal = {
    eats: true,
  };

  function Rabbit(name) {
    this.name = name;
  }

  Rabbit.prototype = animal;

  let rabbit = new Rabbit("White Rabbit");
  // rabbit.[[Prototype]] === animal

  alert(rabbit.eats); // true
  alert(rabbit.__proto__ === animal); // true
}

/*
F.prototype is used ONLY at new F() time.
Changing F.prototype later:
- new objects get the new prototype
- already created objects keep the old one
*/

{
  let animal = { eats: true };
  let plant = { grows: true };

  function Rabbit(name) {
    this.name = name;
  }

  Rabbit.prototype = animal;
  let rabbit1 = new Rabbit("One");

  Rabbit.prototype = plant;
  let rabbit2 = new Rabbit("Two");

  alert(rabbit1.eats); // true (old prototype)
  alert(rabbit2.grows); // true (new prototype)
}

// Default F.prototype + constructor

/*
Every function gets by default:
F.prototype = { constructor: F }
*/

{
  function Rabbit() {}
  // Rabbit.prototype = { constructor: Rabbit }

  alert(Rabbit.prototype.constructor === Rabbit); // true

  let rabbit = new Rabbit();
  alert(rabbit.constructor === Rabbit); // true (via prototype)
}

{
  // create another object via constructor
  function Rabbit(name) {
    this.name = name;
    alert(name);
  }

  let rabbit = new Rabbit("White Rabbit");
  let rabbit2 = new rabbit.constructor("Black Rabbit");
}

/*
JS does NOT keep constructor correct automatically.
If we replace the whole prototype → constructor is lost.
*/

{
  function Rabbit() {}

  Rabbit.prototype = {
    jumps: true,
  };

  let rabbit = new Rabbit();
  alert(rabbit.constructor === Rabbit); // false
}

{
  // fix 1: add to default prototype (don't replace)
  function Rabbit() {}
  Rabbit.prototype.jumps = true;

  let rabbit = new Rabbit();
  alert(rabbit.constructor === Rabbit); // true
}

{
  // fix 2: recreate constructor manually
  function Rabbit() {}

  Rabbit.prototype = {
    jumps: true,
    constructor: Rabbit,
  };

  let rabbit = new Rabbit();
  alert(rabbit.constructor === Rabbit); // true
}

/*
On regular objects "prototype" is just a normal property — no magic:

let user = {
  name: "John",
  prototype: "Bla-bla"
};
*/

/*
Summary:
- F.prototype sets [[Prototype]] of objects from new F()
- value: object or null
- special only on constructor functions + new
- default: { constructor: F }
- replacing prototype may drop constructor — preserve it yourself
*/

alert("The End of 8.2. F.prototype");
