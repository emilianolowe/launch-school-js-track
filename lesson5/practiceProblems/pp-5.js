// Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalAgeOfMaleFamilyMembers = 0;

// Iterate through Munsters family Object
// If the current member's gender === 'male'
  // then add member.age to totalAgeOfMaleFamilyMembers

let memberDetails = Object.values(munsters);

console.log(memberDetails);

memberDetails.forEach(member => {
  if (member.gender === 'male') {
    totalAgeOfMaleFamilyMembers += member.age;
  }
});

console.log(totalAgeOfMaleFamilyMembers);
