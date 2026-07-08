/*
Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.
*/

// unary

let x = 1;

x = -x;
alert(x); // -1, unary negation was applied

// binary

let z = 1,
  y = 3;
alert(y - z); // 2, binary minus subtracts values

// Remainder %

alert(5 % 2); // 1, the remainder of 5 divided by 2
alert(8 % 3); // 2, the remainder of 8 divided by 3
alert(8 % 4); // 0, the remainder of 8 divided by 4

// Exponentiation **

alert(2 ** 2); // 2² = 4
alert(2 ** 3); // 2³ = 8
alert(2 ** 4); // 2⁴ = 16

alert(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
alert(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)

// String concatenation with binary +

let s = "my" + "string";
alert(s); // mystring

alert("1" + 2); // "12"
alert(2 + "1"); // "21"

alert(2 + 2 + "1"); // "41" and not "221"

alert("1" + 2 + 2); // "122" and not "14"

alert(6 - "2"); // 4, converts '2' to a number
alert("6" / "2"); // 3, converts both operands to numbers

// Numeric conversion, unary +

// No effect on numbers
let r = 1;
alert(+r); // 1

let w = -2;
alert(+w); // -2

// Converts non-numbers
alert(+true); // 1
alert(+""); // 0
