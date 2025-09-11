/*
https://www.codewars.com/kata/5a24254fe1ce0ec2eb000078
*/

function returnIndexOfMatchingBracket(str,idx){
    let stack = [];
    let strArray = str.split('');

    if(strArray[idx] !== "(") {
        return -1;
    } else {
        for(let i = 0; i <strArray.length; i++) {
            let character = strArray[i];
            if(character === "(") {
                stack.push(i);// save index of starting "("
            }
            else if (character === ")") {
                const openIndex = stack.pop();
                if (openIndex === idx) {
                    return i;
                }
            }
        }
    }
}