let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
let munsterFamilyAges = 0;
// add up all the ages from the munsterFamily obj;

Object.values(ages).forEach(age => munsterFamilyAges += age);

console.log(munsterFamilyAges);
