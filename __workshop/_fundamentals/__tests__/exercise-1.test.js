// We import (require) the function that we want to test.
const convertToString = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(convertToString([1, 2, 3, 4, 5])).toStrictEqual([
    "1",
    "2",
    "3",
    "4",
    "5",
  ]);
  // add more tests here...
  expect(convertToString([3, 432, 454, 76, "543"])).toStrictEqual([
    "3",
    "432",
    "454",
    "76",
    "543",
  ]);
});
expect(convertToString(["432", "65", "45"])).toStrictEqual([
  "432",
  "65",
  "45",
]);
expect(convertToString([0, 5, 7, 2, 8])).toStrictEqual([
  "0",
  "5",
  "7",
  "2",
  "8",
]);
  

// More info on jest expect: https://jestjs.io/docs/en/expect
