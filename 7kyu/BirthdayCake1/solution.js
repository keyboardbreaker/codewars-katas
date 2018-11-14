// x = no of candles
// y = number of fallen candles
function cake(x, y){ 
    let stringSplit =  y.split('');
    const ALPHABET = ' abcdefghijklmnopqrstuvwxyz'.split('')
    
    let total = 0;
    for(let i = 0; i < stringSplit.length; i++){
      if(i % 2 === 0){
        total += stringSplit.join('').charCodeAt(i);
      }
      else{
        total += ALPHABET.join('').search(stringSplit[i]);
      }
    }
    
    if(total / x > 0.7){
      return 'Fire!';
    }
    else{
      return 'That was close!';
    }
  }