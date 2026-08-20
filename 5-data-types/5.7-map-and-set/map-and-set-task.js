// 5.7. Map and Set. Task.

alert("5.7. Map and Set. Task.");

// --- Task 1. Filter unique array members (importance: 5) ---
/*
unique(arr) — return array of unique values.
Use Set.
*/

function unique(arr) {
  return Array.from(new Set(arr));
}

{
  let values = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
  ];

  alert(unique(values)); // Hare,Krishna,:-O
}

alert("The End of 5.7. Map and Set. Task.");
