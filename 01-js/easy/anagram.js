/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let flag = false;
  for(let i =0; i<str1.length; i++){
    for(let j=0; j<str2.length; j++){
      if(str1[i] == str2[j]){
        flag = true;
        break;
      }
      else if(str2[j] == (str2.length - 1) && flag == false){
        return false;
      }
    }
    // flag = false;
  }
  console.log(flag);
  return flag;
}

module.exports = isAnagram;
