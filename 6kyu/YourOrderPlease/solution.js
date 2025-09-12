/*
    https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
*/


function yourOrderPlease(words) { //"is2 Thi1s T4est 3a" -> "Thi1s is2 3a T4est"
    let wordsArray = words.split(" ");
    let wordsWithIndex = [];

    let currentOrder = wordsArray.map((word) => {
        return word
            .split("")
            .find((letter) => {
                if (/\d+/.test(letter)) { //is letter a digit: true/false
                    return letter;
                }
            });
        });

    for (let i = 0; i < currentOrder.length; i++) {
        let word = wordsArray[i];

        wordsWithIndex.push({ word: word, index: currentOrder[i] });
    }

    let sortedWords = wordsWithIndex
        .sort((a, b) => a.index - b.index)
        .map((wordPair) => wordPair["word"])
        .join(" ");
    return sortedWords;
}
