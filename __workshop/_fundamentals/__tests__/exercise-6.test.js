// We import (require) the function that we want to test.
const isPalindrome = require("../exercise-6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(isPalindrome("radar")).toBe(true);
  // add more tests here...
  expect(isPalindrome("level")).toBe(true);
  expect(isPalindrome("kayak")).toBe(true);
  expect(isPalindrome("hola")).toBe(false);
  expect(isPalindrome("palindrome")).toBe(false);
  expect(isPalindrome(432)).toBe(undefined);
  expect(isPalindrome(true)).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
