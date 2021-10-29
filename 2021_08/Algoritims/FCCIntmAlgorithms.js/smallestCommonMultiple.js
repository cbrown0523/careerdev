let numSort = function(a, b ){
    return a-b
  }
  function smallestCommons(arr) {
    let range = getRange(arr)
    let multiple = 1;
    while(true){
      let foundSCM = true;
      for(let i = 0 ; i < range.length && foundSCM; i++){
        if( multiple % range[i] !== 0 ) {
          foundSCM = false
         
        }
      }
      if(foundSCM){
        break;
      }
      multiple++
    }
      return multiple
  }
  
  let getRange = function(arr2){
    let range = [];
    arr2 = arr2.sort(numSort)
    for(let i = arr2[0]; i <= arr2[1] ; i++){
      range.push(i)
    }
    return range
  }
  
  
  smallestCommons([7,1]);

  