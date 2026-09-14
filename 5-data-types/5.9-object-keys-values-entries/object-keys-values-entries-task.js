// 5.9. Object.keys, values, entries. Task.

alert("5.9. Object.keys, values, entries. Task.");

function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

{
  let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };

  alert(sumSalaries(salaries)); // 650
  alert(sumSalaries({})); // 0
}

function count(obj) {
  return Object.keys(obj).length;
}

{
  let user = {
    name: "John",
    age: 30,
  };

  alert(count(user)); // 2
}

alert("The End of 5.9. Object.keys, values, entries. Task.");
