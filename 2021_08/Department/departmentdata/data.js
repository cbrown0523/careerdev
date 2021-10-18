const { Console } = require('console')
let fs = require('fs')

let employeeDepartments = dataParse(fs.readFileSync('employeeDepartment.txt', 'utf-8').split("\r\n"))
let department = dataParse(fs.readFileSync('departments.txt', 'utf-8').split("\r\n"))
let employees = dataParse(fs.readFileSync('employees.txt', 'utf-8').split("\r\n"))
let salaries = dataParse(fs.readFileSync('salaries.txt', 'utf-8').split("\r\n"))

let employeeName = "";
let deptNum = "";
let salary = "";
function dataParse(data){

    let reg = /"/g

    return data.map(d => {
     return d.replace(reg , "").split(",")
    })  
}
/*console.log(employees)

//The first 10 elements from each array of the 4 arrays
    console.log(`The first ten elements of Department array`)
    for(let i = 0 ; i < 9 ; i++ ){
    //department
        let departments = department[i]
        
        console.log(`${[i]} department : ${departments}`)
     }
      //employees
      console.log(`The first ten elements of Employee array`)
      for(let i = 0 ; i < 9 ; i++ ){
        let employee = employees[i]
        console.log(`${[i]} Employee: ${employee}`)
    }  
         //employee department
       console.log(`The first ten elements of Employee Department array`)
      for(let i = 0 ; i < 9 ; i++ ){
        let employeeDpt = employeeDepartments[i]
        console.log(`${[i]} Employee departments : ${ employeeDpt}`)
      }
        //salaries
        console.log(`The first ten elements of Salary array`)
        for(let i = 0 ; i < 9 ; i++ ){
        let salary =  salaries[i]
        console.log(`${[i]} Salary : ${salary}`)
     }
     */
     //Log employee 1-40’s name and their department name
    /* console.log(`Log employee 1-40’s name and their department name`)
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
    console.log(`log the employee name, department name, dept number and salary for all employees earning over $60K`)
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
        /*
         
         for(let i = 0 ; i < salaries.length ; i++){
            if(salaries[i][1] > 60000){
               let  salInfoAboveSixty = (salaries[i][1])
               // let salAboveSixty = salInfoAboveSixty.slice(1, 2)
              console.log(salInfoAboveSixty)
                
        //let i = 0;
        //while (salInfoAboveSixty){
           //const results = employees.filter(employee => employees[i][2].startsWith('C')) 
        }}
        */
       // console.log(salInfoAboveSixty)
//let employeeData = function(){
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
    //which statement is inner vs. outer. intention to console data without duplicates
   salary += `Employee ${employeeName} in ${deptNum}  makes ${empSal } dollars per year \n `;
   //console.log(`Employee ${employeeName} in ${deptNum}  makes ${salary} dollars per year`)
 
  }
  //console.log(salary)

}
//}
//employeeData()
console.log(salary)

// how use variable anywhere in code ie print out names from for loop 

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