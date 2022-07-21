const Employee = require("../lib/Employee");

test("TEstName", function () {
  const Johnny = new Employee("Johnny", 1094, "johnny@gmail.com");

  expect(Johnny.name).toBe("Johnny");
});
