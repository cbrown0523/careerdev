const { Console } = require('console')
let fs = require('fs')

let employeeDepartments = dataParse(fs.readFileSync('employeeDepartment.txt', 'utf-8').split("\r\n"))
let department = dataParse(fs.readFileSync('departments.txt', 'utf-8').split("\r\n"))
let employees = dataParse(fs.readFileSync('employees.txt', 'utf-8').split("\r\n"))
let salaries = dataParse(fs.readFileSync('salaries.txt', 'utf-8').split("\r\n"))

let employeeName = "";
//let deptNum = "";
//let salary = "";
function dataParse(data){

    let reg = /"/g

    return data.map(d => {
     return d.replace(reg , "").split(",")
    })  
}


//The first 10 elements from each array of the 4 arrays
    console.log(`\n The first ten elements of Department array \n`)
    for(let i = 0 ; i < 9 ; i++ ){
    //department
        let departments = department[i]
        
        console.log(`\n ${[i]} department : ${departments}`)
     }
      //employees
      console.log(`\nThe first ten elements of Employee array\n`)
      for(let i = 0 ; i < 9 ; i++ ){
        let employee = employees[i]
        console.log(`\n ${[i]} Employee: ${employee}`)
    }  
         //employee department
       console.log(`\nThe first ten elements of Employee Department array\n`)
      for(let i = 0 ; i < 9 ; i++ ){
        let employeeDpt = employeeDepartments[i]
        console.log(`\n ${[i]} Employee departments : ${ employeeDpt}`)
      }
        //salaries
        console.log(`\nThe first ten elements of Salary array\n`)
        for(let i = 0 ; i < 9 ; i++ ){
        let salary =  salaries[i]
        console.log(`\n ${[i]} Salary : ${salary}`)
     }
  
     //Log employee 1-40’s name and their department name
   console.log(` \n Log employee 1-40’s name and their department name \n`)
     let firstName = "" ;
     let lastName = "" ;
     let employeeDepart = "" ;
   for(let i = 0 ; i < 41 ; i++){
       firstName = (employees[i][2]);
       lastName = (employees[i][3]);
        //get employeed department
      employeeDepart = (employeeDepartments[i][1])
         
     let departmentName = "";
       switch(employeeDepart) {
       case 'd001' :
         departmentName = "Marketing";
         break;
       case 'd002' :
         departmentName = "Finance";
         break;
       case 'd003' :
         departmentName = "Human Resources";
         break;
       case 'd004' :
         departmentName = "Production";
         break;
       case 'd005' :
         departmentName = "Development";
         break;
          case 'd006' :
         departmentName = "Quality Management";
         break;
          case 'd007' :
         departmentName = "Sales";
         break;
          case 'd008' :
         departmentName = "Research";
         break;
          case 'd009' :
         departmentName = "Customer Service";
         break;
         }
         console.log(`${[i]} Employee ${firstName} ${lastName} works in ${departmentName}`)
 };
    //log the employee name, department name, dept number and salary for all employees earning over $60K
    console.log(` \n log the employee name, department name, dept number and salary for all employees earning over $60K \n`)
       //let firstName = "" ;
       //let lastName = "" ;
       let deptNum = "";
       let currentSalary = "";
       indexOfSalary = "";
       let salary = ""
       /*
       function findIndexs(index){
        for(let i = 0 ; i < salaries.length ; i++){
            if(salaries[i][1] > 60000){
           currentSalary = (salaries[i][1])
           return currentSalary
            
            
            }
        }
        findIndexs()
         indexOfSalary = salaries.findIndex(findIndex);
         console.log(indexOfSalary)
       */
         
       /*  
        for(let i = 0 ; i < salaries.length ; i++){
            if(salaries[i][1] > 60000){
               let  salInfoAboveSixty = (salaries[i][1])
               // let salAboveSixty = salInfoAboveSixty.slice(1, 2)
              //console.log(salInfoAboveSixty)
                
        //let i = 0;
        //while (salInfoAboveSixty){
           //const results = employees.filter(employee => employees[i][2].startsWith('C')) 
        }}
       
       // console.log(salInfoAboveSixty)
//let employeeData = function(){
  */
 //get employee name
