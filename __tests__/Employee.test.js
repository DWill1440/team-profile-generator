const Employee = require("../lib/Employee");

test("Can init Employee", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test("Set name with constructor argument", () => {
    const name = "Jamie";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Set id with constructor argument", () => {
    const idValue = 123;
    const employee = new Employee("Tom", idValue);
    expect(employee.id).toBe(idValue);
});

test("Set email with constructor argument", () => {
    const emailValue = "test@test.com";
    const employee = new Employee("Jill", 123, emailValue);
    expect(employee.email).toBe(emailValue);
});

test("Get name with getName()", () => {
    const value = "Frank";
    const employee = new Employee(value);
    expect(employee.getName()).toBe(value);
});

test("Get id with getId()", () => {
    const idValue = 123;
    const employee = new Employee("Jack", idValue);
    expect(employee.getId()).toBe(idValue);
});

test("Get email with getEmail()", () => {
    const emailValue = "test@test.com";
    const employee = new Employee("Jeff", 123, emailValue);
    expect(employee.getEmail()).toBe(emailValue);
});

test("getRole() shoud return 'Employee'", () => {
    const value = 'Employee';
    const employee = new Employee("Sam", 123, "test@test.com");
    expect(employee.getRole()).toBe(value);
});