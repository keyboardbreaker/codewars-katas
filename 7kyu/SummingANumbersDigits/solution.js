function sumDigits(number) {
    let digits = number.toString().split('');
    return digits.reduce((acc, cur) =>{
      return isNaN(cur) ? 0 : Number(acc) + Number(cur);
    }, 0);
  }