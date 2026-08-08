// 5.4. Arrays

/*
Objects store keyed collections.
Arrays store ordered collections: 1st, 2nd, 3rd...
*/

alert("5.4. Arrays");

// Declaration

/*
let arr = new Array(); // rare
let arr = [];          // usual
*/

{
  let fruits = ["Apple", "Orange", "Plum"];

  alert(fruits[0]); // Apple
  alert(fruits[1]); // Orange
  alert(fruits[2]); // Plum

  fruits[2] = "Pear";
  fruits[3] = "Lemon";

  alert(fruits.length); // 4
  alert(fruits); // Apple,Orange,Pear,Lemon
}

{
  let arr = [
    "Apple",
    { name: "John" },
    true,
    function () {
      alert("hello");
    },
  ];

  alert(arr[1].name); // John
  arr[3](); // hello
}

// Get last elements with at()

/*
fruits[-1] → undefined
fruits[fruits.length - 1] or fruits.at(-1)
*/

{
  let fruits = ["Apple", "Orange", "Plum"];

  alert(fruits[fruits.length - 1]); // Plum
  alert(fruits.at(-1)); // Plum
  alert(fruits.at(-2)); // Orange
}

// pop / push / shift / unshift

/*
End:   push (add), pop (remove)   — fast
Start: unshift (add), shift (remove) — slow

Queue: push + shift (FIFO)
Stack: push + pop (LIFO)
*/

{
  let fruits = ["Apple", "Orange", "Pear"];

  alert(fruits.pop()); // Pear
  alert(fruits); // Apple,Orange

  fruits.push("Pear");
  alert(fruits); // Apple,Orange,Pear
}

{
  let fruits = ["Apple", "Orange", "Pear"];

  alert(fruits.shift()); // Apple
  alert(fruits); // Orange,Pear

  fruits.unshift("Apple");
  alert(fruits); // Apple,Orange,Pear
}

{
  let fruits = ["Apple"];

  fruits.push("Orange", "Peach");
  fruits.unshift("Pineapple", "Lemon");

  alert(fruits); // Pineapple,Lemon,Apple,Orange,Peach
}

// Internals

/*
Array is a special object.
Copied by reference.
Don't misuse: non-numeric keys, big holes, reverse fill.
*/

{
  let fruits = ["Banana"];
  let arr = fruits;

  alert(arr === fruits); // true
  arr.push("Pear");
  alert(fruits); // Banana,Pear
}

// Loops

/*
for (let i = 0; i < arr.length; i++) — indexes
for (let item of arr) — values (preferred)
for (let key in arr) — DON'T use for arrays
*/

{
  let arr = ["Apple", "Orange", "Pear"];
  let text = "";

  for (let i = 0; i < arr.length; i++) {
    text += arr[i] + " ";
  }
  alert(text); // Apple Orange Pear
}

{
  let fruits = ["Apple", "Orange", "Plum"];
  let text = "";

  for (let fruit of fruits) {
    text += fruit + " ";
  }
  alert(text); // Apple Orange Plum
}

// length

/*
length = last numeric index + 1
Writable: decreasing truncates (irreversible)
Clear: arr.length = 0
*/

{
  let fruits = [];
  fruits[123] = "Apple";
  alert(fruits.length); // 124
}

{
  let arr = [1, 2, 3, 4, 5];

  arr.length = 2;
  alert(arr); // 1,2

  arr.length = 5;
  alert(arr[3]); // undefined

  arr.length = 0;
  alert(arr); // empty
}

// new Array()

/*
new Array(2) → length 2, no elements (trap!)
Prefer []
*/

{
  let arr = new Array(2);

  alert(arr[0]); // undefined
  alert(arr.length); // 2
}

// Multidimensional

{
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  alert(matrix[0][1]); // 2
}

// toString

/*
Arrays convert via toString → "1,2,3"
*/

{
  let arr = [1, 2, 3];

  alert(arr); // 1,2,3
  alert(String(arr) === "1,2,3"); // true

  alert([] + 1); // 1
  alert([1] + 1); // 11
  alert([1, 2] + 1); // 1,21
}

// Don't compare arrays with ==

/*
[] == [] → false (different objects)
Compare item-by-item instead.
*/

{
  alert([] == []); // false
  alert([0] == [0]); // false

  alert(0 == []); // true  ([] → "" → 0)
  alert("0" == []); // false
}

/*
Summary:
- [] for ordered collections
- at(-1) for last element
- push/pop fast, shift/unshift slow
- for..of to loop, not for..in
- length is writable
- don't compare arrays with ==
*/

alert("The End of 5.4. Arrays.");
