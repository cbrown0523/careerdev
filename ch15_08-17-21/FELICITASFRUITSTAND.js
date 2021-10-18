// three different kinds of fruit (Apples, Oranges and Grapes)
// One specific variety of each fruit type (Granny Smith, Navel, Concord)
//price for each
//qty purchased for each
//output of the total sale amount for all fruit purchased

let fruits = ["Granny Smith Apples" , "Navel organges", "Green grapes"]
let prices = [9 , 4 , 7]
quanity = [3 , 7 , 9]

for( i = 0 ; i < 3 ; i++){
    results = `I purchased ${quanity[i]} ${fruits[i]} for ${prices[i]} dollars at the fruit stand`
    console.log(results)
    return results
}

