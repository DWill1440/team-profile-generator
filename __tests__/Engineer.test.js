const Engineer = require("../lib/Engineer");
const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee");

test("Set GitHub with constructor", () => {
  const gitValue = "GitHubUser";
  const employee = new Engineer("Sam", 123, "test@test.com", gitValue);
  expect(employee.github).toBe(gitValue);
});

test("getRole() should return 'Engineer'", () => {
  const roleValue = "Engineer";
  const employee = new Engineer("Sam", 123, "test@test.com", "GitHubUser");
  expect(employee.getRole()).toBe(roleValue);
});

test("Get GitHub username with getGithub()", () => {
  const userValue = "GitHubUser";
  const employee = new Engineer("Sam", 123, "test@test.com", userValue);
  expect(employee.getGithub()).toBe(userValue);
});
