import department from "./departments"
import employeeDepartment from "./employeeDepartment"
import employees from "./employees"
import salaries from "./salaries"

// departmentArr 
for(let i = 0 ; i < 11 ; i++ ){
    let department = department[0][i]
    console.log(department)
}
//how to iterate only til 10
for(let i = 0 ; i < department.length ; i++){
   for( let j = 0 ; j < /*<=10*/department[i].length ; i++){
       console.log(department[i][j])
   }
}

for(let i = 0 ; i < department[0].length ; i++){
    console.log(department[0][i])
}
for(let i = 0 ; i < employeeDepartment[0].length ; i++){
    console.log(employeeDepartment[0][i])
}
for(let i = 0 ; i < salaries[0].length ; i++){
    console.log(salaries[0][i])
}
for(let i = 0 ; i < employees[0].length ; i++){
    console.log(employees[0][i])
}


  /*
  departments: i: department data
  departments: i: 0: single
  departments: i: 1: department id
  */
  
//try put into function
  
//getting names will concatenate and use switch 

  let firstName = []
  for(let i = 0 ; employees[0].length ; i++){
      firstName.push(employees[0][2])
  }

  let lastName = ""
  for(let i = 0 ; employees[0].length ; i++){
      firstName.push(employees[0][3])
  }

  /*let firstName = []
  for(let i = 0 ; employees.length ; i++){
      for(let j = 0 ; j < employees[i].length; j++)
      firstName.push(employees[i][2])
  }*/

  employeeDepart = ""
  for(let i = 0 ; i < employeeDepartment[0].length ; i++){
    employeeDepart.push(employeeDepartment[0][1])
  
 
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
    };

  employeeId = []
  for(let i = 0 ; i < employeeDepartment[0].length ; i++){
    employeeDepart.push(employeeDepartment[0][0])
  }

console.log(`{firstName} {lastName} {departmentName}`)
