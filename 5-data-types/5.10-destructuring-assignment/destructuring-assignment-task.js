// 5.10. Destructuring assignment. Task.

alert("5.10. Destructuring assignment. Task.");

// --- Task 1. Destructuring assignment (importance: 5) ---

{
  let user = {
    name: "John",
    years: 30,
  };

  let { name, years: age, isAdmin = false } = user;

  alert(name); // John
  alert(age); // 30
  alert(isAdmin); // false
}

// --- Task 2. The maximal salary (importance: 5) ---

function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

{
  let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };

  alert(topSalary(salaries)); // Pete
  alert(topSalary({})); // null
}

alert("The End of 5.10. Destructuring assignment. Task.");
