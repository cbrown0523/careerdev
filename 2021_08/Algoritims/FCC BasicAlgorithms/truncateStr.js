function truncateString(str, num) {
    let trunc = "..."
    if(str.length > num){
      return str.slice(0 , num) + trunc;
    }
    else {
      return str
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);