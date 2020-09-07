// Given the following data structure, return a new array with the same structure, but with the subarrays ordered -- alphabetically or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

// input: multi-dimensional Array
// output: multi-dimensaional Array of the same strx of the input Array
// return new array, sorted. So we want to make a copy
  // but, with subArrays ordered
  // alphabetically or numericall as appropriate in ASC order

let copyOfArr = [...arr];

copyOfArr.forEach(arr => {
  arr.sort((a, b) => {
    if (typeof a === 'string') {
      return a - b;
    };
    return Number(a) - Number(b);
  });
  console.log(arr);
});

// console.log(copyOfArr);