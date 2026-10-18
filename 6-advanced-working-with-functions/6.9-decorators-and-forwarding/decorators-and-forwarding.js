// 6.9. Decorators and forwarding, call/apply

/*
Decorator — wrapper that alters a function's behavior.
Main work still done by the original function.

Benefits:
- reusable
- keeps original code simple
- can combine several decorators
*/

alert("6.9. Decorators and forwarding, call/apply");

// Transparent caching

{
  function slow(x) {
    alert(`Called with ${x}`);
    return x;
  }

  function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
      if (cache.has(x)) {
        return cache.get(x);
      }

      let result = func(x);
      cache.set(x, result);
      return result;
    };
  }

  slow = cachingDecorator(slow);

  alert(slow(1)); // Called with 1 → 1
  alert("Again: " + slow(1)); // from cache, no "Called with"

  alert(slow(2));
  alert("Again: " + slow(2));
}

// Problem: wrapper loses this

{
  let worker = {
    someMethod() {
      return 1;
    },

    slow(x) {
      alert("Called with " + x);
      return x * this.someMethod();
    },
  };

  function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func(x); // this is lost!
      cache.set(x, result);
      return result;
    };
  }

  alert(worker.slow(1)); // works

  worker.slow = cachingDecorator(worker.slow);

  try {
    alert(worker.slow(2)); // Error: this is undefined
  } catch (err) {
    alert("without call: " + err.message);
  }
}

// func.call(context, ...args)

/*
func(1, 2, 3)
func.call(obj, 1, 2, 3)  — same args, but this = obj
*/

{
  function sayHi() {
    alert(this.name);
  }

  let user = { name: "John" };
  let admin = { name: "Admin" };

  sayHi.call(user); // John
  sayHi.call(admin); // Admin
}

{
  function say(phrase) {
    alert(this.name + ": " + phrase);
  }

  let user = { name: "John" };
  say.call(user, "Hello"); // John: Hello
}

{
  let worker = {
    someMethod() {
      return 1;
    },

    slow(x) {
      alert("Called with " + x);
      return x * this.someMethod();
    },
  };

  function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func.call(this, x); // pass this
      cache.set(x, result);
      return result;
    };
  }

  worker.slow = cachingDecorator(worker.slow);

  alert(worker.slow(2)); // works
  alert(worker.slow(2)); // cached
}

// Multi-argument + hash + call forwarding

/*
func.call(this, ...arguments)
func.apply(this, arguments)  — almost the same

call  — list of args
apply — array-like args

Call forwarding:
let wrapper = function() {
  return func.apply(this, arguments);
};
*/

{
  let worker = {
    slow(min, max) {
      alert(`Called with ${min},${max}`);
      return min + max;
    },
  };

  function cachingDecorator(func, hash) {
    let cache = new Map();
    return function () {
      let key = hash(arguments);
      if (cache.has(key)) {
        return cache.get(key);
      }

      let result = func.call(this, ...arguments);
      // same: func.apply(this, arguments)

      cache.set(key, result);
      return result;
    };
  }

  function hash(args) {
    return args[0] + "," + args[1];
  }

  worker.slow = cachingDecorator(worker.slow, hash);

  alert(worker.slow(3, 5)); // Called with 3,5 → 8
  alert("Again " + worker.slow(3, 5)); // cached
}

// Method borrowing

/*
arguments is array-like, not a real array → no .join
Borrow: [].join.call(arguments)
*/

{
  function hash() {
    // arguments.join() → Error
    alert([].join.call(arguments)); // 1,2
  }

  hash(1, 2);
}

{
  // hash for any number of args
  function hash() {
    return [].join.call(arguments);
  }

  alert(hash(1, 2, 3, 4)); // 1,2,3,4
}

/*
Decorators and function properties:
wrapper does NOT copy properties of the original
(func.calledCount etc.). Careful.
Proxy can keep them — later chapter.

Summary:
- decorator = wrapper around a function
- call(context, ...args) / apply(context, args)
- forwarding: original.apply(this, arguments)
- method borrowing: [].join.call(arguments)
*/

alert("The End of 6.9. Decorators and forwarding, call/apply");
