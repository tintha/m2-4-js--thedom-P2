// Exercise 4
//
// Part 1 - Write
// ---------------
// Write a function accepts an array of objects as well as a key
// and returns the sum of the values associated to that key in all of the array objects.
//
// e.g. count([{ name: "Bob", amount: 100 }, { name: "Josie", amount: 45 }], 'amount') returns 145
//
// - If any of the objects don't have that key, the function shouldn't break.
// - If the value of that key is not a number, ignore it, The function shouldn't break.

const count = (arr, key) => {
  // Insert missing solution please
  
  let sum = 0;
  arr.forEach((element) => {
    if (!element.hasOwnProperty(key)) {
      sum += 0;
    } else if (isNaN(element[key])) {
      sum += 0; 
    } else {
    sum += element[key];
    }
  });
  
  return sum;
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = count;
