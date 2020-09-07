let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
  let fruits = {};
  for(let property in obj) {
    if (obj[property] === 'Fruit') {
      fruits[property] = obj[property];
    }
  }
  return fruits;
}

console.log(selectFruit(produce));
