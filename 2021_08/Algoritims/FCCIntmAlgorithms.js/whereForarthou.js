function whatIsInAName(collection, source) {
    var finalArr = [];
    for(item of collection){
      let numOfMatch = 0 ;
        //console.log(item)
        for(key in source){
          // console.log(key, source[key]) 
           if(source[key] === item[key]){
             numOfMatch++
            //  console.log(item , key)
           } 
          }
          if(numOfMatch === Object.keys(source).length){

            finalArr.push(item);
          }
    }
      console.log(finalArr)
    return finalArr;
}
    // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }, ], { "apple": 1, "bat": 2 })
 //whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


// function whatIsInAName(collection, source) {
//     var arr1 = [];
//   if(collection[0].hasOwnProperty(source)){
//    let arr1 = arr1.push(collection)
//     console.log(arr)
//   }
//   }
  
//   whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
 

function whatIsInAName(collection, source) {
  var finalArr = [];
  for(item of collection){
    let passedTest = true ;
      //console.log(item)
      for(key in source){
        // console.log(key, source[key]) 
         if(source[key] !== item[key]){
           passedTest = false
          //  console.log(item , key)
         } 
        }
        if(passedTest){

          finalArr.push(item);
        }
  }
    console.log(finalArr)
  return finalArr;
}