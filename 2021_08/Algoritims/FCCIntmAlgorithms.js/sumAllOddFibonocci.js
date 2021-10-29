function sumFibs(num) {
    var num1 = 0;
    var num2 = 1;
    var sum;
    var i = 0;
    while(num2 <= num){
      if(num2 % 2 !==0){
        i +=num2
      }
    num2 +=num1
    num1 = num2 - num1
    }
    return i
    }
    
    sumFibs(4);