import department from "./departments"
import employeeDepartment from "./employeeDepartment"
import employees from "./employees"
import salaries from "./salaries"

const readline = require('readline');
 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

main()

function main() {
    let msg = "The first 10 elements from each array of the 4 arrays "
    rl.question( msg, (name) => { 
        userName = name;
        console.log("Hello, " + name);
        return selectCar()
 })
}

function selectCar(){
    let msg2 = "\nWhat car do you want to rent: \n"
    let count = 1;
    availableCars.forEach((car)=> {
        msg2 += `${(count)}  ${(car.company)} ${(car.type)}\n`
        count++
    });