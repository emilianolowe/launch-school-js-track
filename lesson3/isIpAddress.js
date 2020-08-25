
function isAnIpNumber(str) {
  if (!/^\d+$/.test(str)) return false;

  let number = Number(str);
  return number >= 0 && number <= 255;
}



function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length < 4 || dotSeparatedWords > 4) {
    return false;
  }
  
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress('123.432.545.645'));
console.log(isDotSeparatedIpAddress('23.4.23.12'));
console.log(isDotSeparatedIpAddress('23.4342.4'));
console.log(isDotSeparatedIpAddress('34.34'));
console.log(isDotSeparatedIpAddress('123.123.123.123'));