// 3.4. Ninja code.

/*
Irony warning!
This lesson shows BAD habits on purpose.
Ninja developers of the past used these tips
to make code harder to support.

Read them — and do the OPPOSITE in real work.
*/

alert("3.4. Ninja code — examples of what NOT to do");

// Brevity is the sister of talent

/*
Write as short as possible, not as clear as possible.

// code from jQuery
i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
*/

{
  let index = 5;
  let length = 10;

  // Ninja style (hard to read):
  // index = index ? (index < 0 ? Math.max(0, length + index) : index) : 0;

  // Clear style:
  if (!index) {
    index = 0;
  } else if (index < 0) {
    index = Math.max(0, length + index);
  }

  alert("Clear ternary rewrite result: " + index);
}

// One-letter variables

/*
Call variables a, b, or c.
Exception: in loops do NOT use i, j, k — use exotic x or y.
*/

{
  // Ninja style:
  // for (let x = 0; x < 3; x++) { ... }

  // Clear style:
  for (let step = 0; step < 3; step++) {
    alert("Clear loop step: " + step);
  }
}

// Use abbreviations

/*
list → lst
userAgent → ua
browser → brsr
*/

{
  // Ninja: let ua = "Chrome";
  let userAgent = "Chrome";
  alert("Clear name userAgent: " + userAgent);
}

// Be abstract when choosing names

/*
Best names: data, value, item, elem, obj.
Or by type: str, num.
If taken: data1, item2, elem5.
*/

{
  // Ninja: let data = "John";
  let userName = "John";
  alert("Clear name userName: " + userName);
}

// Attention check

/*
Use similar names: date and data.
*/

{
  let date = "2026-07-15";
  let data = { role: "student" };

  alert("date = " + date);
  alert("data.role = " + data.role);
  alert("Hint: avoid similar names like date/data");
}

// Clever synonyms

/*
Same action — different verbs: display / show / render / paint.
Different actions — same verb: printPage / printText / printMessage.
*/

{
  function showMessage(text) {
    alert(text);
  }

  // Ninja would mix show/display/render for the same action.
  showMessage("Use one verb for one action: showMessage");
}

// Reuse names

/*
Reuse the same variable for different meanings.
Advanced: replace a parameter in the middle of a function.

function ninjaFunction(elem) {
  // 20 lines with elem
  elem = clone(elem);
  // 20 more lines with elem clone
}
*/

{
  function clone(value) {
    return value + " (clone)";
  }

  function ninjaFunction(element) {
    alert("Before clone: " + element);
    element = clone(element);
    alert("After silent replace: " + element);
  }

  ninjaFunction("button");
  alert("Moral: do not silently replace parameters");
}

// Add underscores

/*
_name, __value — meaning known only to you, or no meaning at all.
*/

{
  // Ninja: let _name = "Max"; let __value = 42;
  let name = "Max";
  let score = 42;

  alert("Clear names without magic underscores: " + name + ", " + score);
}

// Show your love for development

/*
superElement, megaFrame, niceItem — sound cool, say nothing.
*/

{
  // Ninja: let megaFrame = document;
  let mainFrame = "page frame";
  alert("Prefer specific names like mainFrame: " + mainFrame);
}

// Shadow outer variables

/*
let user = authenticateUser();

function render() {
  let user = anotherValue();
  ...
}
*/

{
  let user = "authenticated user";

  function render() {
    let user = "local user";
    alert("Inside render, local user shadows outer: " + user);
  }

  render();
  alert("Outside render, outer user is still: " + user);
  alert("Moral: avoid shadowing outer variables");
}

// Surprise! Side effects in check/is/find functions

/*
Functions like isReady(), checkPermission(), findTags()
should not change data — only check/return.
Ninja tip: secretly change something inside them.
*/

{
  let isLoggedIn = false;

  // Ninja style:
  function checkPermission() {
    isLoggedIn = true; // unexpected side effect!
    return { ok: true };
  }

  // Clear style:
  function hasPermission() {
    return isLoggedIn === true;
  }

  alert("Before ninja checkPermission, isLoggedIn = " + isLoggedIn);
  let permissionResult = checkPermission();
  alert("checkPermission returned object: " + permissionResult.ok);
  alert("After ninja checkPermission, isLoggedIn = " + isLoggedIn);

  isLoggedIn = false;
  alert("Clear hasPermission = " + hasPermission());
  alert("Moral: check/is/find should not mutate data");
}

// Powerful functions!

/*
validateEmail(email) should only validate.
Ninja tip: also show alert and ask to re-enter email.
*/

{
  function validateEmail(email) {
    let isValid = email.includes("@");

    // Extra unexpected actions (ninja style):
    if (!isValid) {
      alert("Ninja validateEmail also shows UI message!");
    }

    return isValid;
  }

  function isEmailValid(email) {
    return email.includes("@");
  }

  alert("validateEmail('a@b.c') = " + validateEmail("a@b.c"));
  alert("validateEmail('bad') = " + validateEmail("bad"));
  alert("Clear isEmailValid('bad') = " + isEmailValid("bad"));
  alert("Moral: one function — one action");
}

/*
Summary:
- Follow a few of these tips → code full of surprises
- Follow many → nobody wants to change your code
- Follow all → a painful lesson for juniors

In real projects: do the opposite.
Write clear names, one action per function, no secret side effects.
*/

alert("The End of 3.4. Ninja code.");
