/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const cleanStr = (str) => str.replace(/\s/g,'').toLowerCase();
  const sortedStr = (str) => cleanStr(str).split('').sort().join('');
  return sortedStr(str1) === sortedStr(str2);

}

module.exports = isAnagram;
