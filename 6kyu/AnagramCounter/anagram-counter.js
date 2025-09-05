/*
  1. go through wordsArray
  2. currentWord split into characters.
  3. go through the rest of the wordsArray
  4. compare length 
  5. split only word if equal length -
  6. then in an extra for loop compare whether each letter exists from currentWord
  7. if gone through characters loop and anagram is found, +1 totalFound, 
  8. if anagram not found or found, move to next word with next equal length word. 
  9. go to step 4 and repeat
  10. finish the loop when we reach the last item in the array
  11. return number of found anagrams
*/
function anagramCounter (wordsArray) {
    let totalFound = 0;
    let currentWord = "";
    
    for(let i = 0; i < wordsArray.length; i++) {
      currentWord = wordsArray[i];
      let nextWord = "";
      if(i < wordsArray.length - 1) { //if not last word
        nextWord = wordsArray[i + 1];
      }
      if(nextWord !== "" && currentWord.length === nextWord.length) {
        let firstWord =currentWord
            .toLowerCase()
            .split('')
            .sort((a, b) => a.localeCompare(b))
            .join();
        let secondWord = nextWord
            .toLowerCase()
            .split('')
            .sort((a, b) => a.localeCompare(b))
            .join();
        let isAnagram = firstWord === secondWord;
        if(isAnagram) {
          totalFound++;
        }
      }
    }
  
    return totalFound;
  }