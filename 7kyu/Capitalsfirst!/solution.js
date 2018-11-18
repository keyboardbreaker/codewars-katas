function capitalsFirst(str){
    let re = new RegExp(/[\d+!]/, 'ig');
    let words = str.split(' ');
    let lowercaseArr = [];
    let capArr = words.reduce((rtnArr, word)=>{
      if(re.test(word[0])){
        //ignore the word if starts with special character or number
      }
      else if(word.charAt(0) === word.charAt(0).toUpperCase()){
        rtnArr.push(word);
      }else{
        lowercaseArr.push(word);
      }
      return rtnArr;
    }, []);
    return capArr.concat(lowercaseArr).join(' ');
  }