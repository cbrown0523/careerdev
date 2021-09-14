function dropElements(arr, func) {
    //console.log(arr)
    for(let i = 0 ; i < arr.length; i++){
      while(arr.length > 0 && !func(arr[0])){
        arr.shift()
        i++
        console.log(arr)
      }
  
  }
  return arr
  
  
  }
  
  dropElements([1, 2, 3, 4], function(n) {return n < 3; });




  