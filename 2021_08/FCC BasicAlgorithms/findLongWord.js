function findLongestWordLength(str) {
    let longWord = 0;
    let words = str.split(" ");
    for( let i = 0 ; i< words.length ; i++ ){
      if(words[i].length > longWord){
        longWord = words[i].length;
      }
    }
    return longWord
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");