// 5.6. Iterables

/*
Iterables generalize arrays: any object can work with for..of
if it implements Symbol.iterator.
Strings are iterable too.
*/

alert("5.6. Iterables");

// Symbol.iterator

/*
for..of:
1) calls obj[Symbol.iterator]() once → gets iterator
2) calls iterator.next() each time
3) next() returns { done, value }
*/

{
  let range = {
    from: 1,
    to: 5,
  };

  range[Symbol.iterator] = function () {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        }
        return { done: true };
      },
    };
  };

  let text = "";
  for (let num of range) {
    text += num + " ";
  }
  alert(text); // 1 2 3 4 5
}

// Same object as iterator (shorter, but one shared state)

{
  let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },

    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      }
      return { done: true };
    },
  };

  let text = "";
  for (let num of range) {
    text += num + " ";
  }
  alert(text); // 1 2 3 4 5
}

// String is iterable

{
  let text = "";
  for (let char of "test") {
    text += char + " ";
  }
  alert(text); // t e s t
}

{
  let str = "𝒳😂";
  let text = "";
  for (let char of str) {
    text += char + " ";
  }
  alert(text); // 𝒳 😂  (surrogate pairs ok)
}

// Calling an iterator explicitly

{
  let str = "Hello";
  let iterator = str[Symbol.iterator]();
  let text = "";

  while (true) {
    let result = iterator.next();
    if (result.done) break;
    text += result.value;
  }

  alert(text); // Hello
}

// Iterables vs array-likes

/*
Iterable  — has Symbol.iterator
Array-like — has indexes + length
Can be one, both, or neither.
*/

{
  let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2,
  };

  // for (let item of arrayLike) {} // Error: not iterable
  alert(arrayLike[0] + " " + arrayLike[1]); // Hello World
}

// Array.from

/*
Array.from(obj[, mapFn, thisArg])
Makes a real Array from iterable or array-like.
*/

{
  let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2,
  };

  let arr = Array.from(arrayLike);
  alert(arr.pop()); // World
}

{
  let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },

    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      }
      return { done: true };
    },
  };

  alert(Array.from(range)); // 1,2,3,4,5
  alert(Array.from(range, (num) => num * num)); // 1,4,9,16,25
}

{
  let str = "𝒳😂";
  let chars = Array.from(str);

  alert(chars[0]); // 𝒳
  alert(chars[1]); // 😂
  alert(chars.length); // 2
}

{
  function slice(str, start, end) {
    return Array.from(str).slice(start, end).join("");
  }

  let str = "𝒳😂𩷶";
  alert(slice(str, 1, 3)); // 😂𩷶
  alert(str.slice(1, 3)); // garbage (native slice breaks pairs)
}

/*
Summary:
- Iterable = Symbol.iterator → iterator with next()
- next() → { done, value }
- Strings/arrays are built-in iterables
- Array-like ≠ iterable
- Array.from makes a real array from either
*/

alert("The End of 5.6. Iterables.");
