// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
// => [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]
// input: multi-dim array
// output: multi-dim array
// sort based on the sum of the odd numbers they contain.
  // if num % 2 !== 0 || num % 2 === 1;
  // Algorithm:
    // Using the sort algorithm we can sort a and b using filter and reduce

arr.sort((a, b) => {
  oddSumA = a.filter(num => num % 2 === 1).reduce((sum, next) => sum + next);
  oddSumB = b.filter(num => num % 2 === 1).reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
});

console.log(arr);
