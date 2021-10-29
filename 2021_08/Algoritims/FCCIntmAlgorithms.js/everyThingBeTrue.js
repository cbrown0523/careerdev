function truthCheck(collection, pre) {
    let counter = 0;
   for(let item in collection){
     if(collection[item].hasOwnProperty(pre) && Boolean(collection[item][pre]) ){
     counter++
     }
   }
    return counter == collection.length
    console.log(counter)
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


  function truthCheck(collection, pre) {
    let everythingTruthy = true;
   for(let item in collection){
     if(!(collection[item].hasOwnProperty(pre) && Boolean(collection[item][pre])) ){
     everythingTruthy = false
     }
   }
    return everythingTruthy 
  
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");