for (let i = 0; i < salaries.length; i++) {
  if (salaries[i][1] > 60000) {
    let empSal = salaries[i][1] 
   
    for (let j = 0; j < employees.length; j++) {
      if (employees[j][0] == salaries[i][0]) {
       //console.log(salary)
        employeeName = employees[j][2] + " " + employees[j][3]
        for (let k = 0; k < employeeDepartments.length; k++) {
          if (employeeDepartments[k][0] == salaries[i][0]) {
            deptNum = employeeDepartments[k][1]
          }
        }
      }
    }
    let departmentName = "";
       switch(employeeDepart) {
       case 'd001' :
         departmentName = "Marketing";
         break;
       case 'd002' :
         departmentName = "Finance";
         break;
       case 'd003' :
         departmentName = "Human Resources";
         break;
       case 'd004' :
         departmentName = "Production";
         break;
       case 'd005' :
         departmentName = "Development";
         break;
          case 'd006' :
         departmentName = "Quality Management";
         break;
          case 'd007' :
         departmentName = "Sales";
         break;
          case 'd008' :
         departmentName = "Research";
         break;
          case 'd009' :
         departmentName = "Customer Service";
         break;
         }
    //which statement is inner vs. outer. intention to console data without duplicates
   salary += ` \n Employee ${employeeName} in ${deptNum} ${departmentName} makes ${empSal } dollars per year \n `;
   //console.log(`Employee ${employeeName} in ${deptNum}  makes ${salary} dollars per year`)
 
  }
//console.log(salary)

}
//}
//employeeData()
console.log(salary)

// how use variable anywhere in code to print out names from for loop 

//how may i use functions to ?clean up code ?
//how may i organize statements and line spacing

  
   
        /*let result;
        let salInfoAboveSixty = [] ;
        //get employee name
        for(let i = 0 ; i < salaries.length ; i++){
            if(salaries[i][1] > 60000){
              //salInfoAboveSixty.push(salaries[i])
              salInfoAboveSixty.push(salaries[i].slice(0,2))
       }
       for( let i = 0 ; i < employees.length; i++){

       
         result = employees.filter(employee => employee.includes(salInfoAboveSixty[i])) }   
        
          //result.includes(salInfoAboveSixty)
      }  
    console.log(result)
    
     
    //console.log(salAboveSixty)

        /*
        //findinf first and last name comparing index
        for(let i = 0 ; i > 35 ; i++){
        firstName.push(employees[i][2].filter(findIndex(indexOfSalary)))
        lastName.push(employees[i][3].filter(findIndex(indexOfSalary)))
        getDept()
          function getDept(){
            deptNum = employeeDepartment[i][1].filter(findIndex(indexOfSalary))
             return deptNum
          } }
      let departmentName = "";
      switch(employeeDepart) {
      case 'd001' :
        return departmentName = "Marketing";
        break;
      case 'd002' :
        departmentName = "Finance";
        break;
      case 'd003' :
        departmentName = "Human Resources";
        break;
      case 'd004' :
        return departmentName = "Production";
        break;
      case 'd005' :
        return departmentName = "Development";
        break;
         case 'd006' :
        return departmentName = "Quality Management";
        break;
         case 'd007' :
        return departmentName = "Sales";
        break;
         case 'd008' :
        return departmentName = "Research";
        break;
         case 'd009' :
        return departmentName = "Customer Service";
        break;
        }
            
        console.log(`Employee ${firstName} ${lastName} makes ${currentSalary} dollars per year`)
         
   */
 
        console.log(`\n Only log an employee name once, their salary should be their most recent wage (highest pay)
        \n`)
        //get all dates of work records from each employee
        let employeeData = ""
        for (let i = 0; i < employees.length; i++) {
          let empSalData = []
          for (let j = 0; j < salaries.length; j++) {
            if (employees[i][0] === salaries[j][0]) {
              

              // console.log(salaries[j])
            //let dat = `${firstName} ${lastName} ${salaries[j]}`
             empSalData.push(salaries[j][1])
              //employeeData = employees[i]
              //lastDayOfSal.push(`${salaries}`)
            }
            
          }
          //console.log(employees[i])
         // console.log(empSalData)
         //get the higest pay for each employee
         let firstName = employees[i][2]
          let lastName = employees[i][3]
          let highestPay = empSalData.pop()
          //console.log(highestPay)
          if( highestPay ){
            console.log(`\n${firstName} ${lastName} highest pay was ${highestPay} dollars`)
          }
          
        }  
      
      //console.log(lastDayOfSal)
      //taking all dates of work records from each employee and finding highest pay for each employee 
      /* for(let i = 0 ; i < lastDayOfSal.length ; i++){

        latestDate = lastDayOfSal.splice()
       let empHighestWageDate = new Date(latestDate)
       console.log(empHighestWageDate)
      }
      */
    
   /* console.log(`log the names of all former employees and their last date of work `)
    for (let i = 0; i < employeeDepartments.length; i++) {
      
        //console.log(employees[j][3])
        let dateOfWork = employeeDepartments[i][3].slice(0, 4)
        //console.log(dateOfWork)
         // console.log(`${dateOfWork} ${employeeDepartments[i][3]}`)
       for(let j = 0 ; j < employees.length ; j++){
         let fName = []
         let day = []
         if(employeeDepartments[i][0] === employees[j][0] && dateOfWork !== "9999"){
           fName.push(employees[i][2])
           day.push(dateOfWork)
         console.log(fName)
          console.log(day)
         }
       }
    }
      
      //console.log(dateOfWork)
*/
/*let emp = []
for (let i = 0; i < employeeDepartments.length; i++) {
   let dateOfWork = employeeDepartments[i][3].slice(0, 4)
   if(dateOfWork !== "9999"){
     console.log(`${dateOfWork} ${employeeDepartments[i][0]}`)
     
   }
   //console.log(dateOfWork)
  for(let j = 0 ; j < employees.length ; j++ ){
   if(employeeDepartments[i][0] === employees[j][0]){
     let empName = `${employees[j][2]} ${employees[j][3]}`
     console.log(empName)
   }
    } 
    
  }
  */
 //console.log(employeeDepartments[i])
