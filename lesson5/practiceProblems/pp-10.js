// Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let copyOfArr = [...arr];

copyOfArr.forEach(arr => {
  arr.sort((a, b) => {
    if (typeof a === 'string') {
      return b - a;
    };
    return Number(b) - Number(a);
  });
  console.log(arr);
});
