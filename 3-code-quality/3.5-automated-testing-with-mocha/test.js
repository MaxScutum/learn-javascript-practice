// 3.5. Automated testing with Mocha — spec

/*
Why tests?
Manual re-checks miss cases (fix A, break B).
Automated tests run many checks after every change.

BDD = tests + docs + examples
Building blocks:
- describe("title", fn) — group
- it("use case", fn)    — one test
- assert.*              — checks (Chai)

Rule: one test checks one thing.
Prefer several it(...) over many asserts in one it
(first failed assert stops the it).

Libraries:
- Mocha — describe / it / run
- Chai  — assertions (assert.equal, assert.isNaN, ...)
- Sinon — spies/mocks (later)

Hooks:
before / after         — once for the suite
beforeEach / afterEach — around every it
*/

describe("pow", function () {
  describe("raises x to power 3", function () {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  it("2 raised to power 3 is 8", function () {
    assert.equal(pow(2, 3), 8);
  });

  it("3 raised to power 4 is 81", function () {
    assert.equal(pow(3, 4), 81);
  });

  it("for negative n the result is NaN", function () {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function () {
    assert.isNaN(pow(2, 1.5));
  });
});

/*
Useful Chai asserts:
assert.equal(a, b)           // ==
assert.strictEqual(a, b)     // ===
assert.notEqual / notStrictEqual
assert.isTrue / isFalse
assert.isNaN(value)

Summary:
Spec first → implementation → more tests → improve code.
Spec = tests + documentation + working examples.
*/

// Optional: hooks demo (uncomment to see alert order)
/*
describe("hooks demo", function () {
  before(() => alert("Testing started – before all tests"));
  after(() => alert("Testing finished – after all tests"));
  beforeEach(() => alert("Before a test – enter a test"));
  afterEach(() => alert("After a test – exit a test"));

  it("test 1", () => alert(1));
  it("test 2", () => alert(2));
});
*/
