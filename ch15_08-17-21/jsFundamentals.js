//challenge 1
function getLastItem(arr) {
	let lastItem = arr.pop()
	return lastItem
}

//challenge 2
function getFirstValue(arr) {
	let fstNum = arr.shift()
	return fstNum
}

//challenge 3
function valueAt(arr, i) {
	let ind = Math.floor(i);
	let arrIndex = arr[ind]
	return arrIndex
	
	console.log(arrIndex)
	
}

//challenge 4
function evenOrOdd(arr) {
    let value = 0;
   for(let i = 0 ; i < arr.length ; i++){
       value += arr[i];
   }
   let mod = value % 2;
   if(mod === 0){
       return "even";
   }
   else {
               return "odd"
           }
       
   }

//challenge 5
function reverse(arr) {
	reverArr = []
	for( let i = arr.length - 1 ; i > -1 ; i--){
		reverArr.push(arr[i])
		
	}
	console.log(...reverArr)
	return reverArr
}

//challenge 6
function circuitPower(voltage, current) {
	let power = voltage * current
	return power
}

//challenge 7
function lessThan100(a, b) {
	if(a + b < 100 ){
		return true
	}
	else{
		return false
	}
}


