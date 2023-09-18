function isPalindrome(word) {
  // Write your algorithm here
  const lowerCaseWord = word.toLowerCase()
  const splitWord = lowerCaseWord.split('')
  const arrayReversed = splitWord.reverse()
  const joinArrayReversed = arrayReversed.join('')
  if(joinArrayReversed === lowerCaseWord){
    return true
  }else{
    return false
  }
}

/* 
  Add your pseudocode here

  Make the letters of the word all lowercase
  split the word into an array
  reverse the array
  join the letters in the array
    if the reverse word is the same as the word 
      return true
    else
      return false
*/

/*
  Add written explanation of your solution here

  The input will be a string and the output will be a boolean.
    set the word to have all same case letters
    we can split the word up into an array 
    then flip the array. to where the last letter is first and the second to the last letter is second and so on
    join the letters in the array together to where the array of letter is now a word again
    then compare the fliped word with the word string
    and if it matches then return true
    if it doesn't match return false 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
