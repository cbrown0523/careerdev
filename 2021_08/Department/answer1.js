
/*const results = restaurants.filter(restaurant => restaurant.name.startsWith('C'))
includes
indexOf
find
some
filter
reduce
concat - non mutating create new array
push- mutating
slice- non mutating return a new array
Object. key , values, entries
findIndex (callback)findIndex(idea => idea === 'Harvest Salad')
forEach numbers.forEach(number => {
    console.log(number);  
string methods
startsWith
*/

import department from "./departmentdata/departments"
import employeeDepartment from "./departmentdata/employeeDepartment"
import employees from "./departmentdata/employees"
import salaries from "./departmentdata/salaries"

const readline = require('readline');
 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

main()
let employeeFirst = employees[i][3]
        let employeeLast = employees[i][2]

console.log(`department number is ${departments}`)

function main() {
    let msg = "The first 10 elements from each array of the 4 arrays "
    rl.question( msg, (name) => { 
        for(let i = 0 ; i < 11 ; i++ ){
           
            //department
            let departments = department[i]
            console.log(`department number is ${departments}`)
            
            //employees
            let employee = employees[i]
            console.log(`Employee: ${employee}`)
            
            //employee department
            let employeeDpt = employeeDepartment[i]
            console.log(`Employee departments : ${employeeDepartment}`)

            //salaries
            let salaries =  salary[i]
            console.log(`Salary : ${salaries}`)
        }
        return log40Employees()
 })
}

function log40Employees(){
    let msg2 = "\nLog employee 1-40’s name and their department name"
    rl.question( msg, (name) => { 
    let firstName = "" ;
    let lastName = "" ;
    let employeeDepart = "" ;
  for(let i = 0 ; i < 41 ; i++){
      firstName.push(employees[i][2]);
      lastName.push(employees[i][3]);
       //get employeed department
     employeeDepart.push(employeeDepartment[i][1])
        
    departmentName = "";
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
        console.log(`${firstName} ${lastName} works in ${departmentName}`)
        return log40Employees()
};
   
})}
function main() {
    let msg = "log the employee name, department name, dept number and salary for all employees earning over $60K"
    rl.question( msg, (name) => { 
        //ask about scope and new function--same variables as above

        let firstName = "" ;
        let lastName = "" ;
       let departmentName = "";
       let deptNum = "";
       let currentSalary = "";
       indexOfSalary = "";
        //get employee name
        for(let i = 0 ; i < salary.length ; i++){
            if(salary[i][1] > 60000){
                currentSalary.push(salary[i][1])
               indexOfSalary =  salary.findIndex(currentSalary);
            }
        //let i = 0;
        //while (indexOfSalary){
           //const results = employees.filter(employee => employees[i][2].startsWith('C')) 
        }
        for(let i = 0 ; i > 35 ; i++){
        firstName.push(employees[i][2].filter(findIndex(indexOfSalary)))
        lastName.push(employees[i][3].filter(findIndex(indexOfSalary)))
        getDept()
          function getDept(){
            deptNum = employeeDepartment[i][1].filter(findIndex(indexOfSalary))
             return deptNum
          } }

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
            
        console.log(`Employee ${firstName} ${lastName} makes ${currentSalary} dollars per year`)
          
        }
  
)
}


