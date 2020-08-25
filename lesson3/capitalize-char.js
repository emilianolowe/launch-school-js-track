let munstersDescription = "The Munsters are creepy and spooky.";

let newString = munstersDescription.split('').map(function (char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join('');

console.log(newString);
