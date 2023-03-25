// What does the following code return?
new Set([1,1,2,2,3,4])
// Output: {1,2,3,4}

/////

// What does the following code return?
[...new Set("referee")].join("")
// Output: 'ref'

/////

// What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// Output: {
//   0: {Array(3) => true}
//   1: {Array(3) => false}
// };

/////

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = (arr) => new Set(arr).size === arr.length ? false : true;

/////

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function hasVowel(char) {
  return 'aeiou'.indexOf(char) !==-1;
}

function vowelCount(str) {
  const lowerCaseStr = str.toLowerCase();
  const vowelMap = new Map();
  for(let char of lowerCaseStr) {
    if(hasVowel(char)) {
      if(vowelMap.has(char)) {
        vowelMap.set(char, vowelMap.get(char)+1)
      } else {
        vowelMap.set(char, 1)
      }
    }
  }
  return vowelMap;
}

// vowelMap.set('vowel', count)

// for(const [key, value] of vowelCount) {
//   return {`${key} => ${value}`};
// }
// const countVowels = (str) => {
//   for(let letter of str) {
//     if(Array.from(str)[letter]) {
//       (Array.from(str)[letter])++
//     } else {
//       (Array.from(str)[letter]) = 1;
//     }
//   }
// }

