var ourQuizGrades = [
    [ 'Bob', 72 ],  	[ 'Jill', 89 ],
    [ 'Billy', 95 ],	[ 'Grace', 90 ],
    [ 'Jen', 77 ],  	[ 'Tom', 80 ],  
    [ 'Jack', 49 ], 	[ 'Alex', 56 ],
    [ 'Michelle', 71 ], [ 'Bill', 12 ],
    [ 'Neil', 72 ], 	[ 'Sam', 88 ],  
    [ 'Henry', 43 ], [ 'Dave', 69 ]  
  ]
		
  for(let i = 0 ; i < ourQuizGrades.length ; i++){
      //let name = ourQuizGrades[i][0]
      let grade = ourQuizGrades[i][1]
      let numOfFails = 0
      let numOfPass = 0
      //console.log(grade)
      switch(grade){
      case (grade < 59) :
      numOfFails +=1 ;
      break;
      case (grade > 59) :
      numOfPass +=1;
      break;
      }
     }
		console.log(`${numOfFails} received a failing grade ${numOfPass} passed`)