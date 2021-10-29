function steamrollArray(arr) {
    let flatArr = [] ; 
    let toStr = arr.toString().split(",");
    for(let i = 0 ; i < toStr.length; i++){
      let parsedArr = parseInt(toStr[i]);
      //console.log(toStr[i])
      if (!isNaN(parsedArr) ){
        flatArr.push(parsedArr)
        //console.log(flatArr)
      }else if(toStr[i] == "[object Object]"){
            flatArr.push({});       
      }else if(toStr[i] == ""){
                  
      }else{
        flatArr.push(toStr[i])
      }   
      
    }
    return flatArr
    
    console.log(flatArr)
  }
  
  steamrollArray([1, [2],[],{}, [3, [[4]]]]);