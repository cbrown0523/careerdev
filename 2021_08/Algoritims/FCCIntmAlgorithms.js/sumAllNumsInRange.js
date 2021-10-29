function sumAll(arr) {
    let max = Math.max(arr[0] , arr[1]);
    let min = Math.min(arr[0] , arr[1]);
    let inBetween = 0;
    for( let i = min ; i<= max; i++){
      inBetween +=i
    }
    return inBetween
    }
    
    sumAll([1, 4]);