const { add } = require("../index");
const { expect } = require("chai");

describe("Tests for Add function", function () {
  it("Should return the sum of two values passed as arguments", function () {
    const result = add(2, 2);
    expect(result).to.equal(4);
  });

  it("Should return 0 if either argument is NaN", function () {
    const result = add("2", 2);
    expect(result).to.equal(0);
  });
});
