// Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.
// => [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

// in: Object, out: Array
  // the output array contains subArrays of either the colors of the fruit or the size of the vegetables. Expected output above.
  // MM: loop over obj keys to get values, map over keys to create a logical flow where if the k-v pair is a Obj[type] === 'fruit' then .push(Obj[colors].Uppercase), but if it's Obj[type] === 'vegetable' then .push(Obj[size].Capitalize)

let capitalize = word => word[0].toUpperCase() + word.slice(1);

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let objArr = Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalize(char));
  } else {
    return attributes['size'].toUpperCase();
  }
});

console.log(objArr);
