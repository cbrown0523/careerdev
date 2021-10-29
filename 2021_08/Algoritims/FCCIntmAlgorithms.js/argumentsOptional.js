
function addTogether() {
    const [first, second] = arguments
    if (typeof (first) !== 'number'){
      return undefined
    }else if(second === undefined){
      return function(two)
       { if(typeof two !== "number"){
         return undefined
       }
         return first + two
      }
     
    }else if(typeof (second) !== 'number') {
      return undefined
    }else {
      return first + second 
    }

   }
 console.log( addTogether(2)([3]))