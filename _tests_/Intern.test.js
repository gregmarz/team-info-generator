const Intern = require("../lib/Intern");

describe("Test", function () {
  test("Check to see if all info gets parsed properly for intern", function () {
    const Indra = new Intern("Indra", 1100, "indra@gmail.com", "harvard");

    expect(Indra.name).toBe("Indra");
    expect(Indra.id).toBe(1100);
    expect(Indra.email).toBe("indra@gmail.com");
    expect(Indra.school).toBe("harvard");
    expect(Indra.getRole()).toBe("Intern");
  });
});
