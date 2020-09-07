// Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// Input: Array containing 3 objects
// Output: Array containing 3 objects (different than OG)
// *** Must not mutate OG Input Array
  // Initialize new array to save values.
  // iterate using a for loop over each element of the array, mapping each value into
  // the newArr and increasing each value +1

arr.map(obj => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  };

  console.log(incrementedObj);
  return incrementedObj;
});

console.log(arr);