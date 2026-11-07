// 8.1. Prototypal inheritance. Task.

alert("8.1. Prototypal inheritance. Task.");

// --- Task 1. Working with prototype (importance: 5) ---

/*
(1) true  — own property rabbit.jumps
(2) null  — own deleted → take from animal
(3) undefined — animal.jumps also deleted → nothing left
*/

{
  let animal = {
    jumps: null,
  };
  let rabbit = {
    __proto__: animal,
    jumps: true,
  };

  alert(rabbit.jumps); // true (1)

  delete rabbit.jumps;

  alert(rabbit.jumps); // null (2)

  delete animal.jumps;

  alert(rabbit.jumps); // undefined (3)
}

// --- Task 2. Searching algorithm (importance: 5) ---

/*
pockets → bed → table → head

Speed: pockets.glasses vs head.glasses —
modern engines are so fast that difference is negligible.
In theory head.glasses is a direct find (shorter chain),
but you don't need to optimize this.
*/

{
  let head = {
    glasses: 1,
  };

  let table = {
    pen: 3,
    __proto__: head,
  };

  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
  };

  let pockets = {
    money: 2000,
    __proto__: bed,
  };

  alert(pockets.pen); // 3
  alert(bed.glasses); // 1
  alert(pockets.glasses); // 1
}

// --- Task 3. Where does it write? (importance: 5) ---

/*
rabbit receives full.
this = object before the dot → rabbit.
rabbit.eat() sets rabbit.full = true.
*/

{
  let animal = {
    eat() {
      this.full = true;
    },
  };

  let rabbit = {
    __proto__: animal,
  };

  rabbit.eat();

  alert(rabbit.full); // true
  alert(animal.full); // undefined
}

// --- Task 4. Why are both hamsters full? (importance: 5) ---

/*
Bug: stomach lives on hamster (shared).
speedy.eat → this.stomach looks up prototype → pushes into hamster.stomach.
lazy sees the same array.

Fix: give each hamster its own stomach.
*/

{
  // broken (demo)
  let hamster = {
    stomach: [],

    eat(food) {
      this.stomach.push(food);
    },
  };

  let speedy = {
    __proto__: hamster,
  };

  let lazy = {
    __proto__: hamster,
  };

  speedy.eat("apple");
  alert(speedy.stomach); // apple
  alert(lazy.stomach); // apple (same array!)
}

{
  // fixed — own stomach on each
  let hamster = {
    stomach: [],

    eat(food) {
      this.stomach.push(food);
    },
  };

  let speedy = {
    __proto__: hamster,
    stomach: [],
  };

  let lazy = {
    __proto__: hamster,
    stomach: [],
  };

  speedy.eat("apple");
  alert(speedy.stomach); // apple
  alert(lazy.stomach); // (empty)
}

{
  // alternative fix — write this.stomach = [...] (creates own property)
  let hamster = {
    stomach: [],

    eat(food) {
      this.stomach = this.stomach.concat([food]);
    },
  };

  let speedy = {
    __proto__: hamster,
  };

  let lazy = {
    __proto__: hamster,
  };

  speedy.eat("apple");
  alert(speedy.stomach); // apple
  alert(lazy.stomach); // (empty — still prototype's [])
}

alert("The End of 8.1. Prototypal inheritance. Task.");
