// 2.7. Type Conversions

/*
Operators/functions often convert values automatically.
Sometimes we convert explicitly.

This chapter: primitives only (objects later).
*/

alert("2.7. Type Conversions");

// String Conversion

/*
alert(value) converts to string automatically.
Explicit: String(value)
*/

{
  let value = true;
  alert(typeof value); // boolean

  value = String(value); // "true"
  alert(typeof value); // string
  alert(value); // true
}

// Numeric Conversion

/*
Happens in math automatically.
Explicit: Number(value)

Rules:
undefined → NaN
null → 0
true/false → 1/0
string → trim spaces; "" → 0; invalid → NaN
*/

{
  alert("6" / "2"); // 3
}

{
  let str = "123";
  alert(typeof str); // string

  let num = Number(str);
  alert(typeof num); // number
  alert(num); // 123
}

{
  alert(Number("an arbitrary string instead of a number")); // NaN
  alert(Number("   123   ")); // 123
  alert(Number("123z")); // NaN
  alert(Number(true)); // 1
  alert(Number(false)); // 0
  alert(Number(null)); // 0
  alert(Number(undefined)); // NaN
}

// Boolean Conversion

/*
Explicit: Boolean(value)

false: 0, null, undefined, NaN, ""
true: everything else

Note: "0" and " " are true (non-empty strings)
*/

{
  alert(Boolean(1)); // true
  alert(Boolean(0)); // false
  alert(Boolean("hello")); // true
  alert(Boolean("")); // false
  alert(Boolean("0")); // true
  alert(Boolean(" ")); // true
}

/*
Summary:
String(value)
Number(value)  — remember undefined→NaN, null→0
Boolean(value) — remember "0" and " " are true
*/

alert("The End of 2.7. Type Conversions.");
