let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// pick out the min ages from the munsterFamily obj;

let munsterAges = Object.values(ages);

let youngestMunster = Math.min(...munsterAges);

console.log(`The youngest munster is ${youngestMunster} years old.`);
