function factors(number) {
  let factors = [];

  for (let divisor = number; divisor > 0; divisor --) {
    if (number % divisor === 0) {
      console.log(factors.push(number / divisor));
    }
    return factors;
  }
}

console.log(factors(25));
console.log(factors(16));
console.log(factors(0));
console.log(factors(-16));
console.log(factors(100));
