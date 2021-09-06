function repeatStringNumTimes(str, num) {
    var numTimes = '';
     while (num > 0 ){
   numTimes += str
   num --
     }
     return numTimes;
   }
   
   repeatStringNumTimes("abc", 3);