function evenOrOdd(arr) {
    let value = 0;
   for(let i = 0 ; i < arr.length ; i++){
       value += arr[i];
   }
   let mod = value % 2;
   if(mod === 0){
       return "even";
   }
   else {
               return "odd"
           }
       
   }
