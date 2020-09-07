let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstonesObj = {};
// write program that uses this arr to create an obj obj[names] = index;
// input: arr, output: obj

flintstones.forEach((key, value) => {
  flintstonesObj[key] = value;
});

console.log(flintstonesObj);