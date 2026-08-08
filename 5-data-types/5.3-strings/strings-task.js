// 5.3. Strings. Task.

alert("5.3. Strings. Task.");

// --- Task 1. Uppercase the first character (importance: 5) ---
/*
ucFirst(str) — uppercase first character.

ucFirst("john") == "John"
*/

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

{
  alert(ucFirst("john")); // John
  alert(ucFirst("") === ""); // true
}

// --- Task 2. Check for spam (importance: 5) ---
/*
checkSpam(str) — true if contains 'viagra' or 'XXX' (case-insensitive).
*/

function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

{
  alert(checkSpam("buy ViAgRA now")); // true
  alert(checkSpam("free xxxxx")); // true
  alert(checkSpam("innocent rabbit")); // false
}

// --- Task 3. Truncate the text (importance: 5) ---
/*
truncate(str, maxlength)
If longer than maxlength — cut and add "…"
Result length == maxlength
*/

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  }
  return str;
}

{
  alert(truncate("What I'd like to tell on this topic is:", 20));
  // What I'd like to te…

  alert(truncate("Hi everyone!", 20)); // Hi everyone!
}

// --- Task 4. Extract the money (importance: 4) ---
/*
extractCurrencyValue("$120") === 120
*/

function extractCurrencyValue(str) {
  return +str.slice(1);
}

{
  alert(extractCurrencyValue("$120") === 120); // true
  alert(extractCurrencyValue("$120")); // 120
}

alert("The End of 5.3. Strings. Task.");
