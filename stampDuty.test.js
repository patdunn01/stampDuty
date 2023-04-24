const stampDuty = require("./stampDuty");

describe("Basic tests", () => {
  it("Returns a string", () => {
    const housePrice = 100000;
    expect(typeof stampDuty(housePrice)).toBe("string");
  });
  it("Returns a string representing a floating point number with only two decimal places.", () => {
    const housePrice = 100000;
    expect(stampDuty(housePrice)).toMatch(/\.\d{2}/);
  });
});

describe("Houses below threshold of £250,000", () => {
  it("Returns 0 if the house price is less than £250,000", () => {
    const housePrice = 100000;
    expect(stampDuty(housePrice)).toEqual("£0.00");
    const housePrice1 = 250000.99;
    expect(stampDuty(housePrice1)).toEqual("£0.00");
  });
});

describe("Houses between threshold of £250,000 and £925,000", () => {
  it("Returns correct value if the house price is more than £250,000 but less than £925,000", () => {
    const housePrice = 500000;
    expect(stampDuty(housePrice)).toEqual("£12500.00");
    const housePrice1 = 250001;
    expect(stampDuty(housePrice1)).toEqual("£0.05");
    const housePrice2 = 925000.99;
    expect(stampDuty(housePrice2)).toEqual("£33750.05");
  });
});

describe("Houses between threshold of £250,000 and £925,000", () => {
    it("Returns correct value if the house price is more than £925,001 but less than £1,500,000", () => {
      const housePrice = 925020;
      expect(stampDuty(housePrice)).toEqual("£33752.05");
    });
  });