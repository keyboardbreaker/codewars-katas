/*
    https://www.codewars.com/kata/58ef87dc4db9b24c6c000092/javascript
*/

function sectSort(list, startingIndex, howManyCharacters) {
    let firstSlice = list.slice(0, startingIndex);

    let endingIndex;
    // special case: 0 means "sort until end"
    if (howManyCharacters === 0) {
        endingIndex = list.length;
    } else if (howManyCharacters !== undefined) {
        endingIndex = startingIndex + howManyCharacters;
    } else {
        endingIndex = list.length;
    }

    let lastSlice = howManyCharacters && howManyCharacters !== 0
        ? list.slice(endingIndex)
        : [];

    let sortedSlice = list.slice(startingIndex, endingIndex).sort((a, b) => a - b);

    return firstSlice.concat(sortedSlice, lastSlice);
}