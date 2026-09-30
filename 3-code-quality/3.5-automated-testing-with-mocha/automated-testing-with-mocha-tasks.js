// 3.5. Automated testing with Mocha. Task.

/*
Task. What's wrong in the test? (importance: 5)

Wrong style (passes, but bad):
- 3 independent checks inside ONE it
- if the first assert fails, the others never run
- harder to see which case broke

Fix: one it = one check.
*/

describe("Raises x to power n", function () {
  it("5 in the power of 1 equals 5", function () {
    assert.equal(pow(5, 1), 5);
  });

  it("5 in the power of 2 equals 25", function () {
    assert.equal(pow(5, 2), 25);
  });

  it("5 in the power of 3 equals 125", function () {
    assert.equal(pow(5, 3), 125);
  });
});
