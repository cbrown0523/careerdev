let fs = require('fs')

let departments = fs.readFileSync('employees.txt', 'utf-8').split("\n")
