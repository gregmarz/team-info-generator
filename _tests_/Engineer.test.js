const Engineer = require("../lib/Engineer");

describe("Test", function () {
  test("Check to see if all info gets parsed properly for engineer", function () {
    const Eddy = new Engineer(
      "Eddy",
      1052,
      "eddy@gmail.com",
      "github.com/eddy"
    );
    expect(Eddy.name).toBe("Eddy");
    expect(Eddy.id).toBe(1052);
    expect(Eddy.email).toBe("eddy@gmail.com");
    expect(Eddy.github).toBe("github.com/eddy");
    expect(Eddy.getRole()).toBe("Engineer");
  });
});
