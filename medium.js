//Q1) Reverse Words Starting with a Particular Letter

function Reverse(string, c) {
  let arr = string.split(' '); 
  let len = arr.length;
  for (i = 0; i < len; i++) {
    if (arr[i].substr(0, 1) == c) {
      let newarr = arr[i].split(''); 
      arr[i] = newarr.reverse().join(''); 
    }
  }
  return arr.join(' '); 
}

console.log(Reverse("word searches are super fun", "s"));
console.log(Reverse("first man to walk on the moon", "m"));
console.log(Reverse("peter piper picked pickled peppers", "p"));




//Q2) Hitting the Jackpot


function Jackpot(arr) {
  if (
    arr[0] === arr[1] &&
    arr[1] === arr[2] &&
    arr[2] === arr[3] &&
    arr[3] === arr[0]
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(Jackpot(["@", "@", "@", "@"]));
console.log(Jackpot(["abc", "abc", "abc", "abc"]));
console.log(Jackpot(["SS", "SS", "SS", "SS"]));
console.log(Jackpot(["&&", "&", "&&&", "&&&&"]));
console.log(Jackpot(["SS", "SS", "SS", "Ss"]));




//Q3) Remove Duplicates from an Array


function Dup(array) {
  return array.filter((a, b) => array.indexOf(a) === b);
}

console.log(Dup([1, 0, 1, 0]));
console.log(Dup(["The", "big", "cat"]));
console.log(Dup(['John', 'Taylor', 'John']));