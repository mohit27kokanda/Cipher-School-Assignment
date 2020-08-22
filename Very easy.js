//Q1. Convert Minutes into Seconds

function convert(a) {
  return a * 60;
}

console.log(convert(5));
console.log(convert(3));
console.log(convert(2));




// Divides Evenly

function divide(a, b) {
  if (a % b == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(divide(98, 7));
console.log(divide(85, 4));