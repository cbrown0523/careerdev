function reverse(arr) {
	reverArr = []
	for( let i = arr.length - 1 ; i > -1 ; i--){
		reverArr.push(arr[i])
		
	}
	console.log(...reverArr)
	return reverArr
}