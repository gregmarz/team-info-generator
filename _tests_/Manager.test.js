const Manager = require("../lib/Manager");

describe("Test", function () {
  test("check to see if all info gets parsed properly for manager", function () {
    const Manny = new Manager("Manny", "0001", "manny@gmail.com", 110);

    expect(Manny.name).toBe("Manny");
    expect(Manny.id).toBe("0001");
    expect(Manny.email).toBe("manny@gmail.com");
    expect(Manny.officenumber).toBe(110);
  });
});
