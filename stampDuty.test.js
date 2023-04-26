const stampDuty = require("./stampDuty");

describe("Basic tests", () => {
  it("Returns a string", () => {
    const housePrice = 100000;
    expect(typeof stampDuty(housePrice)).toBe("string");
  });
});
