// Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

// in: array of objects
// out: array of objects
// rules: Only return array which contains the objexts where .every number is even.
// MM: Going to use map to iterate over my 3 elements. Each element is an object, and I need to iterate over each k-v pair in the object and then iterate again over each value (array) and if .every value is even then it's included. Actually not that I'm thinking out loud I can actually use filter! Let's checkout filter.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArr = arr.filter(obj => {
  return Object.values(obj).every(subArray => {
    return subArray.every(num => num % 2 === 0);
  });
});

console.log(newArr);
