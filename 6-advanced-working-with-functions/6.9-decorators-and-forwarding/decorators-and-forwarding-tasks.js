// 6.9. Decorators and forwarding. Task.

alert("6.9. Decorators and forwarding. Task.");

// --- Task 1. Декоратор-шпион (importance: 5) ---

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];
  return wrapper;
}

{
  function work(a, b) {
    alert(a + b);
  }

  work = spy(work);

  work(1, 2); // 3
  work(4, 5); // 9

  for (let args of work.calls) {
    alert("call:" + args.join()); // call:1,2 , call:4,5
  }
}

// --- Task 2. Задерживающий декоратор (importance: 5) ---

function delay(f, ms) {
  return function (...args) {
    let savedThis = this;
    setTimeout(function () {
      f.apply(savedThis, args);
    }, ms);
  };
}

{
  function f(x) {
    alert(x);
  }

  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 1500);

  f1000("test"); // через 1000 мс
  f1500("test"); // через 1500 мс
}

// --- Task 3. Декоратор debounce (importance: 5) ---

/*
Ждёт ms мс тишины после последнего вызова,
затем вызывает f один раз с ПОСЛЕДНИМИ аргументами.
*/

function debounce(f, ms) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => f.apply(this, args), ms);
  };
}

{
  let f = debounce(alert, 1000);

  f("a");
  setTimeout(() => f("b"), 200);
  setTimeout(() => f("c"), 500);
  // через ~1500 мс от старта: alert("c")
}

// --- Task 4. Тормозящий (throttling) декоратор (importance: 5) ---

/*
Не чаще одного раза в ms мс.
Первый вызов — сразу.
Дальше в окне ms — игнор, но запомнить последний.
После ms — вызвать с последними args/this.
*/

function throttle(func, ms) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper(...args) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    func.apply(this, args);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

{
  function f(a) {
    alert(a);
  }

  let f1000 = throttle(f, 1000);

  f1000(1); // 1 сразу
  f1000(2); // проигнорирован
  f1000(3); // запомнен → через 1000 мс покажет 3
}

alert("The End of 6.9. Task. (delay/debounce/throttle alerts may follow)");
