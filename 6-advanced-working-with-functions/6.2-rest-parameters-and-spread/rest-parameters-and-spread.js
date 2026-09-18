// 6.2. Rest parameters and spread syntax

/*
... means either:
- rest parameters  → gather args into an array
- spread syntax    → expand array/iterable into a list
*/

alert("6.2. Rest parameters and spread syntax");

// Extra args are ignored if not collected

{
  function sum(a, b) {
    return a + b;
  }

  alert(sum(1, 2, 3, 4, 5)); // 3
}

// Rest parameters ...

/*
...rest must be LAST in the parameter list.
*/

{
  function sumAll(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }

  alert(sumAll(1)); // 1
  alert(sumAll(1, 2)); // 3
  alert(sumAll(1, 2, 3)); // 6
}

{
  function showName(firstName, lastName, ...titles) {
    alert(firstName + " " + lastName); // Julius Caesar
    alert(titles[0]); // Consul
    alert(titles[1]); // Imperator
    alert(titles.length); // 2
  }

  showName("Julius", "Caesar", "Consul", "Imperator");
}

// The "arguments" variable (old style)

/*
array-like + iterable, but NOT a real array
(no map etc.)
Arrow functions have no own arguments.
*/

{
  function showName() {
    alert(arguments.length);
    alert(arguments[0]);
    alert(arguments[1]);
  }

  showName("Julius", "Caesar"); // 2, Julius, Caesar
  showName("Ilya"); // 1, Ilya, undefined
}

{
  function f() {
    let showArg = () => alert(arguments[0]);
    showArg();
  }

  f(1); // 1
}

// Spread syntax

/*
...arr in a call expands iterable into argument list.
*/

{
  let arr = [3, 5, 1];
  alert(Math.max(arr)); // NaN
  alert(Math.max(...arr)); // 5
}

{
  let arr1 = [1, -2, 3, 4];
  let arr2 = [8, 3, -8, 1];

  alert(Math.max(...arr1, ...arr2)); // 8
  alert(Math.max(1, ...arr1, 2, ...arr2, 25)); // 25
}

{
  let arr = [3, 5, 1];
  let arr2 = [8, 9, 15];
  let merged = [0, ...arr, 2, ...arr2];

  alert(merged); // 0,3,5,1,2,8,9,15
}

{
  let str = "Hello";
  alert([...str]); // H,e,l,l,o
  alert(Array.from(str)); // H,e,l,l,o

  // Array.from works with array-likes + iterables
  // spread works only with iterables
}

// Copy array / object

{
  let arr = [1, 2, 3];
  let arrCopy = [...arr];

  alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true
  alert(arr === arrCopy); // false

  arr.push(4);
  alert(arr); // 1,2,3,4
  alert(arrCopy); // 1,2,3
}

{
  let obj = { a: 1, b: 2, c: 3 };
  let objCopy = { ...obj };

  alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true
  alert(obj === objCopy); // false

  obj.d = 4;
  alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
  alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}
}

/*
Summary:
- rest: function(...args) or (a, b, ...rest)
- spread: Math.max(...arr), [...arr], { ...obj }
- prefer rest over arguments
*/

alert("The End of 6.2. Rest parameters and spread syntax.");
