let fs = require('fs')

let departments = fs.readFileSync('salaries.txt', 'utf-8').split("\n")
