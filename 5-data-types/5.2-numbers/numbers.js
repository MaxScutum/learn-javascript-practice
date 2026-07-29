// 5.2. Numbers

/*
In modern JavaScript there are two types of numbers:
- Regular numbers (IEEE-754, double precision) — this chapter
- BigInt — integers of arbitrary length (separate chapter)

Here we talk about regular numbers.
*/

alert("5.2. Numbers");

// More ways to write a number

/*
let billion = 1000000000;
let billion = 1_000_000_000; // underscore is ignored (sugar)

Short form with "e":
1e9  = 1 and 9 zeroes = 1000000000
1e-6 = 0.000001
*/

{
  let billion = 1e9;
  alert(billion); // 1000000000
  alert(7.3e9); // 7300000000

  let mcs = 1e-6;
  alert(mcs); // 0.000001

  alert(1e3 === 1 * 1000); // true
  alert(1e-3 === 1 / 1000); // true
}

// Hex, binary and octal

/*
0x — hex
0b — binary
0o — octal
*/

{
  alert(0xff); // 255
  alert(0xff); // 255

  let binaryNum = 0b11111111; // 255
  let octalNum = 0o377; // 255

  alert(binaryNum == octalNum); // true
}

// toString(base)

/*
num.toString(base) — string in numeral system base (2..36).
Default base = 10.

Two dots: 123456..toString(36)
(because 123456.toString would be a syntax error)
Or: (123456).toString(36)
*/

{
  let num = 255;

  alert(num.toString(16)); // ff
  alert(num.toString(2)); // 11111111
  alert((123456).toString(36)); // 2n9c
}

// Rounding

/*
Math.floor  — down
Math.ceil   — up
Math.round  — nearest
Math.trunc  — drop decimal part
*/

{
  alert(Math.floor(3.1)); // 3
  alert(Math.ceil(3.1)); // 4
  alert(Math.round(3.5)); // 4
  alert(Math.trunc(3.1)); // 3

  alert(Math.floor(-1.1)); // -2
  alert(Math.ceil(-1.1)); // -1
  alert(Math.round(-1.5)); // -1
  alert(Math.trunc(-1.1)); // -1
}

/*
Round to n digits:
1) multiply / divide
2) toFixed(n) — returns a STRING
*/

{
  let num = 1.23456;
  alert(Math.round(num * 100) / 100); // 1.23

  alert((12.34).toFixed(1)); // "12.3"
  alert((12.36).toFixed(1)); // "12.4"
  alert((12.34).toFixed(5)); // "12.34000"
  alert(+(12.34).toFixed(5)); // 12.34 (number)
}

// Imprecise calculations

/*
IEEE-754: 0.1 + 0.2 !== 0.3
Fix: toFixed / round when needed
*/

{
  alert(0.1 + 0.2 == 0.3); // false
  alert(0.1 + 0.2); // 0.30000000000000004

  let sum = 0.1 + 0.2;
  alert(sum.toFixed(2)); // "0.30"
  alert(+sum.toFixed(2)); // 0.3

  alert((0.1 * 10 + 0.2 * 10) / 10); // 0.3
  alert(9999999999999999); // 10000000000000000 (precision loss)
}

// Tests: isNaN / isFinite

/*
NaN !== NaN
isNaN / isFinite convert argument to number first.

Number.isNaN / Number.isFinite — stricter, no conversion.
Object.is(NaN, NaN) === true
Object.is(0, -0) === false
*/

{
  alert(isNaN(NaN)); // true
  alert(isNaN("str")); // true
  alert(NaN === NaN); // false

  alert(isFinite("15")); // true
  alert(isFinite("str")); // false
  alert(isFinite(Infinity)); // false

  alert(Number.isNaN(NaN)); // true
  alert(Number.isNaN("str")); // false
  alert(isNaN("str")); // true

  alert(Number.isFinite(123)); // true
  alert(Number.isFinite("123")); // false
  alert(isFinite("123")); // true

  alert(Object.is(NaN, NaN)); // true
  alert(Object.is(0, -0)); // false
}

// parseInt / parseFloat

/*
+"100px" -> NaN (strict)
parseInt / parseFloat — soft read until can't continue
parseInt(str, radix) — base 2..36
*/

{
  alert(+"100px"); // NaN

  alert(parseInt("100px")); // 100
  alert(parseFloat("12.5em")); // 12.5
  alert(parseInt("12.3")); // 12
  alert(parseFloat("12.3.4")); // 12.3
  alert(parseInt("a123")); // NaN

  alert(parseInt("0xff", 16)); // 255
  alert(parseInt("ff", 16)); // 255
  alert(parseInt("2n9c", 36)); // 123456
}

// Other Math functions

{
  alert(Math.random()); // 0..1 (not including 1)
  alert(Math.max(3, 5, -10, 0, 1)); // 5
  alert(Math.min(1, 2)); // 1
  alert(Math.pow(2, 10)); // 1024
}

/*
Summary:
- e / _ for readable numbers
- 0x / 0b / 0o, toString(base), parseInt(str, base)
- rounding: Math.* and toFixed
- remember float precision issues
- isNaN / isFinite vs Number.isNaN / Number.isFinite
- Math object for basic math helpers
*/

alert("The End of 5.2. Numbers.");
