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