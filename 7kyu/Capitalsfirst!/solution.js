function capitalsFirst(str){
    let words = str.split(' ');
    let capArr = words.filter(function(x) { return x.charAt(0).match(/[A-Z]/) });
    let lowercaseArr = words.filter(function(x) { return x.charAt(0).match(/[a-z]/) });

    return capArr.concat(lowercaseArr).join(' ');
  }