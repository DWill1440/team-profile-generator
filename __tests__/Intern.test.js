const Intern = require("../lib/Intern");

test("Set school with constructor", () => {
  const schoolValue = "UH";
  const employee = new Intern("Sam", 123, "test@test.com", schoolValue);
  expect(employee.school).toBe(schoolValue);
});

test("getRole() should return 'Intern'", () => {
  const value = "Intern";
  const employee = new Intern("Sam", 123, "test@test.com", "UH");
  expect(employee.getRole()).toBe(value);
});

test("Get school with getSchool()", () => {
  const value = "UH";
  const employee = new Intern("Sam", 123, "test@test.com", value);
  expect(employee.getSchool()).toBe(value);
});
