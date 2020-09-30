// We import (require) the function that we want to test.
const addNumbers = require("../exercise-5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(addNumbers(1, 2, 3, 4, 5)).toBe(55);
  // add more tests here...
  expect(addNumbers(1, 2, 3, "hello", 5)).toBe(39);
  expect(addNumbers()).toBe(undefined);
  expect(addNumbers(true, 5, 5)).toBe(50);
  expect(addNumbers("only", "srings")).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
