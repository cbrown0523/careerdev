let ourQuizGrades = [72, 89, 95, 90, 77, 80, 49, 56, 71, 12, 72, 88, 43, 69 ]



for(let i = 0 ; i < ourQuizGrades.length ; i++){

    //console.log(ourQuizGrades[i])
   let grades = ourQuizGrades[i]
   
   //console.log(grades)
   let studentsPassed = 0
	let studentFailed = 0
  console.log(grades)
   switch(grades){
   case (grades < 59) :
   	studentFailed += 1
   break;
   case (grades > 59) :
   	 studentPassed += 1
   break;
 
   
   } 
   console.log(`Students passed ${studentsPassed} and students failed ${studentFailed}`)

    }