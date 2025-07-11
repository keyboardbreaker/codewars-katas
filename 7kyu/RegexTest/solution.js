function findSimilarity(str, word) {
    let similarWords = str.split(' ')
        .filter(strWord => {
            if(strWord.length === word.length
            && strWord[0] === word[0] 
            && strWord[strWord.length - 1] === word[word.length - 1]) {
                return strWord;
            }
        })
        .join(' ');
    return similarWords;
}