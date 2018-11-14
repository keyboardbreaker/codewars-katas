// x = no of candles
// y = number of fallen candles
function cake(x, y){ 
    let stringSplit =  y;
    const ALPHABET = ' abcdefghijklmnopqrstuvwxyz';
    
    let total = 0;
    for(let i = 0; i < stringSplit.length; i++){
      (i % 2 === 0) ?
        total += stringSplit.charCodeAt(i)
        : total += ALPHABET.search(stringSplit[i]);
    }
    return (total / x) > 0.7 ? 'Fire!' : 'That was close!';
  }