const Employee = require("../lib/Employee");

describe("Test", function () {
  test("Check to see if all info gets parsed properly", function () {
    const Johnny = new Employee("Johnny", 1094, "johnny@gmail.com");

    expect(Johnny.name).toBe("Johnny");
    expect(Johnny.id).toBe(1094);
    expect(Johnny.email).toBe("johnny@gmail.com");
    expect(Johnny.getRole()).toBe("Employee");
  });
});
