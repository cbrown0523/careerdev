/*function fearNotLetter(str) {
 var alpha ='abcdefghijklmnopqrstuvwxyz'
 let indexOffset = alpha.indexOf(str[0]);
for( let i = 0 ; i < str.length ; i++){  
   if(str[i] !== alpha[i + indexOffset]){
  //break;
   console.log(str[i])
  
   }
    
  // console.log(alpha[i + indexOffset])
 //console.log(indexOffset + i)
}
// console.log(indexOffset);
}

fearNotLetter("abce");


//iterate

// find first index of str 
//return index of false element */
function fearNotLetter(str) {
    var alpha ='abcdefghijklmnopqrstuvwxyz';
    let strSplit = str.split("")
    let missingLetter = "";
    for( let i = 0; i < strSplit.length; i++){
      if(strSplit[i] !== alpha[i]){
        strSplit.splice(i, 0, alpha[i]);
        missingLetter = alpha[i];
      }
      else if (alpha.length === str.length){
        return undefined;
      }
     
       
    }return missingLetter
    //console.log(strSplit)
  }
  
  fearNotLetter("abce");
  