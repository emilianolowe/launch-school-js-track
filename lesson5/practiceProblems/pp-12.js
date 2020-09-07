// Given the following data structure, use a combination of methods, including `filter`, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// Input: multi-dimensional array
// Output: New multi-dimensional array
  // must use combination of methods, including `filter`
  // Only numbers num % 3 === 0
    // Algorithm: 
      // use map and filter

arr.map(subArr => {
  subArr.filter(num => num % 3 === 0);
});
