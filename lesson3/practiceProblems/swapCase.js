let munstersDescription = "The Munsters are creepy and spooky.";

console.log(munstersDescription.split(''));

let munstersDescriptionCaseSwapped = munstersDescription.split('').map(char => 
  char === char.toUpperCase ? char.toLowerCase : char.toUpperCase
);

console.log(munstersDescriptionCaseSwapped);
