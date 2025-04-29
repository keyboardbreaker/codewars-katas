const pattern = "asdadsas";

const FindFirstRepeatingCharacter = (inputString) => {
    let foundArray = [];
    
    return inputString
        .split("")
        .find((letter) => {
            if(foundArray.includes(letter)) {
                return letter;
            } else {
                foundArray.push(letter);
            }
        });
}

console.log(FindFirstRepeatingCharacter(pattern));