let capitals = function (word) {
    let letters = word.split('');
    let rtnArray = [];
    letters.filter((char, index) => {
        if( char === char.toUpperCase())
          rtnArray.push(index);
          return char === char.toUpperCase();
      }
    );
    return rtnArray;
  };