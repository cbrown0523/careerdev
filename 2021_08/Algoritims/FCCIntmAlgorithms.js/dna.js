function pairElement(str) {
    let arr2 = []
     for(let i = 0 ; i< str.length ; i++){
      if(str[i] === "G"){
        arr2.push(["G","C"])
     
      }
      else if(str[i] === "C"){
        arr2.push(["C","G"])
      }
       else if(str[i] === "T"){
        arr2.push(["T","A"])  
      }
        else if(str[i] === "A"){
        arr2.push(["A","T"])  
      }
     }
     return arr2
   
     
   }
   
   pairElement("GCG");

   function uniteUnique(arr) {
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

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);