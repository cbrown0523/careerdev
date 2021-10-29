function largestOfFour(arr) {
  
    let largestNum = []
    for(let i = 0 ; i < arr.length ; i++){
  //console.log(arr[i]) 
       let largestNum2 = -Infinity
        for(let j = 0 ; j < arr[i].length ; j++){
        //console.log(arr[i][j])
           if(arr[i][j] > largestNum2) {
             largestNum2 = arr[i][j]
             //console.log(largestNum2)
           
            
           }
        } largestNum.push(largestNum2)
        
       
  
    }
       //console.log(largestNum )
        return largestNum
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);