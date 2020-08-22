//Q1)  Count Instances of a Character in a String


function char_Count(c, string) 
{
 var count = 0;
 for (var position = 0; position < string.length; position++) 
 {
    if (c == string.charAt(position)) 
      {
           count += 1;
      }
  }
  return count;
}

console.log(char_Count("a", "edabit"));
console.log(char_Count("c", "Chamber of secrets"));
console.log(char_Count("b", "big fat bubble"));



//Q2) Add up the Numbers from a Single Number


function add(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
console.log(add(4));
console.log(add(13));
console.log(add(600));


//Q3) Replace Vowel with Another Character


function Vowel(string) 
{
 
 for (var position = 0; position < string.length; position++) 
 {
    if (string.charAt(position) == 'a') 
    {
        string = string.replace(string.charAt(position), 1);      
    }
    if (string.charAt(position) == 'e') 
    {
        string = string.replace(string.charAt(position), 2);      
    }
    if (string.charAt(position) == 'i') 
    {
        string = string.replace(string.charAt(position), 3);      
    }
    if (string.charAt(position) == 'o') 
    {
        string = string.replace(string.charAt(position), 4);      
    }
    if (string.charAt(position) == 'u') 
    {
        string = string.replace(string.charAt(position), 5);      
    }                               
  }
  return string;
}

console.log(Vowel("karachi"));
console.log(Vowel("chembur"));
console.log(Vowel("khandbari"));