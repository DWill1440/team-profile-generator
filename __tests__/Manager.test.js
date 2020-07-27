const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Set office number with constructor argument", () => {
  const value = 1234567891;
  const employee = new Manager("Sam", 123, "test@test.com", value);
  expect(employee.officeNumber).toBe(value);
});

test("getRole() should return 'Manager'", () => {
  const value = "Manager";
  const employee = new Manager("Sam", 123, "test@test.com", 1234567891);
  expect(employee.getRole()).toBe(value);
});

test("Can get office number with getOffice()", () => {
  const value = 1234567891;
  const employee = new Manager("Sam", 123, "test@test.com", value);
  expect(employee.getOfficeNumber()).toBe(value);
});
