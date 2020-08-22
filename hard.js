//Q1. Get Real Type

function type(val) {
  let array = Object.prototype.toString.call(val);
  let type = array.split(' ');
  let typeStr = '';

  for (i = 0; i < type[1].length; i++) {
    if (type[1].charAt(i) !== ']') typeStr += type[1].charAt(i);
  }

  return typeStr.toLocaleLowerCase();
}

console.log(type(1));
console.log(type('a'));
console.log(type(true));
console.log(type([]));
console.log(type(null));






//Q2) Numbers in Strings

function numstr(str) {
  let fArr = [];
  for (i = 0; i < str.length; i++) {
    arr = str[i].split('');

    for (j = 0; j < arr.length; j++) {
      if (
        arr[j] == '1' ||
        arr[j] == '2' ||
        arr[j] == '3' ||
        arr[j] == '4' ||
        arr[j] == '5' ||
        arr[j] == '6' ||
        arr[j] == '7' ||
        arr[j] == '8' ||
        arr[j] == '9' ||
        arr[j] == '0'
      ) {
        fArr.push(arr.join(''));
        break;
      }
    }
  }
  return fArr;
}

console.log(numstr(['1a', 'a', '2b', 'b']));
console.log(numstr(['abc', 'abc10']));
console.log(numstr(['abc', 'ab10c', 'ab10c', 'bcd']));
console.log(numstr(['this is a test', 'test1']));