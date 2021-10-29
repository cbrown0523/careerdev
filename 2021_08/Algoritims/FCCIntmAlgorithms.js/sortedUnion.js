function uniteUnique(arr) {
    let uniqueArr = [];
     for(let i = 0 ; i < arguments.length ; i++){
       let arg = arguments[i]
       //console.log(arg)
       for(let j = 0 ; j < arg.length ; j++){
     let argIndex = (arg[j]);
     if(uniqueArr.indexOf(argIndex) < 0){
       uniqueArr.push(argIndex)
     }
       }
     }
     return uniqueArr;
   }
   
   uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

   /*function uniteUnique(arr) {
    let uniqueArr = [];
    let arg1 = arguments
    //console.log(arg1[1])
    uniqueArr = arg1[0]
    for(let j = 0 ; j < uniqueArr.length ; j++){
    for(let i = 0 ; i < arg1[1].length ; i++){
      //for(let j = 0 ; j < arg1[j].length ; j++){
       //
     // if(arg1[1][i] != uniqueArr[j]){
        //uniqueArr.push(arr[1][i])
     // }
      }
      
      
      //console.log(arg1[1][0])
    }
    }
    
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);*/