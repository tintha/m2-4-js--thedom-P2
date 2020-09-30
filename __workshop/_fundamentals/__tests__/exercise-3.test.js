// We import (require) the function that we want to test.
const insert = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(
    insert([{ name: "Bob" }, { name: "Josie" }], { isAvailable: false })
  ).toStrictEqual([
    { name: "Bob", isAvailable: false },
    { name: "Josie", isAvailable: false },
  ]);
  // add more tests here...
  expect(
    insert([{ name: "Bob" }, { name: "Josie" }], { age: 30 })
  ).toStrictEqual([
    { name: "Bob", age: 30 },
    { name: "Josie", age: 30 },
  ]);
  expect(
    insert([{ name: "Bob", last: "Smith" }, { name: "Josie", last: "Smith" }], { isAvailable: true })
  ).toStrictEqual([
    { name: "Bob", last: "Smith", isAvailable: true },
    { name: "Josie", last: "Smith", isAvailable: true },
  ]);
  expect(
    insert([{ customer: true, name: "Bob" }, { name: "Josie" }], { customer: false })
  ).toStrictEqual([
    { name: "Bob", customer: false },
    { name: "Josie", customer: false },
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
