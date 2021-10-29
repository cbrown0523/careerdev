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

//Count how many total females and males there are at this company

//loop through employee data so i can identify each employees gender
//if condition to chech if value is equal to the array index
let empMale = 0
 let empFem = 0
    for(let i = 0 ; i < employees.length ; i++){
    if(employees[i][4] == "M"){
        empMale ++  
    }  
if(employees[i][4] == "F"){
            empFem ++
        }
    }
    console.log(`There are ${empFem} females`)
    console.log(`There are ${empMale} males`) 
    
//Count the total number of employees in each department, include the department name in your logs
console.log(` \n Count the total number of employees in each department, include the department name in your logs \n`)
 //loop through employee department so i can grab each employees department
 
 
   let peopleInDepFin = 0;
   let peopleInDepMarket = 0;
   let peopleInDepHR = 0;
   let peopleInDepProd = 0;
   let peopleInDepDev = 0;
   let peopleInDepQM = 0;
   let peopleInDepSales = 0;
   let peopleInDepRea = 0;
   let peopleInDepCS = 0;
   let info = "" ;
   let dept1;
   let dept2;
   let dept3;
   let dept4;
   let dept5;
   let dept6;
   let dept7;
   let dept8;
   let dept9;
 for(let i = 0 ; i < employeeDepartments.length; i++){
     let empDept = employeeDepartments[i][1] ;
     //console.log(empDept)
     
     //switch statement to match department codes to string name, and count employees in each 
   //console.log(empDept)
   

     switch (empDept) {
         case "d001":
             dept1 = "Marketing";
             peopleInDepMarket += 1;
             break;
         case "d002":
             dept2 = "Finance";
             peopleInDepFin += 1;
             break;
         case "d003":
             dept3 = "Human Resources";
             peopleInDepHR += 1;
             break;
         case "d004":
             dept4 = "Production";
             peopleInDepProd++;
             break;
         case "d005":
             dept5 = "Development";
             peopleInDepDev += 1;
             break;
         case "d006":
             dept6 = "Quality Management";
             peopleInDepQM += 1;
             break;
         case "d007":
             dept7 = "Sales";
             peopleInDepSales += 1;
             break;
         case "d008":
             dept8 = "Research";
             peopleInDepRea += 1;
             break;
         case "d009":
             dept9 = "Customer Service";
             peopleInDepCS += 1;
             break;
          
   }

 }  
 info += `\n There are  ${peopleInDepMarket} in ${dept1},  ${ peopleInDepFin} in ${dept2},  ${peopleInDepHR} in ${dept3},  ${peopleInDepProd} in ${dept4},  ${peopleInDepDev} in ${dept5},  ${peopleInDepCS} in ${dept6},  ${ peopleInDepSales} in ${dept7},  ${peopleInDepRea} in ${dept8}, ${peopleInDepCS} in ${dept9},  ${peopleInDepRea} in ${dept8}`
 console.log(info)

 //Log the number of males and females in each department

 console.log(`Log the number of males and females in each department`)
 let empIndex;
 let empData = [];
 let arr;
 let empGen;
for(let i = 0 ; i < employeeDepartments.length -1 ; i++){
    let empGender = employees[i][4];
    let empId;
    if(employeeDepartments[i][0] !== employeeDepartments[i + 1][0] && employeeDepartments[i + 1][0] !== undefined)
    {
      empId = employeeDepartments[i][0] 
      empDep = employeeDepartments[i][1]
      //console.log(empDep)
    let empIndex = empId - 10001
    empData = employees[empIndex]
    console.log(empData)
    }
//
 //empGen = arr[0][4]
    
    //console.log(arr)
    for ( let i = 0 ; i <  empData.length ; i++){
        //console.log( empData[i])
    }
    }
    let depString = ""
    let FMarketing = 0;
    let MMarketing = 0; 
    let FFinance = 0;
    let MFinance = 0;
    let FHumanResources = 0;
    let MHumanResources = 0;
    let FQualityManagement = 0;
    let MQualityManagement = 0;
    let FSales = 0;
    let MSales = 0;
    let FResearch = 0;
    let MResearch = 0;
    let MCustomerService = 0;
    let FCustomerService = 0;
    let MDevelopment = 0;
    let FDevelopment = 0;
    let FProduction = 0;
    let MProduction = 0;
 
    if(empGen == "F" && empDep == "d001"){
        FMarketing +=1
    }
    if(empGen == "M" && empDep == "d001"){
        MMarketing +=1
    }
    if(empGen == "F" && empDep == "d002"){
        FFinance +=1
    }
    if(empGen == "M" && empDep == "d002"){
        MFinance +=1
    }
    if(empGen == "F" && empDep == "d004"){
        FProduction +=1
    }
    if(empGen == "M" && empDep == "d004"){
        MProduction +=1
    }
    if(empGen == "M" && empDep == "d005"){
        MDevelopment +=1
    }
    if(empGen == "F" && empDep == "d005"){
        FDevelopment +=1
    }
    if(empGen == "F" && empDep == "d006"){
        FQualityManagement +=1
    }
    if(empGen == "M" && empDep == "d006"){
        MQualityManagement +=1
    }
    if(empGen == "F" && empDep == "d007"){
        FSales +=1
    }
    if(empGen == "M" && empDep == "d007"){
        MSales +=1
    }
    if(empGen == "F" && empDep == "d008"){
        FResearch +=1
    }
    if(empGen == "M" && empDep == "d008"){
        Research +=1
    }
    if(empGen == "M" && empDep == "d009"){
        FCustomerService +=1
    }
    if(empGen == "M" && empDep == "d009"){
        MCustomerService+=1
    }
        let departmentName = "";
           switch(empDep) {
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
        depString += `There are ${FMarketing} females in Marketing and ${MHumanResources} male in Marketing
        \n${ FFinance} females in Finance and ${ MFinance} males in Finance
        \n ${ FHumanResources} females in Human Resource and ${ MHumanResources} males in Human Resource
        \n ${ FProduction} females in Production and ${ MProduction} males in Production
        \n ${ FDevelopment} females in  Developmentand ${ MDevelopment} males in Development
        \n ${ FQualityManagement} females in Quality Management and ${ MQualityManagement} males in Quality Management
        \n ${ FSales} females in Sales and ${ MSales}males in Sales
        \n ${ FResearch} females in Research and ${ MResearch} males in Research
        \n ${ FCustomerService} females in Customer Service and ${ MCustomerService} males in Customer Service
        `
        console.log(depString)
        
    
      
            