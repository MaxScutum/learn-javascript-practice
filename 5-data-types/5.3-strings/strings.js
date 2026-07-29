// 5.3. Strings

/*
Textual data is stored as strings.
No separate type for a single character.
Internal format: UTF-16.
*/

alert("5.3. Strings");

// Quotes

/*
'single' and "double" — same.
`backticks` — embed ${...} and multiline.
*/

{
  function sum(x, y) {
    return x + y;
  }

  alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

  let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

  alert(guestList);
}

// Special characters

/*
\n newline, \t tab, \\ backslash, \' \" \` quotes
*/

{
  let guestList = "Guests:\n * John\n * Pete\n * Mary";
  alert(guestList);

  let str1 = "Hello\nWorld";
  let str2 = `Hello
World`;
  alert(str1 == str2); // true

  alert(`The backslash: \\`); // The backslash: \
  alert("I'm the Walrus!"); // I'm the Walrus!
}

// String length

/*
length is a PROPERTY, not a method.
\n counts as 1 character.
*/

{
  alert(`My\n`.length); // 3
}

// Accessing characters

/*
str[pos] or str.at(pos)
at() supports negative indexes.
*/

{
  let str = `Hello`;

  alert(str[0]); // H
  alert(str.at(0)); // H
  alert(str[str.length - 1]); // o
  alert(str.at(-1)); // o

  alert(str[-2]); // undefined
  alert(str.at(-2)); // l
}

{
  let chars = "";
  for (let char of "Hello") {
    chars += char + " ";
  }
  alert(chars); // H e l l o
}

// Strings are immutable

/*
Can't change a character in place.
Create a new string instead.
*/

{
  let str = "Hi";

  try {
    str[0] = "h"; // error in strict-like cases / may fail silently depending
  } catch (err) {
    alert("Can't change character: " + err.name);
  }

  str = "h" + str[1];
  alert(str); // hi
}

// Changing the case

{
  alert("Interface".toUpperCase()); // INTERFACE
  alert("Interface".toLowerCase()); // interface
  alert("Interface"[0].toLowerCase()); // i
}

// Searching for a substring

/*
indexOf / lastIndexOf → position or -1
includes / startsWith / endsWith → true/false

if (str.indexOf(...)) is wrong when found at 0
→ use != -1
*/

{
  let str = "Widget with id";

  alert(str.indexOf("Widget")); // 0
  alert(str.indexOf("widget")); // -1
  alert(str.indexOf("id")); // 1
  alert(str.indexOf("id", 2)); // 12

  if (str.indexOf("Widget") != -1) {
    alert("We found it");
  }

  alert(str.includes("Widget")); // true
  alert("Hello".includes("Bye")); // false
  alert("Widget".includes("id", 3)); // false

  alert("Widget".startsWith("Wid")); // true
  alert("Widget".endsWith("get")); // true
}

{
  let str = "As sly as a fox, as strong as an ox";
  let target = "as";
  let pos = -1;
  let found = "";

  while ((pos = str.indexOf(target, pos + 1)) != -1) {
    found += pos + " ";
  }

  alert("Found at: " + found); // 7 16 27
}

// Getting a substring

/*
Prefer slice(start, end) — supports negatives.
substring — swaps if start > end, negatives → 0
substr — start + length (legacy, avoid if possible)
*/

{
  let str = "stringify";

  alert(str.slice(0, 5)); // strin
  alert(str.slice(2)); // ringify
  alert(str.slice(-4, -1)); // gif

  alert(str.substring(2, 6)); // ring
  alert(str.substring(6, 2)); // ring
  alert(str.slice(6, 2)); // "" (empty)

  alert(str.substr(2, 4)); // ring
  alert(str.substr(-4, 2)); // gi
}

// Comparing strings

/*
Compared by UTF-16 codes by default.
'a' > 'Z' because code of 'a' is greater.
localeCompare — language-aware comparison.
*/

{
  alert("a" > "Z"); // true
  alert("Österreich" > "Zealand"); // true

  alert("Z".codePointAt(0)); // 90
  alert("z".codePointAt(0)); // 122
  alert(String.fromCodePoint(90)); // Z

  alert("Österreich".localeCompare("Zealand")); // -1
}

/*
Also useful:
- str.trim()
- str.repeat(n)
*/

{
  alert("  hi  ".trim()); // hi
  alert("ha".repeat(3)); // hahaha
}

/*
Summary:
- quotes: ' " `  (backticks for ${} and multiline)
- special chars with \
- length, [], at(), for..of
- immutable
- toLowerCase / toUpperCase
- indexOf / includes / startsWith / endsWith
- slice (preferred)
- localeCompare for correct language sorting
*/

alert("The End of 5.3. Strings.");
