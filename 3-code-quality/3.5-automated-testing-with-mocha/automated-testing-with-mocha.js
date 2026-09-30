// 3.5. Automated testing with Mocha

/*
Why tests?
Manual checks: easy to fix f(2) and forget to re-check f(1).
Automated tests are separate code that runs the function
in many ways and compares with expected results.

BDD = Behavior Driven Development
= tests + documentation + examples

Flow:
1) write / extend the spec
2) implement
3) run Mocha → fix until green
4) add more tests → repeat

Libraries:
- Mocha — describe, it, mocha.run()
- Chai  — assert.*
- Sinon — spies/mocks (later)
*/

// ---------- implementation (pow) ----------

/*
pow(x, n) — raise x to integer power n (n >= 0).
Invalid n → NaN (like many JS math functions).
*/

function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

// ---------- spec (tests) ----------

/*
Building blocks:
- describe("title", fn) — group of tests
- it("use case", fn)    — one test (one thing!)
- assert.equal(a, b)    — check a == b
- assert.isNaN(value)   — check NaN

If one assert fails inside it — the rest of that it is skipped.
So better: several small it(...) instead of many asserts in one.
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
Hooks (optional):
before / after         — once for the suite
beforeEach / afterEach — around every it

Other asserts:
assert.equal / strictEqual
assert.notEqual / notStrictEqual
assert.isTrue / isFalse
assert.isNaN

Summary:
Spec first → then code.
Spec = tests + docs (titles) + examples.
Open this index.html in the browser to see green/red results.
*/

// Optional hooks demo — uncomment to see alert order
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
