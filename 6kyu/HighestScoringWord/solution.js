function high(sentence){
    let words = sentence.split(' ');
    const ALPHABET = ' abcdefghijklmnopqrstuvwxyz';
    let wordChar = words.map(word => word.split(''));
    let longestWord = "";
    let highestWordTotal = 0;
    
    for(let i = 0; i < wordChar.length; i++){
      wordTotal = 0;
      for(let j = 0; j < wordChar[i].length; j++){
        wordTotal +=ALPHABET.search(wordChar[i][j]);
      }
      if(wordTotal > highestWordTotal){
        longestWord = words[i];
        highestWordTotal = wordTotal;
      }
    }
    return longestWord;
  }