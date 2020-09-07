let statement = "The Flintstones Rock";
let statementCharFrequency = {};
// create an object that expresses the frequency with which each letter orccurs in the string above.

// The output will look something like: { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

// input: String, output: Object

// populate object with key-values pairs
//  the keys are each char in the String 0...String.length
// the values are the amount of times that char occurs in the string
// algorithm: Loop within a Loop. initialize statmentCharFrequency object. The first loop iterates through the string
// as an array and assigns the first char as the current value
// nter the second loop and iterate through the String and populating the statementCharFrequency object;
// return the statementCharFrequency Object

charsInStatment = statement.split('').filter(char => char !==  ' ');

charsInStatment.forEach(char => {
  statementCharFrequency[char] = statementCharFrequency[char] || 0;
  statementCharFrequency[char] += 1;
});

console.log(statementCharFrequency);
