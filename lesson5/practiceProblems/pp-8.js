// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

// Iterate through object
// output all the vowels from the strings in the arrays.
// The arrays are values of each k-v pair in the outer object.
// Cannot use for or whille loops

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if ('aeiou'.includes(char)) {
        console.log(char);
      }
    })
  })
});