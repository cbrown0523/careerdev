//perimeter
function findPerimeter(length, width) {
return  perimeterOf = (length * 2) + (width * 2)
	

}
findPerimeter(3,5)

//multiple of 100
function divisible(num) {
	if(num % 100 == 0){
		return true
	}else{
		return false
	}
}

//word cont
function countWords(str){	
    let word = 0;
    //i thought split on commas
    let wordCount = str.split(" ") ;
    for(let i = 0 ; i < wordCount.length ; i++){
        word +=1
    }
    console.log(word)
}
    countWords("Just an example here move along")

    //check the ending
    function checkEnding(str1, str2) {
        console.log(str2.endsWith(str1))
            
        }

    //second way of doing it
    
        function checkEnding(str1, str2) {
            str1Length = str1.length;
        str2Length = str2.length;
            console.log(str2Length)
        //pulling out same length of characters as 2nd param
        lastChars = str1.slice(-str2Length)
        console.log(lastChars)
          console.log(str2Length)
        if(lastChars === str2){
          return true
        }else{
          return false
          }
         
    }
    