console.log(`\n log the names of all former employees and their last date of work \n`)
 for (let i = 0; i < employeeDepartments.length - 1; i++) {
   for(let j = 0 ; j < employees.length ; j++ ){
     if(employeeDepartments[i][0] === employees[j][0]){
      //let empName = `${employees[j][2]} ${employees[j][3]}`
      let empDep = []
      let emp = []
      empDep.push(employeeDepartments[i][0])
      emp.push(employees[j][0])
      //console.log(empDep)
      //console.log(emp)   
    let empName = `${employees[j][2]} ${employees[j][3]}`
    let dateOfWork = employeeDepartments[i][3].slice(0, 4)
    if(dateOfWork !== "9999" && employeeDepartments[i][0] !== employeeDepartments[i + 1][0]){
    console.log(`${dateOfWork} ${empName}`)
      
    }
    //console.log(dateOfWork)
   
    
  }}} 
  
 //account for employees over number 10041



    /*
   for(let i = 0 ; i < employeeDepartments.length ; i++){
     for(let j = 0 ; j < employees.length ; j++){
       for(let k = 0 ; k < salaries.length ; k++){
         if(employeeDepartments[0][1])
       
     }
    }
*/
//Log all employee names, who have switched departments

//Log all employee names, who have switched departments
console.log(` \n Log all employee names, who have switched departments \n`)
for (let i = 0; i < employeeDepartments.length - 1; i++) {
  for (let j = 0; j < employees.length; j++) {
    if(employeeDepartments[i][0] == employees[j][0]){
      let empName = `${employees[j][2]} ${employees[j][3]}`
      //console.log(empName)
      if (employeeDepartments[i][0] == employeeDepartments[i + 1][0] && employeeDepartments[i][1] !== employeeDepartments[i + 1][1]) {
        console.log(empName)
      
      }
    }
  }
}

//challenge 4 using one for looop
for (let i = 0; i < employeeDepartments.length; i++) {
  const empDep = employeeDepartments[i];
  const nextEmpDep = employeeDepartments[i + 1];
  if (nextEmpDep !== undefined && empDep[0] == nextEmpDep[0]) {
    const employeeIndex = empDep[0]-10001  
    //console.log(employeeIndex)
    const empName = `${employees[employeeIndex][2]} ${employees[employeeIndex][3]}`
    console.log(empName)
  }

  
}
// Log all employee names, who have received raises
console.log(`\n Log all employee names, who have received raises \n`)
//grab all employees by id
// check salary to find the greastest if more then one mathches for same employee id 
//match employee id from salary and compare to employees
//retreive the name 

 const employeeSalaries = {}
for(let i = 0 ; i < salaries.length ; i++){

 let salData = salaries[i]
 //i dont understand how subtract one gets an two digit num
 // find the index of each id and slice to get index
 let empIndex = salData[0].slice(1) - 1; 
 // use the index to find the match in employees ie employee[4]/ employee[empIndex]
 const empName = employees[empIndex][2] + " " + employees[empIndex][3];
 //assigning an array within an object
if(employeeSalaries[empName] == undefined){
  employeeSalaries[empName] = []
}

 employeeSalaries[empName].push(parseInt(salData[1]))
 //for(let i = 0 ; i < employeeSalaries[empName].length ; i++){
 
 //}
  //console.log(employeeSalaries[empName][0][salData] )
  
  //console.log(employeeSalaries[empName])

}
for(names in employeeSalaries ){
  let arrRaise = employeeSalaries[names]
  //console.log(arrRaise)
  console.log("Employee" + " " + names + " " + "received a raise" + " " + "to" + " " + "$" + Math.max(...arrRaise))
   
  }
//let abc = bc.sort((a,b)=>{a-b})

 




