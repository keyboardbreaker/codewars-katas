/*
    https://www.codewars.com/kata/59c3e819d751df54e9000098/train/javascript
*/

function getConsecutiveItems(items, key) {
    items = items.toString(); //items = 90100 -> "90100"
    key = key.toString();
    let counts = [];
    let currentCount = 0;
    let list = items.split('');
    let lastIndex = list.length - 1;  

    for (let i = 0; i < list.length; i++) {
        let character = list[i];
        if (character === key) {
            currentCount++;
        }
        // return count to collection if no match or last item.
        if (character !== key || i === lastIndex) {
            counts.push(currentCount);
            currentCount = 0;
        }
    }

    return Math.max(...counts);
}
