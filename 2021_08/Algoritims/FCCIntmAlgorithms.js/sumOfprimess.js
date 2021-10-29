function isPrime(num) {
    if (num === 2) return true;
    if (num <= 1) return false;
    for(let i = 2 ; i < num - 1 ; i++)
    if (num % i === 0) {
     return false;
      }
    return true;
   }
   function sumPrimes(num) {
    
    let sum = 0 ; 
    let primeArr = []
    for(let i = 2; i <= num; i++){
      
      if(isPrime(i)){
        primeArr.push(i)
        sum += i
      }
     
    }
    console.log(primeArr)
    return sum
   }
   sumPrimes(10);