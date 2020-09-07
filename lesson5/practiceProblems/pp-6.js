// print the name, age, and gender of each family member: 

// (Name) is a (age)-year-old (male or female).


let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let members in munsters) {
  console.log(`${members} is a ${munsters[members]['age']}-year-old ${munsters[members]['gender']}`);
}
